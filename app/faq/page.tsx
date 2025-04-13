"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "Jak długo trwa naprawa sprzętu komputerowego?",
    answer:
      "Czas naprawy zależy od rodzaju problemu oraz dostępności części zamiennych. Większość napraw trwa od 1 do 3 dni roboczych.",
  },
  {
    question: "Czy oferujecie usługi zdalne?",
    answer:
      "Tak, oferujemy zdalne wsparcie techniczne w zakresie konfiguracji oprogramowania, diagnostyki problemów oraz doradztwa technicznego.",
  },
  {
    question: "Czy mogę samodzielnie wybrać podzespoły do modernizacji komputera?",
    answer:
      "Oczywiście! Nasz zespół chętnie doradzi Ci, które podzespoły będą najlepiej pasować do Twojego sprzętu i wymagań.",
  },
  {
    question: "Jakie są opcje płatności za usługi?",
    answer:
      "Akceptujemy płatności gotówką, kartą płatniczą oraz przelewem bankowym. Szczegóły dotyczące płatności ustalamy indywidualnie podczas realizacji usługi.",
  },
  {
    question: "Czy oferujecie gwarancję na swoje usługi?",
    answer:
      "Tak, wszystkie nasze usługi objęte są gwarancją. Szczegóły dotyczące okresu gwarancji zależą od rodzaju wykonanej usługi.",
  },
];

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState(null);

  // @ts-expect-error yes
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white w-full my-8">
      <h1 className="text-4xl font-bold text-center mb-8">Najczęściej zadawane pytania</h1>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-4 cursor-pointer"
            onClick={() => toggleQuestion(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <span className="text-xl">
                {openQuestion === index ? "-" : "+"}
              </span>
            </div>
            {openQuestion === index && (
              <p className="mt-2 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
