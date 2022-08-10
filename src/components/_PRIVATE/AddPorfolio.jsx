import React, { useState, useRef } from "react";
import { TextField, Button } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPortfolio } from "../../actions/portfolio";

export default function AddPortfolio() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPortfolio(FormData));

    clear();
  };

  const styles = (theme) => ({
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "yellow !important",
    },
  });

  const [FormData, setFormData] = useState({
    title: "",
    description: "",
    githubLink: "",
    deployedLink: "",
  });

  // TOAST

  const clear = () => {
    setFormData({
      title: "",
      description: "",
      githubLink: "",
      deployedLink: "",
    });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ width: "50%", marginTop: "10%", marginLeft: "20%" }}
      >
        <div style={{ display: "flex" }}>
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
          name="name"
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
          name="githubLink"
          id="outlined-basic"
          label="Add URL of github repository here"
          variant="outlined"
          size="small"
          value={FormData.githubLink}
          onChange={(e) =>
            setFormData({ ...FormData, githubLink: e.target.value })
          }
        />
        <TextField
        
          className="form__textfield"
          // fullWidth
          name="deployedLink"
          id="outlined-basic"
          label="Add URL of Deployed website here"
          variant="outlined"
          size="small"
          value={FormData.deployedLink}
          onChange={(e) =>
            setFormData({ ...FormData, deployedLink: e.target.value })
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
