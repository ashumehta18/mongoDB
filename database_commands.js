show dbs //== will appear all the available databases
  use db_name //== will create if not exits and switches to that database
  db //= show current database
  db.dropDatabase() //= will delete /drop a database
  
INDEXES:


COLLECTION MANAGMENT:
show collections //== will show all collections
db.createCollection("name_collection") //= create
db.myCollection.drop() //= drop / delete 
db.myCollection.countDocuments() //= count documents in a particular collection
