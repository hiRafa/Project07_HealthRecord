import {
  connectToMongoDB,
  getUserData,
  updateUserData,
} from "../../helpers/mongodb-helper";

// API back end fr each product ID, fetching COMMENTS AND ADDING NEW

async function handler(req, res) {
  let MongoClientConnection;

  try {
    MongoClientConnection = await connectToMongoDB();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  // problem using the current email as filter

  // → trying to get the data com the database, sending the request from the component to the database
  try {
    const database = MongoClientConnection.db();
    const userData = database.collection("users").find();
    userData.forEach(console.dir);
    // ← using the helper function geAllDocuments to filter the information
    res.status(200).json({ userData: userData });
  } catch (error) {
    res.status(500).json({ message: "Getting comments failed." });
  }

  //   MongoClientConnection.close();
  //   If you build an application where your MongoDB-related code will execute frequently (e.g. the API route will be hit frequently), you might want to take advantage of MongoDB's "connection pooling" though.

  // For this, simply remove all MongoClientConnection.close() calls from your code. The connection will then NOT be closed and will be re-used across requests.
}

export default handler;
