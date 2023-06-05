import { useEffect, useState } from 'react';
import axios from 'axios';

const Season1 = () => {
  const [reelsData, setReelsData] = useState([]);
  const [selectedReel, setSelectedReel] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.instagram.com/v1/users/self/media/recent/?access_token=YOUR_ACCESS_TOKEN'
        );
        setReelsData(response.data.data);
      } catch (error) {
        console.error('Error fetching reels data:', error);
      }
    };

    fetchData();
  }, []);

  const handleReelClick = (reelId) => {
    setSelectedReel(reelId);
  };

  const handleClosePopup = () => {
    setSelectedReel(null);
  };

  return (
    <div className="reels-container" dir='rtl'>
      <h1>الموسم الآول</h1>
      <div className="reel-grid">
        {reelsData.map((reel) => (
          <div key={reel.id} className="reel-item" onClick={() => handleReelClick(reel.id)}>
            <div className="thumbnail">
              <img src={reel.images.standard_resolution.url} alt={reel.caption.text} />
            </div>
            <div className="reel-info">
              <h3>{reel.caption.text}</h3>
              <p>{reel.likes.count} Likes</p>
            </div>
          </div>
        ))}
      </div>

      {selectedReel && (
        <div className="popup">
          <div className="popup-inner">
            <video className="reel-video" controls autoPlay>
              <source src={selectedReel.videos.standard_resolution.url} type="video/mp4" />
            </video>
            <button className="close-button" onClick={handleClosePopup}>
              اغلاق
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .reels-container {
          padding: 20px;
          direction: rtl;
        }

        .reel-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 20px;
        }

        .reel-item {
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 20px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .reel-item:hover {
          transform: translateY(-5px);
        }

        .thumbnail img {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 4px;
        }

        .reel-info {
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
          .reel-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default Season1;
