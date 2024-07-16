"use client";

import { PlaceHolderandVanish } from "./PlaceHolderandVanish";



export function SerchBar() {
  const placeholders = [
    "What's the best shoe?",
    "Who is the Nike Owner?",
    "Ask anything from me",
    "Product of Milinda Jayawardhana",
    "How to buy a new shoe?",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 ">
      <PlaceHolderandVanish
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
