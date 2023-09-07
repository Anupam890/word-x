import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div class="mb-3 container">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3 container">
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button type="button" class="btn btn-primary my-3">Submit </button>
      </div>
    </>
  );
}

export default Contact;
