import { hash, compare } from "bcryptjs";

export const checkEmail = (value) => value.includes("@") && value.length > 3;
export const checkPassword = (value) =>
  value.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/);

export async function encryptPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function verifyPassword(password, hashedPassword) {
  const passwordIsValid = await compare(password, hashedPassword);
  return passwordIsValid;
}
