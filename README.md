# portfolio
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title before:content-['01.'] before:text-lightblue before:mr-2">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2 space-y-4">
            <p>
              Hello! I'm Madhuri, a Computer Science and Engineering student specializing in AI and Data Science at 
              Shri Vishnu Engineering College For Women, with an expected graduation in 2027.
            </p>
            
            <p>
              My journey in technology began with a fascination for how digital solutions can solve real-world problems. 
              This curiosity led me to pursue a path that combines technical expertise with creative problem-solving.
            </p>
            
            <p>
              I find joy in building applications that are not only functionally robust but also intuitive and accessible. 
              My approach combines technical precision with a deep understanding of user needs.
            </p>
            
            <p>
              When I'm not coding, I'm continuously expanding my knowledge through online courses, 
              tech communities, and hands-on projects that challenge my abilities and broaden my perspective.
            </p>
          </div>
          
          <div className="relative group">
            <div className="rounded-md overflow-hidden bg-navy p-6 border border-lightblue/30 hover:border-lightblue transition-all duration-300">
              <div className="text-center mb-4">
                <span className="text-5xl text-lightblue mb-2 block">🎓</span>
                <h3 className="text-white text-lg font-bold">Education</h3>
              </div>
              <p className="text-lightslate text-sm">
                <span className="block font-bold">B.Tech in Computer Science and Engineering</span>
                <span className="block">AI and Data Science Specialization</span>
                <span className="block">Shri Vishnu Engineering College For Women</span>
                <span className="block">Class of 2027</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
