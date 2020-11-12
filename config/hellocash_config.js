const common = {
  base_url: 'https://api-et.hellocash.net'
}
module.exports = {  
  account:{
    principal:   process.env.HC_PRINCIPAL,
    credentials: process.env.HC_CREDENTIALS,
    system: 'lucy'
  },
  api :{
    url: common.base_url,
    endpoints: {
      authenticate: common.base_url+'/authenticate',
      invoices:     common.base_url+'/invoices',
      transfers:    common.base_url+'/transfers',
      authorize:    common.base_url+'/authorize',
      accounts:     common.base_url+'/accounts'
    }
  }
}