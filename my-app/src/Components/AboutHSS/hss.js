import React from 'react';

const HSS = () => {
  return (
    <section
      id="hss"
      className="bg-cover bg-center min-h-screen flex items-center justify-center py-20"
      style={{ backgroundImage: `url('/assets/clean-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
       }}
    >
      <div className="bg-white bg-opacity-80 p-10 md:p-16 rounded-lg shadow-lg max-w-3xl text-center mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Health System Science (HSS)?</h2>
        <p className="text-lg md:text-xl mb-8">
          Health System Science (HSS) focuses on understanding how healthcare systems operate to improve the delivery and
          management of services. While many think it only addresses patient care quality, HSS encompasses broader areas
          like healthcare policy, systems thinking, and population health management. It integrates elements of public
          health, bioethics, and health law, empowering students to analyze and enhance healthcare systems using a
          systems-thinking approach. This approach promotes collaboration and strategies to improve patient care while
          making healthcare more affordable and accessible to all.
        </p>
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">Purpose and Relevance</h3>
        <p className="text-lg md:text-xl">
          In this portfolio, I aim to showcase not only my academic achievements but also my ability to apply the
          principles of HSS in real-world contexts. By understanding the complexities of healthcare systems, I hope to
          contribute to efforts that improve healthcare delivery and system management for all.
        </p>
      </div>
    </section>
  );
};

export default HSS;
