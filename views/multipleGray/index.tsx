import StandardButton from "@/buttons/standardGray";
import React from "react";
import Image from "next/image";
import styles from "./MultipleGrayView.module.css";
import HeaderWithBanner from "@/components/HeaderWithBanner";

const MultipleGrayView = ({ onCTA }: { onCTA: () => void }) => {
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
          <div className={styles.btnWrapper}>
            <StandardButton className={styles.button} onClick={onCTA} />
            <StandardButton className={styles.button} label="Zobacz ofertę" />
            <StandardButton
              className={styles.button}
              label="Więcej informacji"
            />
          </div>
        </div>
      </div>
    </HeaderWithBanner>
  );
};

export default MultipleGrayView;
