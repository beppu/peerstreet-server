
exports.up = async function(knex, Promise) {
  return knex.schema.createTable('zip_to_cbsa', (table) => {
    table.string('zip')
    table.integer('cbsa')
    table.float('res_ratio')
    table.float('bus_ratio')
    table.float('oth_ratio')
    table.float('tot_ratio')
  }).createTable('cbsa_to_msa', (table) => {
    table.integer('cbsa')
    table.string('mdiv')
    table.string('stcou')
    table.string('name')
    table.string('lsad')
    table.integer('census2010pop')
    table.integer('estimatesbase2010')
    table.integer('popestimate2010')
    table.integer('popestimate2011')
    table.integer('popestimate2012')
    table.integer('popestimate2013')
    table.integer('popestimate2014')
    table.integer('popestimate2015')
    table.integer('npopchg2010')
    table.integer('npopchg2011')
    table.integer('npopchg2012')
    table.integer('npopchg2013')
    table.integer('npopchg2014')
    table.integer('npopchg2015')
    table.integer('births2010')
    table.integer('births2011')
    table.integer('births2012')
    table.integer('births2013')
    table.integer('births2014')
    table.integer('births2015')
    table.integer('deaths2010')
    table.integer('deaths2011')
    table.integer('deaths2012')
    table.integer('deaths2013')
    table.integer('deaths2014')
    table.integer('deaths2015')
    table.integer('naturalinc2010')
    table.integer('naturalinc2011')
    table.integer('naturalinc2012')
    table.integer('naturalinc2013')
    table.integer('naturalinc2014')
    table.integer('naturalinc2015')
    table.integer('internationalmig2010')
    table.integer('internationalmig2011')
    table.integer('internationalmig2012')
    table.integer('internationalmig2013')
    table.integer('internationalmig2014')
    table.integer('internationalmig2015')
    table.integer('domesticmig2010')
    table.integer('domesticmig2011')
    table.integer('domesticmig2012')
    table.integer('domesticmig2013')
    table.integer('domesticmig2014')
    table.integer('domesticmig2015')
    table.integer('netmig2010')
    table.integer('netmig2011')
    table.integer('netmig2012')
    table.integer('netmig2013')
    table.integer('netmig2014')
    table.integer('netmig2015')
    table.integer('residual2010')
    table.integer('residual2011')
    table.integer('residual2012')
    table.integer('residual2013')
    table.integer('residual2014')
    table.integer('residual2015')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('cbsa_to_msa')
    .dropTable('zip_to_cbsa')

};
