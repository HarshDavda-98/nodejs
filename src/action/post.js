import * as Api from "../Api/index";
// Action creaters
 export const GetPost = () => async (dispatch) => {
        try {
            const data = await Api.fetchPost();    
            dispatch({ type: "FETCH_ALL", payload: data });
        } catch (error) {
                console.log(error.message);   
        }
};
 
export const CreatPost = (post)=> async(dispatch)=>{
        try {
        const data = await Api.createPosts(post);
        dispatch({type:"CREATE",payload:data})
        } catch (error) {
                console.log(error.message);
                
        }
}