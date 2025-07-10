"use client";

import React, { useEffect, useState } from "react";
import "./style.css";

interface HighlightWordProps {
  text: string;
  word: string;
  className?: string;
}

function HighlightWord({ text, word, className }: HighlightWordProps) {
  const parts = text.split(new RegExp(`(${word})`, "gi"));

  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === word.toLowerCase() ? (
          <span key={i} className={className}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function Home() {
  const fullText =
    "Olá, meu lindo cacto 🌵. Fiz essa surpresa pra ti, pois faz tempo que queria te entregar algo bonito. Queria te passar a mensagem do quão especial você é para mim e o quanto sou feliz por ter você comigo. Queria te dizer que, acima de tudo, te agradeço por estar ao meu lado e por me ensinar, aos pouquinhos, o que é o amor. Contigo, tenho reaprendido a amar e aprendido como o amor pode ser bonito, expressivo, paciente, fiel e, acima de tudo, que, contanto que tenhamos carinho e disposição para melhorarmos uma pela outra, podemos construir uma relação cada vez mais linda! Obrigada por estar comigo, EU TE AMO.";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) clearInterval(interval);
    }, 80); // tempo entre letras

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center min-h-screen">
      <div className="relative">
        <div className="george ml-50">
          <div className="shadow"></div>
          <div className="george_flower"></div>
          <div className="george_head">
            <div className="line"></div>
            <div className="cheek"></div>
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
          <div className="pot_top"></div>
          <div className="pot_body"></div>
          <div className="pot_plate"></div>
        </div>
        <div
          className="card absolute p-10 bg-white bg-opacity-90 rounded shadow-lg w-120 border border-l-green-600 border-r-green-600 border-t-green-300 border-b-green-300"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        >
          <p className="text-slate-600">
            <HighlightWord
              text={displayedText}
              word="cacto"
              className="text-green-600"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
