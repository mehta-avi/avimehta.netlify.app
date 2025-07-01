import React from "react";
import Nav from "./Nav";

export default function Resume() {
  const openResume = () => {
    window.open('/AviMehtaResume.pdf', '_blank');
  };

  return (
    <section className="flex justify-center min-h-screen">
      <div className="w-full max-w-2xl py-20 px-4">
        <Nav />
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">Resume</h2>
          <p className="text-lg text-gray-600 mb-8">
            Click the button below to view my resume in a new tab.
          </p>
          <button
            onClick={openResume}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Open Resume (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
