import {
  checkEmail,
  checkPassword,
  encryptPassword,
} from "../../helpers/auth-helper";
import { connectToMongoDB } from "../../helpers/mongodb-helper";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const { enteredEmail, enteredPassword } = req.body;

  //checking data on the back
  const isEmailValidEnd = checkEmail(enteredEmail); // true or false
  const isPasswordValidEnd = checkPassword(enteredPassword); // true or false
  if (!isEmailValidEnd) {
    res.status(422).json({
      message: "Invalid input - email format is not valid.",
    });
    console.log(res.status);
    return;
  }
  if (!isPasswordValidEnd) {
    res.status(422).json({
      message:
        "Invalid input - password should also be at least 7 characters long.",
    });
    return;
  }
  // if not valid, return

  // if valid, proceed ↓
  const client = await connectToMongoDB();
  const db = client.db();
  const existingUser = await db
    .collection("users")
    .findOne({ email: enteredEmail });

  if (existingUser) {
    res
      .status(422)
      .json({ message: "User exists already! Try log in instead!" });
    client.close();
    return;
  }

  const hashedPassword = await encryptPassword(enteredPassword);

  const result = await db.collection("users").insertOne({
    email: enteredEmail,
    password: hashedPassword,
  });

  res.status(201).json({ message: "User Created!" });
  // client.close();
}

export default handler;
