const MongoClient=require('mongodb').MongoClient;

const url='mongodb://localhost:27017';

const dbName="DB_Projet2022";// qui va etre créer s'il n'existe pas encore

MongoClient.connect(url,function(err,client){
  if(err) throw err;
  console.log("connecté à db");
  const db=client.db(dbName);
  client.close;
});