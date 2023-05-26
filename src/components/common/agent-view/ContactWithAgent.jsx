import axios from 'axios';
import React, { useState } from 'react';

const ContactWithAgent = ({ propertyLink, propertyName }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await axios.post(
        'https://strapi-125841-0.cloudclusters.net/api/interests',
        {
        data: {
          Name: formData.get('Contact'), 
          propName: formData.get('propertyName'),
          URL: formData.get('URL'),
          Phone: formData.get('Phone'), 
          Email: formData.get('email'), 
          Message: formData.get('form_message'), 
        },
      }
      );

      setIsSubmitted(true);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <ul className="sasw_list mb0">
        <li className="search_area">
          <div className="form-group mb-3">
            <input
              type="text"
              name="Contact"
              className="form-control"
              placeholder="الاسم"
              required
            />
          </div>
        </li>
        <li className="search_area">
          <div className="form-group mb-3">
            <input
              type="text"
              name="propertyName"
              className="form-control"
              placeholder="اسم العقار"
              value={propertyName}
              required
              hidden
            />
          </div>
        </li>
        <li className="search_area">
          <div className="form-group mb-3">
            <input
              type="text"
              name="URL"
              className="form-control"
              placeholder="اسم العقار"
              value={propertyLink}
              required
              hidden
            />
          </div>
        </li>
        <li className="search_area">
          <div className="form-group mb-3">
            <input
              type="number"
              name="Phone"
              className="form-control"
              placeholder="الهاتف"
              required
            />
          </div>
        </li>
        <li className="search_area">
          <div className="form-group mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="الايميل"
              required
            />
          </div>
        </li>
        <li className="search_area">
          <div className="form-group mb-3">
            <textarea
              id="form_message"
              name="form_message"
              className="form-control"
              rows="5"
              required
              placeholder="الاستفسار"
            ></textarea>
          </div>
        </li>
        <li>
          <div className="search_option_button">
            <button type="submit" className="btn btn-block btn-thm w-100">
              ارسال
            </button>
          </div>
        </li>
      </ul>
    </form>
          {isSubmitted && <p>تم تثبيت اهتمامك بالعقار</p>}
</div>
  );
};

export default ContactWithAgent;
