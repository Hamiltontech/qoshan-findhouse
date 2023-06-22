import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, body }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setName('');
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
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <label htmlFor="name">اسمك الكامل</label>
              <input
              className='form-control'
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email">البريد الالكتروني</label>
              <input
              className='form-control'
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="phone">هاتف</label>
              <input
              className='form-control'
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <label htmlFor="message">رسالتك</label>        <textarea
                id="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className='form-control'
              />
            </div>
            <div className="form-group mb-0">

              <button type="submit" className="btn btn-lg btn-thm">ارسال</button>
            </div>
            {message && <p style={{color: "#c2b49a"}}>{message}</p>}
          </div>
        </div>
      </form>
      {isSubmitted && (
        <div className="success-message">
          <p>تم ارسال الرسالة بنجاح</p>
        </div>
      )}

      <style jsx>{`
        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        input,
        textarea {
          width: 100%;
          padding: 10px;
        }

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

export default ContactForm;
