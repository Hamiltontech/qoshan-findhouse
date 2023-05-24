import Link from "next/link";
import findProperties from "../../data/findProperties";
import { all } from "axios";

const FindProperties = () => {
  return (
    <>
      {findProperties.slice(0, 9).map((item) => (
        <div className={`col-lg-4 ${item.column}`} key={item.id}>
          <Link href={{
        pathname: "all-properties",
        query: {
            type: "all",
            location: item.name,
        }
    }}
    >
            <a className="properti_city d-block">
              <div className="thumb">
                <img className="img-fluid w100" src={item.img} alt="pc1.jpg" />
              </div>
              <div className="overlay">
                <div className="details">
                  <h4>{item.name}</h4>
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
