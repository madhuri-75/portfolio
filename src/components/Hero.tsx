import React from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 space-y-5">
          <p className="text-lightblue opacity-0 animate-fade-in">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white opacity-0 animate-fade-in animate-delay-1">
            Madhuri Sri Durga Visali Perumalla
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate opacity-0 animate-fade-in animate-delay-2">
            I build things for the web & AI.
          </h2>
          <p className="text-slate text-lg max-w-2xl opacity-0 animate-fade-in animate-delay-3">
            I'm an aspiring Full-Stack and AI Developer with a passion for creating modern web applications. 
            Combining technical expertise and creative problem-solving to deliver solutions that meet user needs and business goals.
          </p>
          <div className="pt-5 opacity-0 animate-fade-in animate-delay-4">
            <a href="#portfolio" className="btn btn-primary mr-4">
              Explore My Work
            </a>
            <a href="#contact" className="btn border-slate text-slate hover:border-lightblue hover:text-lightblue">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="lg:col-span-2 opacity-0 animate-fade-in animate-delay-5">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-2 border-lightblue">
              <img 
                src="/placeholder.svg" 
                alt="Madhuri Sri Durga Visali Perumalla" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-lightblue/20 transform -translate-x-2 -translate-y-2 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
