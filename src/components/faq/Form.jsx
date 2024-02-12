import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [propertyType, setPropertyType] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [propertyArea, setPropertyArea] = useState('');
  const [propertyImages, setPropertyImages] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('area', area);
    formData.append('propertyType', propertyType);
    formData.append('sellingPrice', sellingPrice);
    formData.append('propertyArea', propertyArea);
    formData.append('body', body);
    formData.append('propertyImages', propertyImages)
    // propertyImages.forEach((image, index) => {
    //   formData.append(`image_${index + 1}`, image);
    // });

    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, area, propertyType, sellingPrice, propertyArea, body, propertyImages }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setName('');
        setEmail('');
        setPhone('');
        setArea('');
        setPropertyType('');
        setSellingPrice('');
        setPropertyArea('');
        setPropertyImages(null);
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
      {message && <p>{message}</p>}
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
              <label htmlFor="area">عنوان العقار</label>
              <input
                className='form-control'
                id="area"
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
            <div className="row">

              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="propertyType">نوع العقار</label>
                  <div className="input-group">
                    <select
                      className='selectpicker form-select show-tick form-control'
                      id="propertyType"
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                    >
                     <option value="">نوع العقار</option>
                <option value="شقق">شقق</option>
                <option value="شقق طابقية">شقق طابقية</option>
                <option value="فلل متلاصقة">فلل متلاصقة</option>
                <option value="فلل">فلل</option>
                {/* <option value="قطع أراضي سكنية">قطع أراضي سكنية</option> */}
                {/* <option value="قطع أراضي تجارية">قطع أراضي تجارية</option> */}
                <option value="قطع أراضي صناعي">قطع أراضي صناعية</option>
                <option value="برج سكني">برج سكني</option>
                <option value="استوديوهات">استوديوهات</option>
                <option value="شاليهات">شاليهات</option>
                <option value="مشاريع قطع أراضي">مشاريع قطع أراضي</option>
                <option value="مشاريع قيد الإنشاء">مشاريع قيد الإنشاء</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="sellingPrice">سعر البيع</label>
                  <div className="input-group">
                    <input
                      className='form-control'
                      id="sellingPrice"
                      type="text"
                      value={sellingPrice}
                      onChange={(e) => setSellingPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="form-group">
                <label htmlFor="propertyArea">مساحة العقار</label>
                <div className="input-group">
                  <input
                    className='form-control '
                    id="propertyArea"
                    type="text"
                    value={propertyArea}
                    onChange={(e) => setPropertyArea(e.target.value)}
                  />
                </div>
              </div>
            </div>

          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <label htmlFor="message">رسالتك</label>        <textarea
                id="body"
                className='form-control'
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <label htmlFor="propertyImages">صور العقار</label>
                <input
                  className='form-control'
                  style={{border: "none"}}
                  id="propertyImages"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => { setPropertyImages(e.target.files[0]); }}
                />
              </div>
            </div>
            <div className="form-group mb-0">

              <button type="submit" className="btn btn-lg btn-thm">ارسال</button>
            </div>
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
