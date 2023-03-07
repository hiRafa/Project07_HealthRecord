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
    console.log(dataFetched);
    console.log(dataFetched.email);
    const emailForFilter = dataFetched.email;
    console.log(emailForFilter);
    delete dataFetched._id;
    delete dataFetched.email;

    let result;
    if (dataFetched.name) {
      try {
        result = await MongoClientConnection.db()
          .collection("users")
          .updateOne(
            { email: emailForFilter },
            {
              $set: {
                ...dataFetched,
              },
            }
            // { upsert: true }
          );
        res.status(201).json({ message: "Data Saved" });
      } catch (error) {
        res.status(500).json({ message: "Saving Form Failed" });
      }
    } else {
      try {
        result = await MongoClientConnection.db()
          .collection("users")
          .updateOne(
            { email: emailForFilter },
            {
              $push: {
                // selectedSchedule needs to be "inside".
                // when VS code saves it removes.
                selectedSchedule: { ...dataFetched },
              },
            }
          );
        res.status(201).json({ message: "Data Saved" });
      } catch (error) {
        res.status(500).json({ message: "Saving Form Failed" });
      }
    }
  }

  //   MongoClientConnection.close();
  //   If you build an application where your MongoDB-related code will execute frequently (e.g. the API route will be hit frequently), you might want to take advantage of MongoDB's "connection pooling" though.
  // For this, simply remove all MongoClientConnection.close() calls from your code. The connection will then NOT be closed and will be re-used across requests.
}

export default handler;
