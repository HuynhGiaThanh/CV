import React from 'react';
import './Info.css';

const Info = () => {
  return (
    <section id="info" className="info">
      <div className="container">
        <div className="info-content">
          <div className="info-image">
            {/* Thay thế placeholder bằng ảnh thật */}
            <img 
              src="/images/avatar.jpg" 
              alt="Huỳnh Gia Thành"
              className="avatar-image"
            />
            <div className="image-placeholder">
              
            </div>
          </div>
          <div className="info-details">
            <h1 className="info-name">Huỳnh Gia Thành</h1>
            <h2 className="info-title">Web Developer</h2>
            <div className="info-contact">
              <div className="contact-item">
                <strong>Email:</strong> huynhgiathanh04@gmail.com
              </div>
              <div className="contact-item">
                <strong>SĐT:</strong> 0919727150
              </div>
              <div className="contact-item">
                <strong>Địa chỉ:</strong> Thành phố Huế
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