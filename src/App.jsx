import React from "react";
import logoB from "../public/image/logo-b.png";

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-96 p-5 border shadow rounded-md bg-white hover:bg-sky-500 hover:text-white duration-300">
        <div className="w-full flex justify-between mb-2 items-center">
          {/* <img src={logoB} alt="img" /> */}
          <img src={logoB} alt="img" width={60} />
          <h1 className="text-3xl font-bold mb-3">Vite + React</h1>
        </div>
        <div>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            sint obcaecati ipsam eos. Corporis dolore fuga beatae perferendis
            molestias. Magni reprehenderit molestias dolorum at perspiciatis.
            Dicta, eum sit. Sed, accusamus!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
