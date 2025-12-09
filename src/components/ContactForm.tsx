"use client";
import React, { useState } from "react";

const styles: { [key: string]: React.CSSProperties } = {
    form: {
      maxWidth: "400px",
      margin: "2rem auto",
      padding: "1.5rem",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    },
    fieldGroup: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "1rem",
      color: "black",
      textAlign: "left",
    },
    input: {
      padding: "0.5rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
      color: "black",
    },
    textarea: {
      padding: "0.5rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "0.75rem",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.fieldGroup}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.fieldGroup}>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.fieldGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.fieldGroup}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
        />
      </div>

      <button type="submit" style={styles.button}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
