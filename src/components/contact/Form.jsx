import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import { TextField, TextareaAutosize, Button } from "@mui/material";
export default function Form() {
const form=useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_k51xnja', 'template_rds21bm', form.current, 'coYbWxXPjYhrZplsD')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};




  const styles = theme => ({
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "yellow !important"
    }
  });
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
          type='email'
        />

        <TextField
          className="form__textfield"
          fullWidth
          name="phone"
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          
          size="small"
          
        />
     
        <TextareaAutosize
        name="message"
          className="form__textarea"
          aria-label="empty textarea"
          placeholder="Your Message"
          minRows={4}
      
          required
        />
        <Button variant="contained" type="submit" className="btn_form">Submit</Button>
      </form>




    </>
  );
}
