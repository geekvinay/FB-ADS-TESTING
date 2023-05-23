const axios = require('axios')
const urlCRM =
  'https://qa-platform.vedantuint.net/vedantudata/homedemo/requestHomeDemo'

async function hitCRM (data) {
  console.log('Hitting the CRM')
  //   const result = await axios.post(urlCRM, data)
  console.log('The data on call => ', data)
}

module.exports = hitCRM
