import StandardButton from "@/buttons/standardGray";
import React from "react";
import Image from "next/image";
import styles from "./StandardGrayView.module.css"; // Assuming you use CSS Modules

const StandardGrayView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/laptop_mobile_bench_outdoors.jpg"
          alt="Placeholder"
          width={600}
          height={400}
        />
      </div>
      <div className={styles.textContent}>
        <h1 className={styles.heading}>
          Sprzęt komputerowy w atrakcyjnej cenie!
        </h1>
        <p className={styles.paragraph}>
          Szukasz niezawodnego sprzętu komputerowego w atrakcyjnej cenie?
          Sprawdź naszą ofertę - w FixIT znajdziesz szeroki wybór laptopów,
          komputerów stacjonarnych i akcesoriów, które łączą jakość z przystępną
          ceną. Nasi eksperci chętnie doradzą i pomogą dobrać idealne
          rozwiązanie do Twoich potrzeb. Odwiedź nas i przekonaj się sam!
        </p>
        <StandardButton className={styles.button} />
      </div>
    </div>
  );
};

export default StandardGrayView;
