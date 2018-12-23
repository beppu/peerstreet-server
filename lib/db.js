const knexConfig = require('../knexfile.js')
const tier       = process.env.NODE_ENV || 'development'
const knex       = require('knex')(knexConfig[tier])

const METRO = 'Metropolitan Statistical Area'

const functions = {

  /**
   * Find CBSA for the given ZIP code
   *
   * @param   {String} zip                 - ZIP code
   * @returns {Promise<Integer|undefined>}   CBSA code
   */
  async cbsa(zip) {
    const res = await knex.raw('SELECT cbsa FROM zip_to_cbsa WHERE zip = ?', [zip])
    if (res.rows.length) {
      return res.rows[0].cbsa
    } else {
      return undefined
    }
  },

  /**
   * Find an alternate CBSA code if it exists
   * @param   {Number} cbsa                - CBSA code
   * @returns {Promise<Integer|undefined>}   alternate CBSA code
   */
  async alternateCbsa(cbsa) {
    const res = await knex.raw('SELECT cbsa FROM cbsa_to_msa WHERE mdiv = ?', [cbsa])
    if (res.rows.length) {
      return res.rows[0].cbsa
    } else {
      return undefined
    }
  },

  /**
   * Return MSA for the given CBSA code
   * @param   {Number} cbsa               - CBSA code
   * @param   {String} lsad               - name of aggregation category (optional)
   * @returns {Promise<Object|undefined>}   MSA data
   */
  async msa(cbsa, lsad) {
    if (cbsa === 99999) return undefined
    const vars = lsad ? [cbsa, lsad] : [cbsa]
    const res = await knex.raw(`
      SELECT cbsa, mdiv, name, lsad, popestimate2014, popestimate2015
      FROM cbsa_to_msa
      WHERE ${lsad ? 'cbsa = ? AND lsad = ?' : 'cbsa = ?'}
    `, vars)
    return res.rows[0]
  },

  /**
   * Return MSA for the given ZIP code
   * @param   {String} zip                - ZIP code
   * @returns {Promise<Object|undefined>}   MSA data
   */
  async msaByZip(zip) {
    const cbsa = await this.cbsa(zip)
    if (cbsa && cbsa !== 99999) {
      const cbsa2 = await this.alternateCbsa(cbsa)
      if (cbsa2) {
        return this.msa(cbsa2, METRO)
      } else {
        return this.msa(cbsa)
      }
    } else {
      return undefined
    }
  }

}

module.exports = {
  knex,
  knexConfig,
  ...functions
}
