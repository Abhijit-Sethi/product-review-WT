import axios from 'axios';
import { REMOVE_POST, POST_ERROR } from "../../../constants/post.constants";



export const removeLikeFromPost = (post_id,like_id) => async(dispatch) =>{
    try{
        
        
        
        const res = await axios.delete('http://localhost:5000/api/posts/remove_like_from_post/${post_id}/${like_id}');
        dispatch({type:REMOVE_POST,payload : res.data});
        
    }catch(error){
        dispatch({
            type:POST_ERROR,
            payload: error,
        });
    }
};