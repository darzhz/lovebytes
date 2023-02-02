 let Datastore = require('nedb')
exports.initDb = function(){
  let db = new Datastore({ filename: './model/database.db', autoload: true });
  return db;
}
