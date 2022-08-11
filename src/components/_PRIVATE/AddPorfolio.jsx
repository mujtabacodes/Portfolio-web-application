import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPortfolio } from "../../actions/portfolio";

export default function AddPortfolio() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPortfolio(FormData));

    clear();
  };

  // const styles = (theme) => ({
  //   notchedOutline: {
  //     borderWidth: "1px",
  //     borderColor: "yellow !important",
  //   },
  // });

  const [FormData, setFormData] = useState({
    title: "",
    description: "",
    github: "",
    demo: "",
  });

 

  const clear = () => {
    setFormData({
      title: "",
      description: "",
      github: "",
      demo: "",
    });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ width: "50%", marginTop: "10%", marginLeft: "20%" }}
      >
        <div className="myForm">
          <label style={{ color: "black", margin: "1rem" }}>
            Portfolio image:{" "}
          </label>
          <div style={{ margin: "1rem" }}>
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
          label="Title"
          name="title"
          variant="outlined"
          required
          value={FormData.title}
          onChange={(e) => setFormData({ ...FormData, title: e.target.value })}
          size="small"
        />
        <TextField
          className="form__textfield"
          // fullWidth
          name="description"
          id="outlined-basic"
          label="Description"
          variant="outlined"
          required
          size="small"
          value={FormData.description}
          onChange={(e) =>
            setFormData({ ...FormData, description: e.target.value })
          }
        />

        <TextField
         
          className="form__textfield"
          // fullWidth
          name="github"
          id="outlined-basic"
          label="Add URL of github repository here"
          variant="outlined"
          size="small"
          value={FormData.github}
          onChange={(e) =>
            setFormData({ ...FormData, github: e.target.value })
          }
        />
        <TextField
        
          className="form__textfield"
          // fullWidth
          name="demo"
          id="outlined-basic"
          label="Add URL of Deployed website here"
          variant="outlined"
          size="small"
          value={FormData.demo}
          onChange={(e) =>
            setFormData({ ...FormData, demo: e.target.value })
          }
        />

        <Button
          variant="contained"
          type="submit"
          // onClick={notify}
          className="btn_form"
        >
          ADD NEW PORTFOLIO ITEM
        </Button>
      </form>

      {/* TOAST  */}
    </>
  );
}
