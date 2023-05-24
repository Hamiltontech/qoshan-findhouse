import { useEffect, useState } from "react";
import GlobalFilter from "./GlobalFilter";
import { useRouter } from "next/router";

const GlobalHeroFilter = ({ className = "" }) => {
const router = useRouter()
const page = router.asPath
const [pageRoute, setPageRoute] = useState(false)


useEffect(()=>{
if(page === "/detailed-search"){
    setPageRoute(true)
} else{
    setPageRoute(false)
}
}, [page])


    return (
        <div className={`home_adv_srch_opt ${className}`}>
            <ul className="nav nav-pills" id="pills-tab" role="tablist">             
              
            </ul>
            {/* End nav-pills */}

            <div className="tab-content home1_adsrchfrm" id="pills-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                >
                    <GlobalFilter pageRoute={pageRoute}/>
                </div>
                {/* <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                >
                    <GlobalFilter />
                </div> */}
            </div>
        </div>
    );
};

export default GlobalHeroFilter;
