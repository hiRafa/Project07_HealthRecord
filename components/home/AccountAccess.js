import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import classes from "./Home.module.css";

import { checkEmail, checkPassword } from "../../helpers/auth-helper";
import useNotification from "../../contexts/notifications-context";
import Input from "../layout-units/Input";

// local helper function for signup
async function signUp(enteredEmail, enteredPassword) {
  // fetch to back end api
  const response = await fetch("api/signup", {
    method: "POST",
    body: JSON.stringify({ enteredEmail, enteredPassword }),
    headers: { "Content-Type": "application/json" },
  });
  // await for check
  const data = await response.json();
  // console.log(data);

  // error to return in the await try - catch
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
}

const AccountAccess = () => {
  const [isLogin, setisLogin] = useState(true);
  const { successfullNotification, errorNotification } = useNotification();
  // console.log(errorNotification);
  const router = useRouter();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const password2InputRef = useRef();

  function switchLoginSignup() {
    setisLogin((prevState) => !prevState);
  }

  async function submitHandler(e) {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // check on the front the email and password validation
    const isEmailValidFront = checkEmail(enteredEmail); // true or false
    const isPasswordValidFront = checkPassword(enteredPassword); // true or false
    if (!isEmailValidFront) {
      errorNotification("Invalid Email!");
      return;
    }
    if (!isPasswordValidFront) {
      errorNotification("Weak Password!");
      return;
    }
    // if trying to log in
    if (isLogin) {
      const response = await signIn("credentials", {
        redirect: false,
        enteredEmail: enteredEmail,
        enteredPassword: enteredPassword,
      });
      console.log(response);
      if (response.ok) {
        router.replace("/account");
        successfullNotification("Log in sucessful!");
      } else {
        errorNotification(response.error);
      }
    } else {
      const enteredPassword2 = password2InputRef.current.value;
      if (enteredPassword !== enteredPassword2) {
        errorNotification("Passwords not matching");
        return;
      }
      // if trying to sign up
      try {
        const result = await signUp(enteredEmail, enteredPassword);
        // console.log(result);
        successfullNotification(result.message);
      } catch (error) {
        // console.log(error.message);
        // error coming from signUp function ↑ from throw new Error
        errorNotification(error.message);
      }
    }
  }

  return (
    <section className={classes.section_form}>
      <form
        onSubmit={submitHandler}
        className={`flex_column ${classes.form_account}`}
      >
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <div className={classes.form_account_in}>
          <Input
            label="Your Email"
            htmlFor="email"
            type="email"
            id="email"
            reference={emailInputRef}
          />
        </div>
        <div className={classes.form_account_in}>
          <Input
            label="Your Password"
            htmlFor="password"
            type="password"
            id="password"
            reference={passwordInputRef}
          />
        </div>
        {isLogin ? (
          ""
        ) : (
          <div>
            <Input
              label="Confirm Password"
              htmlFor="password2"
              type="password2"
              id="password2"
              reference={password2InputRef}
            />
          </div>
        )}

        <div className={`flex_column ${classes.account_buttons}`}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <p
            onClick={switchLoginSignup}
            className={`${classes.account_buttons_switch}`}
          >
            {isLogin
              ? "Or Create new account"
              : "Or Login with existing account"}
          </p>
        </div>
      </form>
    </section>
  );
};

export default AccountAccess;
