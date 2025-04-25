"use client";

import { useEffect, useState } from "react";
import ContrastBlueView from "@/views/contrastBlue";
import ContrastOrangeView from "@/views/contrastOrange";
import MultipleGrayView from "@/views/multipleGray";
import PulsatingOrangeView from "@/views/pulsatingOrange";
import PulsatingOrangeFastView from "@/views/pulsatingOrangeFast";
import StandardGrayView from "@/views/standardGray";
import StandardRedView from "@/views/standardRed";
import StarRating from "@/components/StarRating";
import { supabase } from "@/lib/supabaseClient";

const views = [
  { id: "standardGray", component: StandardGrayView },
  { id: "standardRed", component: StandardRedView },
  { id: "contrastOrange", component: ContrastOrangeView },
  { id: "contrastBlue", component: ContrastBlueView },
  { id: "pulsatingOrange", component: PulsatingOrangeView },
  { id: "multipleGray", component: MultipleGrayView },
  { id: "pulsatingOrangeFast", component: PulsatingOrangeFastView },
];

export default function Home() {
  const [step, setStep] = useState<"intro" | "test" | "feedback">("intro");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [responseTime, setResponseTime] = useState<number | null>(null);
  const [selectedView, setSelectedView] = useState(views[0]);
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    if (step === "test") {
      const random = views[Math.floor(Math.random() * views.length)];
      setSelectedView(random);
      setStartTime(Date.now());
    }
  }, [step]);

  const handleCTAInteraction = () => {
    const endTime = Date.now();
    setResponseTime(endTime - (startTime || endTime));
    setStep("feedback");
  };

  const handleSubmit = async () => {
    await supabase.from("cta_tests").insert({
      view_id: selectedView.id,
      response_time: responseTime,
      rating: rating,
      timestamp: new Date().toISOString(),
    });
    setStep("intro");
    setRating(0)
  };

  const SelectedComponent = selectedView.component;

  return (
    <>
      {step === "test" ? (
        <SelectedComponent onCTA={handleCTAInteraction} />
      ) : (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="w-full max-w-2xl text-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
            {step === "intro" && (
              <>
                <h1 className="text-3xl font-bold text-gray-800 mb-6 leading-snug">
                  Badanie efektywności przycisków Call to Action z
                  wykorzystaniem testów A/B
                  <br className="hidden sm:block" />
                </h1>

                <p className="text-gray-700 mb-4 text-base leading-relaxed">
                  Zobaczysz widok interfejsu. Postaraj się jak najszybciej
                  znaleźć i kliknąć główny przycisk CTA. Przycisk zawsze będzie
                  zawierał treść <b>&quot;Kup Teraz&quot;</b>.
                </p>

                <p className="text-gray-700 mb-6 text-base leading-relaxed">
                  Test posiada wiele wariantów, dlatego zachęcam do wykonania go
                  kilkukrotnie.
                </p>

                <button
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg py-3 px-8 rounded-xl shadow-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  onClick={() => setStep("test")}
                >
                  Rozpocznij Test
                </button>
              </>
            )}

            {step === "feedback" && (
              <>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  Jak intuicyjny był interfejs?
                </h2>
                <StarRating value={rating} onChange={setRating} />
                <button
                  className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  onClick={handleSubmit}
                >
                  Zatwierdź i zakończ
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
