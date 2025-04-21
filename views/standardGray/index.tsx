import StandardButton from "@/buttons/standardGray";
import React from "react";
import Image from "next/image";

const StandardGrayView = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 w-full">
      <div className="w-full md:w-1/4">
        <Image
          src="/images/laptop_mobile_bench_outdoors.jpg"
          alt="Placeholder"
          width={600}
          height={400}
          // className="object-cover"
        />
      </div>
      <div className="w-full md:w-3/4 flex flex-col ">
        <h1 className="text-3xl font-bold pt-4 md:pt-0 pb-4">
          Czym się zajmujemy
        </h1>
        <p className="text-lg text-[#3D3D3D] pb-6">
          FixIT to firma specjalizująca się w serwisie i sprzedaży sprzętu
          komputerowego. Oferujemy kompleksowe usługi naprawy komputerów,
          laptopów, a także akcesoriów elektronicznych, zapewniając wysoką
          jakość i szybki czas realizacji.
        </p>
        <StandardButton className="text-[#3D3D3D] bg-[#E0E0E0] font-semibold text-sm rounded"/>
      </div>
    </div>
  );
};

export default StandardGrayView;
