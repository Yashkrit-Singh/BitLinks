"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for contacting us!");
    console.log("Contact Form Submitted:", form);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 mt-12 bg-purple-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-purple-800">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          value={form.name}
          required
          className="w-full p-3 border border-purple-200 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          value={form.email}
          required
          className="w-full p-3 border border-purple-200 rounded-md"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          onChange={handleChange}
          value={form.message}
          required
          className="w-full p-3 border border-purple-200 rounded-md"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
