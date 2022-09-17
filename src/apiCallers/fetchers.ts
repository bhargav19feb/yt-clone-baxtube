import axios from "axios";

const BASE_URL:string = 'https://youtube-v31.p.rapidapi.com/search';
// const APIKey
const options = {
  params: {
    relatedToVideoId: '-UJMq6mg9PM',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'b7066d23d5msh66b313641dc3275p13409djsn5d7d1c47c812',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const getRandomVideos = async () => {
    const {data} = await  axios.get(BASE_URL,options);
    return data;

}


const urlGetChannelDeets= "https://youtube-v31.p.rapidapi.com/channels";

export const getChannelDeets = async (id:string) =>{
  const Channeloptions = {
  params: {part: 'snippet,statistics', id: id},
  headers: {
    'X-RapidAPI-Key': 'b7066d23d5msh66b313641dc3275p13409djsn5d7d1c47c812',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
  const {data}= await axios.get(urlGetChannelDeets,Channeloptions);
  return data;
}
