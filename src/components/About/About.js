import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
               Xin chào! Tôi là <strong>Huỳnh Gia Thành</strong>, một lập trình viên web đam mê 
              sáng tạo với trái tim hướng về công nghệ.
            </p>
            <p>
              Hành trình của tôi trong thế giới lập trình bắt đầu từ niềm đam mê khám phá 
              cách các ứng dụng web hoạt động. Từ những dòng code đầu tiên, tôi đã bị cuốn hút 
              bởi khả năng biến ý tưởng thành hiện thực thông qua mã lệnh.
            </p>
            <div className="about-info">
              <div className="info-item">
                <strong>Name:</strong> Huỳnh Gia Thành
              </div>
              <div className="info-item">
                <strong>Email:</strong> huynhgiathanh04@gmail.com
              </div>
              <div className="info-item">
                <strong>Location:</strong> Thành phố Huế
              </div>
              <div className="info-item">
                <strong>Education:</strong> Trường Đại Học Khoa Học - Đại Học Huế
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;