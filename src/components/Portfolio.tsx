import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-navy/30 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title before:content-['02.'] before:text-lightblue before:mr-2">
          My Work
        </h2>
        
        <div className="mt-12">
          <div className="bg-navy border border-lightblue/20 rounded-lg overflow-hidden hover:border-lightblue/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 flex flex-col justify-center">
                <p className="text-lightblue mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-white mb-4">Guidance Chat Bot for College</h3>
                <div className="bg-darkblue p-6 rounded-lg mb-5 shadow-lg">
                  <p className="text-slate">
                    Developed an AI-driven chatbot that assists students with college-related inquiries. 
                    The bot provides guidance on course selection, academic schedules, and general campus information.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="text-sm text-lightslate bg-navy px-3 py-1 rounded-full border border-lightblue/20">
                    Python
                  </span>
                  <span className="text-sm text-lightslate bg-navy px-3 py-1 rounded-full border border-lightblue/20">
                    JavaScript
                  </span>
                  <span className="text-sm text-lightslate bg-navy px-3 py-1 rounded-full border border-lightblue/20">
                    Natural Language Processing
                  </span>
                  <span className="text-sm text-lightslate bg-navy px-3 py-1 rounded-full border border-lightblue/20">
                    Machine Learning
                  </span>
                </div>
              </div>
              
              <div className="bg-lightblue/5 flex items-center justify-center p-6">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-lightblue/20">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-darkblue/80 text-center p-6">
                    <div className="w-20 h-20 bg-lightblue/10 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lightblue">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white">Guidance Chat Bot</h4>
                    <p className="text-slate text-sm mt-2">
                      An intelligent assistant helping students navigate college life
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
