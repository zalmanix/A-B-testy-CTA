import React from "react";

const servicesData = [
  {
    title: "Naprawa sprzętu komputerowego",
    description:
      "Zapewniamy profesjonalną diagnostykę oraz naprawę komputerów i laptopów. Oferujemy usługi takie jak wymiana podzespołów, instalacja oprogramowania, czy usuwanie wirusów. Dzięki naszemu doświadczeniu możemy zdiagnozować i naprawić większość problemów sprzętowych i programowych, niezależnie od producenta urządzenia. Ponadto oferujemy konserwację komputerów, w tym czyszczenie układów chłodzenia oraz wymianę past termoprzewodzących, co zapewnia dłuższą żywotność urządzeń.",
    image: "/images/services/repair.webp",
  },
  {
    title: "Konsultacje z technikiem",
    description:
      "Skonsultuj się z naszym ekspertem, aby znaleźć rozwiązania techniczne dopasowane do Twoich potrzeb. Oferujemy wsparcie zarówno dla użytkowników domowych, jak i firm. Podczas konsultacji możesz uzyskać pomoc w wyborze odpowiedniego sprzętu, rozwiązywaniu problemów technicznych oraz optymalizacji konfiguracji urządzeń. Nasz zespół doradzi Ci również w zakresie rozwiązań sieciowych, bezpieczeństwa danych oraz konfiguracji sprzętu do specyficznych zastosowań, takich jak projektowanie graficzne czy gry komputerowe.",
    image: "/images/services/consultation.webp",
  },
  {
    title: "Planowanie skustomizowanego sprzętu",
    description:
      "Pomożemy Ci zaplanować idealny zestaw komputerowy dopasowany do Twoich zadań – od gier, przez grafikę komputerową, po zaawansowane obliczenia. Nasze usługi obejmują wybór optymalnych podzespołów, takich jak procesor, karta graficzna, pamięć RAM, dyski SSD/HDD oraz odpowiednie chłodzenie. Dzięki naszemu doświadczeniu stworzymy konfigurację, która zapewni wydajność i niezawodność przy jednoczesnym dopasowaniu do Twojego budżetu. Oferujemy również wsparcie w doborze akcesoriów i monitorów, aby Twój zestaw był kompletny.",
    image: "/images/services/customisation.webp",
  },
  {
    title: "Modernizacja sprzętu komputerowego",
    description:
      "Nie musisz wymieniać całego komputera – zmodernizuj swój sprzęt z naszą pomocą. Doradzimy w wyborze nowych podzespołów, które poprawią wydajność Twojego urządzenia. Oferujemy instalację szybszych procesorów, większej pamięci RAM, wydajniejszych kart graficznych oraz nowoczesnych dysków SSD, które znacząco przyspieszą pracę Twojego komputera. Dodatkowo zajmujemy się optymalizacją systemu, aktualizacją sterowników oraz poprawą przepływu powietrza w obudowie. Dzięki modernizacji Twój komputer zyska nowe życie i będzie działał lepiej niż kiedykolwiek wcześniej.",
    image: "/images/services/modernisation.webp",
  },
];


export default function ServicesPage() {
  return (
    <div className="p-6 ">
      <h1 className="text-3xl font-bold text-center mb-8">Dostępne usługi</h1>

      <div className="flex flex-col gap-12">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } gap-8 bg-[#0f2031] shadow-lg rounded-lg p-6`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full md:w-1/2 h-60 object-cover rounded-lg"
            />

            <div className="flex flex-col text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
