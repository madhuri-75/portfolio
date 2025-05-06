import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "AI & Development",
      skills: ["Machine Learning", "Natural Language Processing", "Problem Solving", "Algorithm Design"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "VS Code", "React", "Node.js", "MongoDB"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title before:content-['03.'] before:text-lightblue before:mr-2">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-navy rounded-lg p-6 border border-lightblue/20 hover:border-lightblue/60 transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl text-white font-semibold mb-6 border-b border-lightblue/30 pb-2">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className="flex items-center"
                  >
                    <svg 
                      className="text-lightblue mr-3 flex-shrink-0" 
                      width="12" 
                      height="12" 
                      viewBox="0 0 12 12" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M6.86603 10.5C6.48113 11.1667 5.51887 11.1667 5.13397 10.5L0.669873 2.5C0.284973 1.83333 0.766098 1 1.5359 1L10.4641 1C11.2339 1 11.715 1.83333 11.3301 2.5L6.86603 10.5Z" 
                        fill="currentColor"
                      />
                    </svg>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
