## mongoDB Crud

CRUD stands for Create, Read, Update,Delete

To see all db use

    show dbs

Create/Switch to a DB

    use [DB name]

Add data to a collection with(Bson value):

    db.[collection_name].insertOne({
        "key":value
    })

To see the data: 

    db.[collection_name].find()
    db.[collection_name].find().pretty()

### Create
Create can be done in two ways:

    insertOne(data,options)
    insertMany(data,options)

### Read
Read can be done in two ways:

        find(filter,options)
        findOne(filter,options)

findOne returns the first data it finds

### update

    updateOne(filter,data,options)
    updateMany(filter,data,options)
    replaceOne(filter,data,options)

### Delete

    deleteOne(filter,option)
    deleteMany(filter,option)

how filters work
Eg 
    db.studentData.deleteOne({email: "test@gmail.com"})

update eg

    db.studentData.updateOne({"old_data_field":data},{$set: {"new_data_field":newdata}})