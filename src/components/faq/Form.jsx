import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [files, setFiles] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      
      const response = await axios({
        method: 'post',
        url: 'https://strapi-125841-0.cloudclusters.net/api/upload/files',
        data: formData
      });

      const imageId = response.data[0].id;

      const submissionData = {
        Name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        larea: formData.get('larea'),
        Area: formData.get('area'),
        type: formData.get('type'),
        price: formData.get('price'),
        city: formData.get('city'),
        Address: formData.get('address'),
        image: imageId,
      };

      const submissionResponse = await axios.post(
        'https://strapi-125841-0.cloudclusters.net/api/submissions',
        { data: submissionData }
      );

      if (submissionResponse.status === 200) {
        setIsSubmitted(true);
        console.log('Submission successful!');
        // Reset the form or show a success message
      } else {
        console.error('Submission error:', submissionResponse.statusText);
        // Show an error message to the user
      }
    } catch (error) {
      console.error('Fetch error:', error);
      // Show an error message to the user
    }
  };

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  return (
    <div>
      <form className="contact_form" onSubmit={handleSubmit}>
        {/* Name field */}
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <input
                id="name"
                name="name"
                className="form-control"
                required="required"
                type="text"
                placeholder="اسمك الكامل"
              />
            </div>
          </div>
        </div>

        {/* Contact information */}
        <span style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
          معلومات التواصل
        </span>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                id="email"
                name="email"
                className="form-control required email"
                required="required"
                type="email"
                placeholder="البريد الالكتروني"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                id="phone"
                name="phone"
                className="form-control required phone"
                required="required"
                type="phone"
                placeholder="هاتف"
              />
            </div>
          </div>
        </div>

        {/* Area information */}
        <span style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
          معلومات المساحة
        </span>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                id="area"
                name="area"
                className="form-control required"
                required="required"
                type="text"
                placeholder="مساحة العقار"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                id="larea"
                name="larea"
                className="form-control required"
                required="required"
                type="text"
                placeholder="المساحة بالأمتار"
              />
            </div>
          </div>
        </div>

        {/* Property details */}
        <span style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
          تفاصيل العقار
        </span>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                id="type"
                name="type"
                className="form-control required"
                required="required"
                type="text"
                placeholder="نوع العقار"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                id="price"
                name="price"
                className="form-control required"
                required="required"
                type="text"
                placeholder="سعر العقار"
              />
            </div>
          </div>
        </div>

        {/* Additional information */}
        <span style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
          معلومات إضافية
        </span>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                id="city"
                name="city"
                className="form-control required"
                required="required"
                type="text"
                placeholder="المدينة"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                id="address"
                name="address"
                className="form-control required"
                required="required"
                type="text"
                placeholder="العنوان"
              />
            </div>
          </div>
        </div>

        {/* File upload field */}
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="image"
              name="image"
              className="form-control"
              required="required"
              type="file"
              onChange={handleFileChange}
            />
          </div>
        </div>

        {/* Submit button */}
        <div className="form-group mb0">
          <button type="submit" className="btn btn-lg btn-thm">
            ارسال
          </button>
        </div>
      </form>

      {isSubmitted && (
        <div className="success-message">
          <p>تم ارسال الرسالة بنجاح</p>
        </div>
      )}

      {/* Additional styles */}
      <style jsx>{`
        .success-message {
          background-color: #42c966;
          color: #fff;
          padding: 16px;
          border-radius: 4px;
          text-align: center;
          animation: fade-in 0.5s ease;
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Form;
