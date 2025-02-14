import React from "react";
import "../style/skills.css"

const skills = [
  { name: "HTML", percentage: 90 },
  { name: "CSS", percentage: 95 },
  { name: "TypeScript", percentage: 90 },
  { name: "Next.js", percentage: 85 },
  { name: "Tailwind CSS", percentage: 93 },
];

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            {/* Circular Progress Bar */}
            <div
              className="circle"
              style={{
                background: `conic-gradient(#ff6600 ${skill.percentage}%, #fff ${skill.percentage}%)`,
              }}
            >
              <div className="inner-circle">
                <h5 className="percentage">{skill.percentage}%</h5>
              </div>
            </div>
            {/* Skill Name */}
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
