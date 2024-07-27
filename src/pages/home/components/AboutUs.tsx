import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section>
      <div className="container grid lg:grid-cols-12 py-16">
        <h1 className="col-span-9 text-4xl lg:text-6xl font-semibold">
          Destiny in Your Hands <span className="text-base-600">/</span>
          <br />
          <span className="text-4xl">Modern Charms for Every Occasion</span>
          <span className="text-base-600"> .</span>
        </h1>
        <div className="col-span-3 flex items-center">
          <p>
            <span className="font-bold">Mutayloo</span> is modern spiritual
            jewelry tailored by zodiac sign, enhancing beauty and spiritual
            power.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
