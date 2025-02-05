"use client";
import { useState } from "react";

export const stdButton = () => {
    const increment = () => {
        setCount(count + 1);
    }
  const [count, setCount] = useState(0);
  return <button onClick={increment} className="bg-sky-500 px-8 py-4">{count}</button>;
};
