const {Salle}=require('./Salle.js')
const {Filere}=require('./Filiere.js')
const {Etudiant}=require('./Etudiants.js')

const MongoClient=require('mongodb').MongoClient;

const url='mongodb://localhost:27017';

const dbName="DB_Projet2022";// qui va etre créer s'il n'existe pas encore

function Connexion_Bd()
{
  MongoClient.connect(url,function(err,client){
    if(err) throw err;
    console.log("connecté à db");
    const db=client.db(dbName);
    client.close;
  });
}


function Insertion(nom_Collection,mon_obj)
{
    MongoClient.connect(url,function(err,client){
        if(err)throw err;
        const db=client.db(dbName);
        var obj=mon_obj;
        db.collection(nom_Collection).insertOne(obj,function(err,res){
          if(err) throw err;
          console.log("1 document enregistrer");
          client.close;
        });
    });
}

function FindAll(nom_Collection)
{
  MongoClient.connect(url,function(err,client){
      if(err) throw err;
      const db=client.db(dbName);
      db.collection(nom_Collection).find({}).toArray(function(err,res){
        console.log(res);
        db.close;
      });
      
  });
}

function FindOne(nom_Collection)
{
  MongoClient.connect(url,function(err,client){
      if(err) throw err;
      const db=client.db(dbName);
      db.collection(nom_Collection).findOne({},function(err,res){
        console.log(res);
        db.close;
      });
      
  });
}

function Find(nom_Collection,obj_rechercher)
{
  MongoClient.connect(url,function(err,client){
      if(err) throw err;
      const db=client.db(dbName);
      // ef kobo ny nom any collection=> kobo le classe 
      
      db.collection(nom_Collection).find(obj_rechercher).toArray(function(err,res){
        console.log(res);
        db.close;
      });
      
  });
}

function DeleteOne(nom_Collection,obj_a_supprimer)
{
  MongoClient.connect(url,function(err,client){
    if(err) throw err;
    const db=client.db(dbName);
    db.collection(nom_Collection).deleteOne(obj_a_supprimer,function(err,resultat){
        if(err) throw err;
        else{
          console.log("1 element supprimé");
        }
    });
  });
}

//Connexion_Bd();
console.log("**********-*********");
const Kilasy=new Salle("IGGLIA",100);
//sal.Afficher();
//Insertion("Salle",Kilasy);
//FindAll("Salle");
//FindOne("Salle");
//Find("Salle",Kilasy);
//DeleteOne("Salle",Kilasy);
module.exports={
Salle,
}