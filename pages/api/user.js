import { getSession } from "next-auth/react";
import { connectToMongoDB } from "../../helpers/mongodb-helper";

export default async function handler(req, res) {
  let MongoClientConnection;
  try {
    MongoClientConnection = await connectToMongoDB();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  const session = await getSession({ req });
  if (req.method === "GET" && session) {
    const userEmail = req.query.fetchUserData;

    // console.log(req.method);
    console.log(userEmail);
    // → trying to get the data com the database, sending the request from the component to the database
    try {
      // ← using the helper function geAllDocuments to filter the information
      const userData = await MongoClientConnection.db()
        .collection("users")
        .findOne({ email: session.user.email });
      //   console.log(userData);
      delete userData.password;
      //   console.log(userData);
      // ← sending the response back to the component that is calling for this data
      res.status(200).json({ ...userData });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed." });
    }
  }
}
