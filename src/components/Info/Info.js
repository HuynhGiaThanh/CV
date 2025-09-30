import React from 'react';
import './Info.css';

const Info = () => {
  return (
    <section id="info" className="info">
      <div className="container">
        <div className="info-content">
          <div className="info-image">
             
            <img 
              src="/images/avatar.jpg" 
              alt="Huỳnh Gia Thành"
              className="avatar-image"
            />

          </div>
          <div className="info-details"> 
            <h1 className="info-name">Huỳnh Gia Thành</h1>
            <h2 className="info-title">Web Developer</h2>
            <div className="info-contact">
              <div className="contact-item">
                <strong>Email: huynhgiathanh04@gmail.com</strong> 
              </div>
              <div className="contact-item">
                <strong>SĐT: 0919727150</strong> 
              </div>
              <div className="contact-item">
                <strong>Địa chỉ: Thành phố Huế</strong>
              </div>
            </div>
            <div className="info-buttons">
              <a href="#projects" className="btn btn-primary">Xem dự án</a>
              <a href="#contact" className="btn btn-secondary">Liên hệ ngay</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;