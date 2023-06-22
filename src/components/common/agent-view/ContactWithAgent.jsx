import axios from 'axios';
import React, { useState } from 'react';

const ContactWithAgent = ({ propertyLink, propertyName }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, propertyName, body, propertyLink }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setEmail('');
        setPhone('');
        setBody('');
      } else {
        setMessage('Failed to send email');
      }
    } catch (error) {
      console.error(error);
      setMessage('Failed to send email');
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
              onChange={(e) => setName(e.target.value)}
              value={name}
              id="name"

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
              id="propertyName"
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
              id="url"
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
              value={phone}
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
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
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </li>
        <li className="search_area">
          <div className="form-group mb-3">
            <textarea
              id="body"
              name="form_message"
              className="form-control"
              rows="5"
              required
              placeholder="الاستفسار"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
        </li>
        <li>
          <div className="search_option_button">
            <button type="submit" className="btn btn-block btn-thm w-100">
              ارسال
            </button>
          </div>
          {message && <p style={{color: "#c2b49a"}}>{message}</p>}
        </li>
      </ul>
    </form>
          {isSubmitted && <p>تم تثبيت اهتمامك بالعقار</p>}
</div>
  );
};

export default ContactWithAgent;
