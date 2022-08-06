import React from "react";
import { TextField, TextareaAutosize, Button } from "@mui/material";
export default function Form() {

  const styles = theme => ({
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "yellow !important"
    }
  });
  return (
    <>
      <form>
        <TextField
          className="form__textfield"
          fullWidth
          id="outlined-basic"
          label="Name"
          variant="outlined"
          required
          size="small"
      
        />
        <TextField
          className="form__textfield"
          fullWidth
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
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          
          size="small"
          
        />
     
        <TextareaAutosize
          className="form__textarea"
          aria-label="empty textarea"
          placeholder="Your Message"
          minRows={4}
          fullWidth
          required
        />
        <Button variant="contained" className="btn_form">Submit</Button>
      </form>
    </>
  );
}
