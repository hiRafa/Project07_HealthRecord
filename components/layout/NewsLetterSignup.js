import { useRef } from "react";
import useNotification from "../../contexts/notifications-context";
import ButtonAll from "../layout-units/ButtonAll";

import classes from "./Layout.module.css";

function NewsletterSignup() {
  const { pendingNotification, successfullNotification, errorNotification } =
    useNotification();

  const emailInputRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    pendingNotification("Signing up...", "Registering for newsletter");

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(
        (response) =>
          (response.ok && response.json()) ||
          response.json().then((data) => {
            throw new Error(data.message || "Something went wrong");
          })
      )
      .then(
        (data) => successfullNotification(data.message)
        // console.log(data);
      )
      .catch((error) => errorNotification(error.message));
  }

  return (
    <section className={`flex_column ${classes.newsletter}`}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={`flex_column ${classes.newsletter_control}`}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <ButtonAll text={"Register"} />
        </div>
      </form>
    </section>
  );
}

export default NewsletterSignup;
