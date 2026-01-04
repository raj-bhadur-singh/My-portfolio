import React from "react";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-black via-[#0b0b27] to-[#180d29] text-white py-20 px-4 sm:px-10">
      <div className="max-w-5xl mx-auto text-center">
        {/* CTA Box */}
        <div className="bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 text-black rounded-2xl px-8 py-14 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Let’s Build Something <span className="text-blue-800">Amazing</span> Together
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-800 max-w-2xl mx-auto">
            I'm open to <span className="font-semibold">freelance</span>, <span className="font-semibold">part-time</span>, and <span className="font-semibold">full-time</span> opportunities. Let’s turn your ideas into beautiful, scalable, and powerful digital products.
          </p>

          <a href="mailto:rajbhadurs809@gmail.com?subject=Let%27s%20Connect&body=Hi%20Arjun%2C%20I%27d%20like%20to%20get%20in%20touch%20with%20you.">
            <button className="mt-8 bg-black hover:bg-zinc-900 text-white font-medium py-3 px-8 rounded-full shadow-lg transition duration-300">
              Let’s Talk ↓
            </button>
          </a>


        </div>

        {/* Footer Note */}
        <div className="mt-12 text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Raj Bhadur singh</span>. All rights reserved.
        </div>
      </div>
    </section>
  );
};


export default CTASection;
