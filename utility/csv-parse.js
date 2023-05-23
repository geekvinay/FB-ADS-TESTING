const csv_parser = require('csv-parser')
const fs = require('fs')
const pathName = require('../utility/csv-parse.js')
const hitCRM = require('../utility/hit-CRM.js')
const schema = {
  action: 'POST_LEAD_DATA',
  dataType: 'LEAD_ACTIVITY_HOME_DEMO',
  pageType: 'P1',
  params: {
    contactNumber: '8888888888',
    phoneCode: '+91',
    fullName: 'Joe Drake',
    grade: '10',
    target: 'JEE',
    board: 'CBSE',
    pageURL: 'https://ads.facebook.com'
  }
}

function csvParser (path) {
  console.log(path)
  fs.createReadStream(path)
    .pipe(csv_parser())
    .on('data', row => {
      // Process the data here and hit CRM
      hitCRM(row)
    })
    .on('end', () => {
      console.log('CSV file successfully processed.')
    })
}

module.exports = csvParser
