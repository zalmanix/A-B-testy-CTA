import StandardButton from "@/buttons/standardGray";
import React from "react";
import Image from "next/image";
import styles from "./PulsatingOrangeView.module.css";
import HeaderWithBanner from "@/components/HeaderWithBanner";

const PulsatingOrangeView = ({ onCTA }: { onCTA: () => void }) => {
  return (
    <HeaderWithBanner>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/printer.jpg"
            alt="Placeholder"
            width={600}
            height={400}
          />
        </div>
        <div className={styles.textContent}>
          <h1 className={styles.heading}>
            Atrakcyjny sprzęt komputerowy w świetnych cenach!
          </h1>
          <p className={styles.paragraph}>
            Potrzebujesz solidnego sprzętu komputerowego w korzystnej cenie?
            Zajrzyj do FixIT! Oferujemy szeroki wybór laptopów, komputerów
            stacjonarnych i akcesoriów, które łączą wysoką jakość z przystępną
            ceną. Nasi specjaliści chętnie pomogą Ci dobrać najlepsze
            rozwiązanie dopasowane do Twoich potrzeb. Sprawdź nas i przekonaj
            się, że warto!
          </p>
          <StandardButton className={styles.button} onClick={onCTA} />
        </div>
      </div>
    </HeaderWithBanner>
  );
};

export default PulsatingOrangeView;
