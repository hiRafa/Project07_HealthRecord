import { connectToMongoDB } from "../../helpers/mongodb-helper";

// API back end fr each product ID, fetching COMMENTS AND ADDING NEW

async function handler(req, res) {
  let MongoClientConnection;
  try {
    MongoClientConnection = await connectToMongoDB();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }
  if (req.method === "POST") {
    const { ...dataFetched } = req.body;
    // console.log(dataFetched);
    // console.log(dataFetched.email);
    const emailForFilter = dataFetched.email;
    // console.log(emailForFilter);
    delete dataFetched._id;
    delete dataFetched.email;

    let result, key;
    if (dataFetched.allergies) key === "allergies"
    if (dataFetched.conditions) key === "conditions"
    if (dataFetched.neurodiversities) key === "neurodiversities"

    try {
      result = await MongoClientConnection.db()
        .collection("users")
        .updateOne(
          { email: emailForFilter },
          {
            $push: {
              ...dataFetched,
            },
          }
          // { upsert: true }
        );
      res.status(201).json({ message: "Data Saved" });
    } catch (error) {
      res.status(500).json({ message: "Saving Form Failed" });
    }
  }
}

export default handler;
