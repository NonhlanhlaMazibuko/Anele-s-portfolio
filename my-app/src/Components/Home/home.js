import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}
    >
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Health Science Portfolio</h1>
        <p className="mt-4 text-lg md:text-2xl">Exploring my journey through learning, reflecting, and growing in the health sciences.</p>
      </div>
    </section>
  );
};

export default Home;
