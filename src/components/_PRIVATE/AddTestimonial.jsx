import React, { useState, useRef } from "react";
import { TextField, TextareaAutosize, Button } from "@mui/material";
import FileBase from "react-file-base64";
import 'react-toastify/dist/ReactToastify.css';



export default function AddTestimonial() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    
      clear();
     
  };

  const styles = (theme) => ({
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "yellow !important",
    },
  });

  const [FormData, setFormData] = useState({
    avator: "",
    clientname: "",
    clientcomment: "",
  });


// TOAST 



  const clear = () => {
    setFormData({
      avator: "",
      clientname: "",
      clientcomment: "",
    
    });
  };
  return (
    <>

      <form ref={form} onSubmit={sendEmail} style={{width:'50%',marginTop:'10%',marginLeft:'20%'}}>
      <div style={{display:'flex'}}>
      <label style={{color:'black',margin:'1rem'}}>Avator image: </label>
      <div style={{margin:'1rem'}}>
            <FileBase
              type="file"
              mutiple={false}
              onDone={({ base64 }) =>
                setFormData({ ...FormData, selectedFile: base64 })
              }
            ></FileBase>
          </div>
          </div>
        <TextField
          className="form__textfield"
          // fullWidth
          id="outlined-basic"
          label="Client Name"
          name="clientname"
          variant="outlined"
          required
          value={FormData.title}
          onChange={(e) => setFormData({ ...FormData, title: e.target.value })}
          size="small"
        />
        <TextField
          className="form__textfield"
          // fullWidth
          name="clientcomment"
          id="clientcomment"
          label="Client Comment"
          variant="outlined"
          required
          size="small"
          
          value={FormData.description}
          onChange={(e) => setFormData({ ...FormData, description: e.target.value })}
        />

     
        <Button
          variant="contained"
          type="submit"
          // onClick={notify}
          className="btn_form"
        >
         ADD NEW Testimonial ITEM
        </Button>
      </form>
      


      {/* TOAST  */}
  
    </>
  );
}
