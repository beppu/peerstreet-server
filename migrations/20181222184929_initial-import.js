exports.up = async (knex, Promise) => {
  await knex.raw(`
    COPY zip_to_cbsa(zip, cbsa, res_ratio, bus_ratio, oth_ratio, tot_ratio)
    FROM '${__dirname}/../data/zip_to_cbsa.unix.csv' DELIMITER ',' CSV HEADER;
  `)
  return knex.raw(`
    COPY cbsa_to_msa(cbsa, mdiv, stcou, name, lsad, census2010pop, estimatesbase2010, popestimate2010, popestimate2011, popestimate2012, popestimate2013, popestimate2014, popestimate2015, npopchg2010, npopchg2011, npopchg2012, npopchg2013, npopchg2014, npopchg2015, births2010, births2011, births2012, births2013, births2014, births2015, deaths2010, deaths2011, deaths2012, deaths2013, deaths2014, deaths2015, naturalinc2010, naturalinc2011, naturalinc2012, naturalinc2013, naturalinc2014, naturalinc2015, internationalmig2010, internationalmig2011, internationalmig2012, internationalmig2013, internationalmig2014, internationalmig2015, domesticmig2010, domesticmig2011, domesticmig2012, domesticmig2013, domesticmig2014, domesticmig2015, netmig2010, netmig2011, netmig2012, netmig2013, netmig2014, netmig2015, residual2010, residual2011, residual2012, residual2013, residual2014, residual2015)
    FROM '${__dirname}/../data/cbsa_to_msa.csv' DELIMITER ',' CSV HEADER;
  `)
};

exports.down = async (knex, Promise) => {
  await knex.raw('DELETE FROM zip_to_cbsa;')
  return knex.raw('DELETE FROM cbsa_to_msa')
};
