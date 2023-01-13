import { MongoClient } from "mongodb";
import { useSession } from "next-auth/react";

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
// export async function fetchUserData(userEmail, setData) {
//   const response = await fetch(`/api/userData/${userEmail}`);
//   if (!response.ok) {
//     throw new Error("Something is not right");
//   }
//   const responseOk = await response.json();

//   // then extracting the data, the data was stored as { userData: userData}
//   // set the data to a local component state#
//   // console.log(data.userData);
//   setData({ ...responseOk.userData });
// }

// export async function getUserData(client, collection, filter = {}, sort) {
//   return await client
//     .db()
//     .collection(collection)
//     .find(filter)
//     .sort(sort)
//     .toArray();
// }

// export async function updateUserData(
//   client,
//   collection,
//   filter = {},
//   formsData
// ) {
//   return await client
//     .db()
//     .collection(collection)
//     .find(filter)
//     .update(formsData);
// }
