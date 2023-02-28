import React, { useState } from "react";
import { send } from "emailjs-com";

export default function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send(
      "service_19b3gnh", //Service Id
      "template_21e5q9c", //Template Id
      toSend,
      "UFfEqv_PldhzGWhdI" //API Public Key
    )
      .then((response) => {
        alert("Message Sent !");
        setToSend({
          from_name: "",
          reply_to: "",
          message: "",
        });
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  return (
    <div id="contact" className="bg-[#181B3F] h-[95vh]">
      <h1 className="text-white font-bold text-center pt-32 mb-8 text-3xl">
        CONTACT US
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-y-6 form-mobile"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          value={toSend.from_name}
          onChange={handleChange}
          required
          className="bg-transparent text-white border border-white rounded-md px-4 py-2 w-1/4 "
        />
        <input
          type="email"
          name="reply_to"
          placeholder="info@mail.com"
          value={toSend.reply_to}
          onChange={handleChange}
          required
          className="bg-transparent text-white border border-white rounded-md px-4 py-2 w-1/4"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={toSend.message}
          onChange={handleChange}
          required
          className="bg-transparent text-white border border-white rounded-md px-4 py-2 w-1/4 h-36"
        />
        <button
          type="submit"
          className="bg-[#1E1E1E] border border-white hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-1/4"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
