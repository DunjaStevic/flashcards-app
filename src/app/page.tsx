"use client";
import Image from "next/image";



import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
     <><div className="bg-blue-500 p-4 text-white">
      GLAVNA STRANICA
    </div><div className="flex min-h-screen flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold">
          Moj brojač
        </h1>

        <p className="text-5xl font-bold">
          {count}
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="rounded bg-green-500 px-6 py-3 text-white"
          >
            Povećaj
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="rounded bg-red-500 px-6 py-3 text-white"
          >
            Smanji
          </button>

          <button
            onClick={() => setCount(0)}
            className="rounded bg-gray-500 px-6 py-3 text-white"
          >
            Resetuj
          </button>
        </div>
      </div></>
  );
}