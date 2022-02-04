import React, { useState } from "react";
import FileBase from "react-file-base64";
import {useDispatch} from 'react-redux'
import { CreatPost } from "../../action/post";
export default function Form() {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    tags: "",
    message: "",
    selectedFile: "",
  });
  const clear =(e)=>{
    console.log("Clear is from Form.js");
    setPostData("")
  }
  const handleSubmit = (e) => {
    console.log();
    e.preventDefault();
    dispatch(CreatPost(postData));
    console.log(postData)
    // setPostData("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container border mt-3 p-3 rounded-end ">
        <div className="container-fluid mt-2  border p-2 rounded-end ">
          <input
            className="form-control m-1"
            type="text"
            placeholder="Creator"
            value={postData.creator || ""}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
            name="creator"
            aria-label="default input example"
          ></input>
          <input
            className="form-control m-1"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            type="text"
            name="title"
            placeholder="Title"
            aria-label="default input example"
          ></input>
          <input
            className="form-control m-1"
            type="text"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
            name="message"
            placeholder="Message"
            aria-label="default input example"
          ></input>
          <input
            className="form-control m-1"
            type="text"
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
            name="tags"
            placeholder="Tags"
            aria-label="default input example"
          ></input>
          <div className="container my-2  border text-start">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
        </div>
        {/* file input */}
        <div className="">
          <button
            type="submit"
            className="btn  btn-outline-primary mx-2 rounded-circle "
          >
            Submit
          </button>
          <button
            type="button"
            onClick={clear}
            className="btn btn-outline-danger my-2  rounded-circle"
          >
            Clear.
          </button>
        </div>
      </div>
    </form>
  );
}
