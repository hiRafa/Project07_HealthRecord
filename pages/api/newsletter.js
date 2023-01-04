import {
  connectToMongoDB,
  registerNewsLetterUser,
} from "../../helpers/mongodb-helper";

async function handler(req, res) {
  if (req.method === "POST") {
    const enteredEmail = req.body.email;

    // if input email is wrong, then reject.
    if (!enteredEmail || !enteredEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    // if it is ok then connect to server
    let MongoClientConnection;
    try {
      MongoClientConnection = await connectToMongoDB();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }

    // check if email exists in server
    const db = MongoClientConnection.db();
    const existingUser = await db
      .collection("newsletter")
      .findOne({ email: enteredEmail });

    if (existingUser) {
      res.status(422).json({
        message: `${enteredEmail} is already registered in our system`,
      });
      client.close();
      return;
    }

    // registerNewsLetterUser from MongoDB file in api foldder is being called
    // parameters MongoClientConnection, collection, document
    try {
      await registerNewsLetterUser(MongoClientConnection, "newsletter", {
        email: enteredEmail,
      });
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      MongoClientConnection.close();
      return;
    }

    res
      .status(201)
      .json({ message: "Successfully registered for newsletter!" });
  }
}

export default handler;
