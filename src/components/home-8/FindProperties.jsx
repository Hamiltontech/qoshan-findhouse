import Link from "next/link";
import findProperties from "../../data/findProperties";
import axios from "axios";
import locationFilter from '/public/locationsFilter'


const FindProperties = () => {
  // ${item.column}
  return (
    <>
      {locationFilter.filter(item => item.x_studio_active == true).sort((a, b) => a.x_studio_sequence_1 > b.x_studio_sequence_1 ? 1 : -1).slice(0, 9).map((item) => (
        <div className={item.x_studio_image_card_size == "Small" ? `col-lg-4 col-xl-4` : ` col-lg-8 col-xl-8`}  key={item.id}>
          <Link href={{
        pathname: "all-properties",
        query: {
            type: "all",
            location: item.x_name,
        }
    }}


    >
            <a className="properti_city d-block">
              <div className="thumb">
                <img className={item.x_studio_image_card_size == "Small" ? `img-fluid w100 bigImage`: `img-fluid w100`} src={item.x_studio_image_url} alt="pc1.jpg" />
              </div>
              <div className="overlay">
                <div className="details">
                  <h4>{item.x_name}</h4>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FindProperties;
