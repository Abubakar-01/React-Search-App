import axios from "axios";

const searchImage= async (term)=>{
  const response =  await axios.get("https://api.unsplash.com/search/photos",{
    headers:{
        Authorization: "Client-ID V57cvJ39ZjC45mmP2rYTC6TNqv3rvSD7CCMJa31RHR4"
    },
    params:{
        query: term
    }
    });
  
    return response.data.results;
}

export default searchImage;