import React from "react";
import Post from '../Posts'
import { useSelector } from "react-redux";
 const Posts=()=> {
  const post = useSelector((state)=>state.Posts)
  console.log(post);
  return (
    <div>
      <h1>Posts</h1>
      <Post/>
      <Post/>
    </div>
  );
}
export default Posts
