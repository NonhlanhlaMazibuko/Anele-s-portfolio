import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url('/assets/last-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
       }}
    >
      <div className="text-center text-black">
        <h1 className="text-4xl md:text-6xl font-bold"><strong>Hi There. I am Anele</strong></h1>
        <h2 className="text-4xl md:text-4xl font-bold"><strong>Welcome to My Health Systems Science Portfolio</strong></h2>
        <p className="mt-4 text-lg md:text-2xl">I invite you to explore my journey through the HSS-1 course, where I highlight key achievements, skills, and personal reflection. Here, I reflect on the lessons I've learned and how I plan to apply them in my future healthcare career. </p>
      </div>
    </section>
  );
};

export default Home;
