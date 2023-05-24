import { useEffect, useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';

const Season2 = () => {
  const [playlistData, setPlaylistData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLAbmxNJce8JSFDshpb72kf7Idxu7_ZdP4&key=AIzaSyDRU6kE78hnlAc6m8ROFMouwRberRQF-kk&maxResults=18`
        );
        setPlaylistData(response.data.items);
      } catch (error) {
        console.error('Error fetching playlist data:', error);
      }
    };

    fetchData();
  }, []);

  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  const handleClosePopup = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="playlist-container">
      <h1>الموسم الثالث</h1>
      <div className="video-grid">
        {playlistData.map((item) => (
          <div key={item.id} className="video-item" onClick={() => handleVideoClick(item.snippet.resourceId.videoId)}>
            <div className="thumbnail">
              <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
            </div>
            <div className="video-info">
              <h3>{item.snippet.title}</h3>
              <p>{item.snippet.description.slice(0, 100)}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="popup">
          <div className="popup-inner">
            <YouTube videoId={selectedVideo} opts={{ width: '600', height: '400', playerVars: { autoplay: 1 } }} style={{width: '100%', height: '100%'}}/>
            <button className="close-button" onClick={handleClosePopup}>
              اغلاق
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .playlist-container {
          padding: 20px;
          direction: rtl;
        }

        .video-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 20px;
        }

        .video-item {
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 20px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .video-item:hover {
          transform: translateY(-5px);
        }

        .thumbnail img {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 4px;
        }

        .video-info {
          margin-top: 10px;
        }

        .popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          background: #222;
        }

        .popup-inner {
          position: relative;
          width: 80%;
          max-width: 800px;
          max-height: 80%;
          background-color: #222;
          padding: 0px;
          overflow: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
        }

        @media (max-width: 768px) {
          .video-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default Season2;
