import React from "react";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="divider">
        <div className="divider__primary"></div>
        <div className="divider__circle divider__circle--left"></div>
      </div>
      <h2>Contact</h2>
      <div>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button
              className="btn btn-primary"
              type="submit"
              title="Send message"
            >
              Send
            </button>
          </p>
        </form>
      </div>
    </section>
  );
}
