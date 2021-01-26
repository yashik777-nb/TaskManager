// CRUD Create Read Update and Delete

const MongoClient = require("mongodb").MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) return console.log("Unable to Connect to Database");

    const db = client.db(databaseName);

    // Single User Insert
    // db.collection("users").insertOne(
    //   {
    //     name: "Yash",
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
    db.collection("tasks").insertMany(
      [
        {
          description: "Task One",
          completed: true,
        },
        {
          description: "Task Two",
          completed: false,
        },
        {
          description: "Task Three",
          completed: true,
        },
      ],
      (error, result) => {
        if (error) return console.log("Error creating tasks");
        console.log(result.ops);
      }
    );
  }
);
