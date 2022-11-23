import React, { useRef } from "react";

const ProfileRecordsForm = () => {
  const fullNameInputRef = useRef();
  const addressInputRef = useRef();
  const dobInputRef = useRef();
  const sexInputRef = useRef();
  const weightInputRef = useRef();
  const heightInputRef = useRef();

  const submitHandler = () => {};
  return (
    <section>
      <h2></h2>
      <form onSubmit={submitHandler}>
        <div>
          <h3>Currently intaking any medication?</h3>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="fullname"
            id="fullname"
            required
            ref={fullNameInputRef}
          />
        </div>
        <h3>Have you ever had any of the following health problems?</h3>
        <div>
          <label htmlFor="address">Current Address</label>
          <input type="address" id="address" required ref={addressInputRef} />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input type="dob" id="dob" required ref={dobInputRef} />
        </div>
      </form>
    </section>
  );
};

export default ProfileRecordsForm;
