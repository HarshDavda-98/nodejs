import axios from 'axios'   
const url = "http://localhost:5020/posts/dl"
 export const fetchPost = async()=>await axios.get(url);
 export const createPosts = (newPost)=>{
    if(newPost){
        axios.post(url,newPost); 
        console.log("check ",newPost)
    }
    else{
        console.log("Pleas check ")
    }
 }
    