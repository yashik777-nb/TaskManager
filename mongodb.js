// CRUD Create Read Update and Delete
// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.getTimestamp());
// console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) return console.log("Unable to Connect to Database");

    const db = client.db(databaseName);

    // Single User Insert
    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Bhagavan",
    //     age: 28,
    //   },
    //   (error, result) => {
    //     if (error) return console.log("unable to insert user");
    //     console.log(result.ops);
    //   }
    // );

    // Multiple Users Insert
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Sai",
    //       age: 21,
    //     },
    //     {
    //       name: "Sam",
    //       age: 32,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) return console.log("Recordss failed to insert");
    //     console.log(result.ops);
    //   }
    // );

    // Multiple Tasks Insertion
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Task One",
    //       completed: true,
    //     },
    //     {
    //       description: "Task Two",
    //       completed: false,
    //     },
    //     {
    //       description: "Task Three",
    //       completed: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) return console.log("Error creating tasks");
    //     console.log(result.ops);
    //   }
    // );

    // Read Data
    // Single User
    // db.collection("users").findOne(
    //   { _id: new ObjectID("601078e2a11f3f1674e6406c") },
    //   (error, user) => {
    //     if (error) return console.log("unable to fetch");
    //     console.log(user);
    //   }
    // );

    // Multiple Users
    // db.collection("users")
    //   .find({ age: 28 })
    //   .toArray((error, users) => console.log(users));

    // db.collection("users")
    //   .find({ age: 28 })
    //   .count((error, users) => console.log(users));

    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("60107dc1bd44422becf446d2") },
    //   (error, task) => console.log(task)
    // );

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => console.log(tasks));

    // Update Data
    // Update User
    // db.collection("users")
    //   .updateOne(
    //     { _id: new ObjectID("60107af93c77dc42ecd5a250") },
    //     {
    //       $set: {
    //         name: "Yash IK",
    //       },
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((data) => console.log(data.matchedCount, data.modifiedCount))
    //   .catch((err) => console.log(err));

    // Update Many
    // db.collection("tasks")
    //   .updateMany(
    //     { completed: false },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((data) => console.log(data.matchedCount, data.modifiedCount))
    //   .catch((err) => console.log(err));

    // Delete Data
    // Delete Multiple data
    db.collection("users")
      .deleteMany({ age: 29 })
      .then((result) => console.log(result.deletedCount))
      .catch((err) => console.log(err));

    db.collection("tasks")
      .deleteMany({ _id: new ObjectID("60107dc1bd44422becf446d2") })
      .then((result) => console.log(result.deletedCount))
      .catch((err) => console.log(err));
  }
);
