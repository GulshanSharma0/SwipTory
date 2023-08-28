import {SERVER_URL as url} from '../../constant/url';

const headers = {
    'Content-Type': 'application/json',
    credentials: 'include'
}

export const getAllStories = async (all)=>{
    
    try{
        const res = await fetch(url+`/stories/getStories?category=${all}`,{
            method:'GET',
            headers:headers
        });
        const data = await res.json();
        return data;
    }
    catch(error){
        throw error;
    }
} 