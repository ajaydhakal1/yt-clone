import axios from 'axios';
import { useEffect, useState } from 'react';

const VideoCard = () => {
    const [videos, setVideos] = useState<any[]>([]);

    useEffect(() => {
        axios
            .get('/api/v1/videos')
            .then((response) => {
                setVideos(response.data);
                console.log(response.data);
                
            })
            .catch((error) => {
                console.error('Error fetching videos:', error);
            });
    }, []);

    return (
        <div className="grid grid-cols-2 gap-6 py-4 md:grid-cols-3 lg:grid-cols-4">
            {videos.map((video) => (
                <a href={video.video.url} target="_blank">
                    <div className="flex flex-col gap-3">
                        <div className="relative overflow-hidden rounded-xl bg-gray-500 lg:h-50 lg:w-80">
                            <img src={video.video.thumbnail} alt={video.video.title} className="h-full w-full rounded-lg object-cover" />
                            <p className="absolute right-3 bottom-3 rounded bg-gray-600 p-2 text-[10px]">{video.video.duration}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-[3px] w-[3px] rounded-full bg-gray-500 p-3"></div>
                            <h1 className="text-black">{video.video.title}</h1>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="text-gray-400">{video.uploader}</h3>
                            <div className="flex gap-3">
                                <p className="text-gray-400">{video.video.views}</p>
                                <p className="text-gray-400">•</p>
                                <p className="text-gray-400">{video.duration}</p>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default VideoCard;
