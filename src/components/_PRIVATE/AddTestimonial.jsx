import React, { useState, useRef } from "react";
import { TextField, TextareaAutosize, Button } from "@mui/material";
import FileBase from "react-file-base64";
import 'react-toastify/dist/ReactToastify.css';
import {createTestimonial} from './../../actions/testimonial'
import { useDispatch, useSelector } from "react-redux";


export default function AddTestimonial() {
const dispatch=useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTestimonial(FormData));

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

      <form  onSubmit={handleSubmit} style={{width:'50%',marginTop:'10%',marginLeft:'20%'}}>
      <div className="myForm">
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
          value={FormData.clientname}
          onChange={(e) => setFormData({ ...FormData, clientname: e.target.value })}
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
          
          value={FormData.clientcomment}
          onChange={(e) => setFormData({ ...FormData, clientcomment: e.target.value })}
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
