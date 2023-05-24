import React from 'react';
import { BiBorderNone } from 'react-icons/bi';
import Link from 'next/link';


export default function Watchqoshan() {
  return (
    <>
      <div
        className="watch-qoshan-banner row"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dhk7qsnfv/image/upload/v1684842479/maxresdefault_v8rsjr.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          position: 'relative',
          paddingTop: '0px',
          paddingBottom: '0px'
        }}
      >
        <div className="col-lg-8 d-flex align-items-center pl-20" style={{paddingLeft: 50, paddingRight: 50, paddingTop: 200, paddingBottom: 200 }}>
          <div>
            <h4 style={{ color: '#ffff'}}>
              #مستشارك_العقاري
            </h4>
            <h1 style={{ color: '#ffff'}}>
              شاهد قوشان
            </h1>
          <Link href="/watch-qoshan"><button style={{background: '#22222222', paddingLeft: '15px', paddingRight: '10px', paddingTop: '5px', paddingBottom: '5px', color: '#ffff', border: 'none'}}>شاهد قوشان</button></Link>
          <Link href="/shorts"><button style={{background: '#ffff', paddingLeft: '15px', paddingRight: '10px', paddingTop: '5px', paddingBottom: '5px', color: '#000000', border: 'none'}}>نصائح عقارية</button></Link>
          </div>
        </div>
      
      </div>
    </>
  );
}
