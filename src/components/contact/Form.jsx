import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { TextField, TextareaAutosize, Button } from "@mui/material";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from "./Toast";



export default function Form() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k51xnja",
        "template_rds21bm",
        form.current,
        "coYbWxXPjYhrZplsD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      clear();
      notify();
  };

  const styles = (theme) => ({
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "yellow !important",
    },
  });

  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });


// TOAST 


const notify = () => toast(<Toast/>);

  const clear = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <>

      <form ref={form} onSubmit={sendEmail}>
        <TextField
          className="form__textfield"
          fullWidth
          id="outlined-basic"
          label="Name"
          name="name"
          variant="outlined"
          required
          value={FormData.name}
          onChange={(e) => setFormData({ ...FormData, name: e.target.value })}
          size="small"
        />
        <TextField
          className="form__textfield"
          fullWidth
          name="email"
          id="outlined-basic"
          label="E-Mail"
          variant="outlined"
          required
          size="small"
          type="email"
          value={FormData.email}
          onChange={(e) => setFormData({ ...FormData, email: e.target.value })}
        />

        <TextField
          value={FormData.phone}
          onChange={(e) => setFormData({ ...FormData, phone: e.target.value })}
          className="form__textfield"
          fullWidth
          name="phone"
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          size="small"
        />

        <TextareaAutosize
          value={FormData.message}
          onChange={(e) =>
            setFormData({ ...FormData, message: e.target.value })
          }
          name="message"
          className="form__textarea"
          aria-label="empty textarea"
          placeholder="Your Message"
          minRows={4}
          required
        />
        <Button
          variant="contained"
          type="submit"
          // onClick={notify}
          className="btn_form"
        >
          Submit
        </Button>
      </form>
      


      {/* TOAST  */}
      <ToastContainer />
    </>
  );
}
