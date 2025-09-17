"use client";
import { useState } from "react";
export default function DashboardPage() {
  const [subhanAllah, setsubhanAllah] = useState(0);
  const [alhamdulillah, setalhamdulillah] = useState(0);
  const [lailahaIllallah, setlailahaIllallah] = useState(0);
  const [allahuAkbar, setallahuAkbar] = useState(0);
  function Countable(type: string) {
    if (type == "subhanAllah") {
      setsubhanAllah((prov) => {
        return prov == 100 ? (prov = 0) : prov + 1;
      });
    } else if (type == "alhamdu") {
      setalhamdulillah((prov) => {
        return prov == 100 ? (prov = 0) : prov + 1;
      });
    } else if (type == "lailaha") {
      setlailahaIllallah((prov) => {
        return prov == 100 ? (prov = 0) : prov + 1;
      });
    } else if (type == "allahu") {
      setallahuAkbar((prov) => {
        return prov == 100 ? (prov = 0) : prov + 1;
      });
    } else {
      setsubhanAllah((prov) => (prov = 0));
      setalhamdulillah((prov) => (prov = 0));
      setlailahaIllallah((prov) => (prov = 0));
      setallahuAkbar((prov) => (prov = 0));
    }
  }
  return (
    <div>
      <header className="relative shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-gray-900 bg-[url('/assets/bg_images/dashboard_bg.jpg')] bg-cover h-[80vh]">
          <p className="mb-6 text-4xl text-white font-bold">Let's Say Tasbiha..</p>
          <button
            className="bg-orange-500 text-white w-30 h-30 rounded-full mr-1 hover:shadow-xl hover:shadow-orange-300"
            onClick={() => Countable("subhanAllah")}
          >
            <span className="text-2xl font-bold">{subhanAllah}</span>/100
            <br />
            Subhan-Allah
          </button>
          <button
            className="bg-sky-500 text-white w-30 h-30 rounded-full mr-1 hover:shadow-xl hover:shadow-sky-300 duration-300 transition-all"
            onClick={() => Countable("alhamdu")}
          >
            <span className="text-2xl font-bold">{alhamdulillah}</span>/100
            <br />
            Alhamdulillah
          </button>
          <button
            className="bg-pink-500 text-white w-30 h-30 rounded-full mr-1 hover:shadow-xl hover:shadow-pink-300 duration-300 transition-all"
            onClick={() => Countable("lailaha")}
          >
            <span className="text-2xl font-bold">{lailahaIllallah}</span>/100
            <br />
            La-ilaha Illallah
          </button>
          <button
            className="bg-green-500 text-white w-30 h-30 rounded-full mr-1 hover:shadow-xl hover:shadow-green-300 duration-300 transition-all"
            onClick={() => Countable("allahu")}
          >
            <span className="text-2xl font-bold">{allahuAkbar}</span>/100
            <br />
            Allahu-Akber
          </button>
          <button
            className="bg-red-500 text-white text-4xl w-15 h-15 rounded-full ml-10"
            onClick={() => Countable("reset")}
          >
            ✘
          </button>
        </div>
      </main>
    </div>
  );
}
