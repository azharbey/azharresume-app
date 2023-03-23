import React from "react";
import { Heading } from "./Heading";

export const ContactUs = () => {
  return (
    <section className="container ms-auto py-10 px-4" id="ContactUs">
      <Heading title="Contact Me" />
      <form className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <input
            type="text"
            placeholder="Name"
            className="inputStyle"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="inputStyle"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="inputStyle"
          required
        />
        <textarea
          rows="6"
          placeholder="Message"
          className="inputStyle"
          required
        ></textarea>
        <div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
