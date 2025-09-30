import React from 'react';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { category: "JS", items: ["REACT", "POSTGRESQL", "NEXTUS", "C", "UF"] },
    { category: "CSS", items: ["JANA", "HTML", "NOTLE JS", "JS"] }
  ];

  const softSkills = [
    "Giao Tiếp Chuyên Nghiệp",
    "Đáng Tin Cậy",
    "Quản Lý Thời Gian Hiệu Quả",
    "Ham Học Hỏi"
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Kỹ Năng & Chuyên Môn</h2>
        
        <div className="skills-intro">
          <p>
            Là một nhà phát triển web mới vào nghề, mình có nền tảng về các framework 
            front-end như React, và có kinh nghiệm làm việc với các công nghệ 
            back-end như Node.js.
          </p>
        </div>

        <div className="skills-divider">
          <span></span>
        </div>

        <div className="skills-content">
          <div className="technical-skills">
            <h3 className="skills-subtitle">Công Cụ & Công Nghệ</h3>
            <p className="skills-description">
              Thành thạo nhiều công cụ lập trình web hiện đại, có kinh nghiệm xây dựng các 
              ứng dụng web tương tác, thân thiện với người dùng và đảm bảo viết mã sạch, dễ bảo trì.
            </p>
            
            <div className="skills-grid">
              {technicalSkills.map((skillGroup, index) => (
                <div key={index} className="skill-group">
                  <h4 className="skill-category">{skillGroup.category}</h4>
                  <div className="skill-items">
                    {skillGroup.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="skill-item">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-skills">
            <h3 className="skills-subtitle">Kỹ Năng Mềm</h3>
            <p className="skills-description">
              Kỹ năng giao tiếp, cộng tác, và giải quyết vấn đề xuất sắc, với thái độ chủ động 
              và ham học hỏi, dễ dàng thích nghi trong môi trường làm việc nhóm năng động.
            </p>
            
            <div className="soft-skills-list">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-item">
                  <span className="soft-skill-bullet">•</span>
                  <span className="soft-skill-text">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;