import axios from 'axios';
import { ADD_LIKE, POST_ERROR } 
from '../../constants/posts.constants';
import { getPosts } from './getPosts';
import { getMostRecentPosts } from './getMostRecentPosts';
import { getMostCommentedPosts } from './getMostCommentedPosts';
import { getMostLikedPosts } from './getMostLikedPosts';





export const addLike = (post_id,isOldest,isMostRecent,_isMostCommented,isMostLiked) => async(dispatch) =>{
    try{
        const config= {
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        
        const body = JSON.stringify({searchInput});
        const res = await axios.put('http://localhost:5000/api/posts/likes/${post_id}',body,config);
        dispatch({type:ADD_LIKE,payload : res.data});
        if(isOldest){
            dispatch(getPosts());
        }else if(isMostRecent){
            dispatch(getLatestPosts());
        }else if (isMostLiked){
            dispatch(getMostLikedPosts());
        }

    }catch(error){
        dispatch({
            type:POST_ERROR,
            payload: error,
        });
    }
};






