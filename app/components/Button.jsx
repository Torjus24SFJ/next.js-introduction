"use client";
import { useState } from "react";

export const Button = () => {
    const increment = () => {
        setCount(count + 1);
    }
  const [count, setCount] = useState(0);
  return <button onClick={increment} className="bg-slate-300 text-slate-800 w-10">{count}</button>;
};
