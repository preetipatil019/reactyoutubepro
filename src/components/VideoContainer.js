import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEOS_API } from './utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {

   const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API)
    const json = await data.json();
    console.log(json);
    setVideos(json.items)
  }

  return (
    <div className='flex flex-wrap'>
      {videos.map(videos => (
        <Link key={videos.id} to={"/watch?v=" + videos.id} >
          <VideoCard key={videos.id} info={videos} />
      </Link>
      )
      )}
      
    </div>
  );
}

export default VideoContainer;
