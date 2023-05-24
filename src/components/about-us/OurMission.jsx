import PopupVideo from "../common/PopupVideo";

const OurMission = () => {
  const missionContent = [
    {
      id: 1,
      icon: "flaticon-user",
      number: "80,123",
      meta: "Customers to date",
    },
    {
      id: 2,
      icon: "flaticon-home",
      number: "$74 Billion",
      meta: "In home sales",
    },
    {
      id: 3,
      icon: "flaticon-transfer",
      number: "$468 Million",
      meta: "In Savings",
    },
  ];

  return (
    <>
      <div className="col-lg-12 text-center">
        <div className="about_content">
          <p className="large">
          تم تصميمها بعناية فائقة ليُسهل على الاشخاص ايجاد العقار المناسب الذي يحلمون به، ولتكون حلقة وصل بينهم وبين أصحاب العقارات خلال عملية المعاينة والبيع، وذلك من خلال فريق عمل متكامل ومتخصص في البيع والشراء. ويوفر (قوشان) فرصة بيع وشراء  مختلف أنواع العقارات للأفراد والمستثمرين على حد سواء من داخل الاردن وخارجه، من عقارات سكنية وتجارية وصناعية وزراعية على اختلاف أشكالها وأسعارها.


          </p>

            
          {/* End .ab_counting */}
        </div>
      </div>
      {/* End .col */}

      
    </>
  );
};

export default OurMission;
