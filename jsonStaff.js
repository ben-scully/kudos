var knex = require('./db/knexMaster')
fs = require('fs');


console.log('Start inserting Staff objs from txt in to DB...')


fs.readFile('./jsonStaff.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  var allFileStaff = JSON.parse(data)
  var allDbStaff = []

  for (var idx in allFileStaff) {
    var fileStaff = allFileStaff[idx]

    allDbStaff.push({
      objectGuid: fileStaff.ObjectGuid,
      name: fileStaff.Name,
      samAccountName: fileStaff.SamAccountName
    })
  }

  for (var idx in allDbStaff) {
    var staffObj = allDbStaff[idx]
    knex('staffs').insert(staffObj).then()
  }


  console.log('Finished.')
});
