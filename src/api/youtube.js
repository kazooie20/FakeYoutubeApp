import axios from "axios";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',

    params : {
      part: 'snippet',
      type: 'video',
      maxResults: 10,
      key : 'AIzaSyDO47Qs5q2PZqGeTLRNFXbBlV5kOBCO5R4'
    }
});