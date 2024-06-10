import React from "react";

function Owner() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-14">
      <h1 className="text-center text-2xl font-bold mb-4">
        AOUN - Group A - 34
      </h1>
      <div className="mb-4 flex justify-center">
        <img
          src="https://i.pinimg.com/736x/18/7a/e8/187ae8c6c3354d5d0687e24f24d0defb.jpg"
          alt=""
          className="w-64 h-64 object-cover rounded-full"
        />
      </div>
      <h2 className="text-center text-xl font-semibold mb-2">
        Short Biography
      </h2>
      <p className="text-gray-700 leading-relaxed">
        I graduated from Generation's Junior Software Developer Bootcamp and am
        currently seeking a position as a full-stack developer. My experience
        includes project management in the construction of pop-up stores, which
        has equipped me with valuable skills in teamwork and communication. I
        believe these skills are transferable and will serve me well in a junior
        developer role.
      </p>
    </div>
  );
}

export default Owner;
