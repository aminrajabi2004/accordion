import React, { useState } from "react";
import "../index.css";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const data = [
  {
    id: 1,
    title: "Accardion one",
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Accardion tow",
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "Accardion threee",
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

function Accardion() {
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Accardion;

function AccordionItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div> {item.title} </div>
        <ChevronDownIcon
          style={{
            width: "1.2rem",
            transition: "all 0.2s ease-out",
            rotate: isOpen ? "180deg" : "0deg",
          }}
        />
      </div>
      <div className="accordion-item__content">{item.text}</div>
    </div>
  );
}
