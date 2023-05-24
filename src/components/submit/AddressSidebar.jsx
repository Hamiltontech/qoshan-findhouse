import Social from "../common/footer/Social";

const AddressSidebar = () => {
  return (
    <div className="contact_localtion">
      <h4>معلومات التواصل</h4>
      <p>
      لا تتردد في استخدام أي وسيلة اتصال مفضلة للتواصل مع فريق قوشان
      </p>
      <div className="content_list">
        <h5>العنوان</h5>
        <p>
        الدوار السابع ، مجمع الشروقي
        </p>
      </div>
      <div className="content_list">
        <h5>هاتف</h5>
        <p>0796868500</p>
      </div>
      <div className="content_list">
        <h5>بريد الكتروني</h5>
        <p>info@qoshan.com</p>
      </div>
      <h5>تابعنا</h5>
      <ul className="contact_form_social_area">
        <Social />
      </ul>
    </div>
  );
};

export default AddressSidebar;
