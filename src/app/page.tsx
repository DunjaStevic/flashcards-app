"use client";
import Image from "next/image";



import { useState, useEffect} from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [counterOver20, setCounterOver20] = useState(false);

  useEffect(() => {
    if (count > 20) {
      setCounterOver20(count>20);
    }
  }, [count]);

  return (
     <><div className="bg-blue-500 p-4 text-white">
      GLAVNA STRANICA
    </div><div className="flex min-h-screen flex-col items-center justify-center gap-6">
      
      <div className="bg-blue-400  text-white">

        <p className={"text-[32px]"}>Brojac: {count}</p>
        <button className={"bg-yellow-400"} onClick={() => setCount(prev => prev + 1)}>Povecaj brojac</button>
        {
          counterOver20 && <p className={"text-[32px]"}>Brojac je presao od 20!</p>
        }

        
      
      </div>
      
      
      
      </div></>

    

  );
}