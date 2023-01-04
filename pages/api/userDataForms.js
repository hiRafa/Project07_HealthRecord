import {
  connectToMongoDB,
  getUserData,
  updateUserData,
} from "../../helpers/mongodb-helper";

// API back end fr each product ID, fetching COMMENTS AND ADDING NEW

async function handler(req, res) {
  // let MongoClientConnection;
  // try {
  //   MongoClientConnection = await connectToMongoDB();
  // } catch (error) {
  //   res.status(500).json({ message: "Connecting to the database failed!" });
  //   return;
  // }
  // if (req.method === "POST") {
  //   const { currentUserEmail, ...dataFromChild } = req.body;
  //   // console.log(currentUserEmail);
  //   const data = { ...dataFromChild };
  //   // console.log(data);
  //   let result;
  //   // result = MongoClientConnection.db()
  //   //   .collection("users")
  //   //   .updateOne(
  //   //     { email: currentUserEmail },
  //   //     {
  //   //       $set: {
  //   //         ...data,
  //   //       },
  //   //     }
  //   //   );
  //   // console.log(result);
  //   try {
  //     result = await MongoClientConnection.db()
  //       .collection("users")
  //       .updateOne(
  //         { email: currentUserEmail },
  //         {
  //           $set: {
  //             ...data,
  //           },
  //         }
  //       );
  //     res.status(201).json({ message: "Data Saved" });
  //   } catch (error) {
  //     res.status(500).json({ message: "Inserting comment failed!" });
  //   }
  // }
  // // problem using the current email as filter
  // if (req.method === "GET") {
  //   // console.log(req.method);
  //   // console.log(currentUserEmail);
  //   // let userData;
  //   // userData = MongoClientConnection.db().collection("users").toArray();
  //   // console.log(userData);
  //   // → trying to get the data com the database, sending the request from the component to the database
  //   try {
  //     // ← using the helper function geAllDocuments to filter the information
  //     const userData = await MongoClientConnection.db()
  //       .collection("users")
  //       .toArray();
  //     console.log(userData);
  //     // ← sending the response back to the component that is calling for this data
  //     res.status(200).json({ userData: userData });
  //   } catch (error) {
  //     res.status(500).json({ message: "Getting comments failed." });
  //   }
  // }
  //   MongoClientConnection.close();
  //   If you build an application where your MongoDB-related code will execute frequently (e.g. the API route will be hit frequently), you might want to take advantage of MongoDB's "connection pooling" though.
  // For this, simply remove all MongoClientConnection.close() calls from your code. The connection will then NOT be closed and will be re-used across requests.
}

export default handler;
