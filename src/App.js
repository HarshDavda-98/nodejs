import React,{useEffect} from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { GetPost } from "../src/action/post";
import Navbar from "../src/components/Navbar";
import Posts from '../src/components/Posts/posts/post'
import Form from "./components/Form/Form";
 function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(GetPost())
  },[]);
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-2">
        <div className="bg-info rounded-3">
          <div className="d-flex ">
            <div className="container-fluid text-end  Heigth">Memories</div>
            <img
              className="container-fluid Heigth rounded-3 p-1"
              src="https://media.istockphoto.com/photos/renewable-energy-and-sustainable-development-picture-id1186330948?k=20&m=1186330948&s=612x612&w=0&h=5aNPCcQ8FcZraX44PEhb2mqcHkow2xMITJMHdh28xNg="
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="container  "><Posts/></div>
          <div className="container mx-1 "><Form/></div>
        </div>
      </div>
    </div>
  );  
}

export default App;
