import { MongoClient } from "mongodb";

export async function connectToMongoDB() {
  const MongoClientConnection = await MongoClient.connect(
    "mongodb+srv://hirafa:academind123@maincluster.cbw0nhb.mongodb.net/main?retryWrites=true&w=majority"
  );
  return MongoClientConnection;
  // it is possible to create an extra collection by inserting a title here mongodb.net/(inserthere)?retryWrites
  //  "mongodb+srv://rflhajime:academind123@maincluster.mh4flrs.mongodb.net/newcollection?retryWrites=true&w=majority"
}

export async function registerNewsLetterUser(client, collection, email) {
  return await client.db().collection(collection).insertOne(email);
}
