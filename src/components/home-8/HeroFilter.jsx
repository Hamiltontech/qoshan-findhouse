import GlobalHeroFilter from "../common/GlobalHeroFilter";

const HeroFilter = () => {
    return (
        <div className="property-search-inner">
            <div className="property-search-inner-text">
                <h2 className="fz55" style={{fontSize: 30,}}>ابحث عن عقارك</h2>               
            </div>
            {/* End .home-text */}

            <GlobalHeroFilter />
        </div>
    );
};

export default HeroFilter;
