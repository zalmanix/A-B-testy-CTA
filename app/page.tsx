import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold pt-10">Czym się zajmujemy</h1>

      <p className="text-lg text-slate-300 pb-10">
        FixIT to firma specjalizująca się w serwisie i sprzedaży sprzętu
        komputerowego. Oferujemy kompleksowe usługi naprawy komputerów,
        laptopów, a także akcesoriów elektronicznych, zapewniając wysoką jakość
        i szybki czas realizacji. Nasz wykwalifikowany zespół techników jest
        gotowy pomóc zarówno klientom indywidualnym, jak i firmom, dbając o to,
        aby każdy sprzęt działał sprawnie i bez zakłóceń. Oprócz serwisu, w
        naszym sklepie znajdziesz szeroki wybór komputerów, laptopów i
        podzespołów, idealnych dla różnych potrzeb - od codziennego użytku po
        wymagające zadania biznesowe.
      </p>

      <div className="flex w-full justify-start mb-10">
        <Image src="/images/1.png" alt="Banner" width={900} height={2000} />
      </div>

      <h1 className="text-3xl font-bold pt-10">
        Dostępność naszego asortymentu
      </h1>

      <p className="text-lg text-slate-300 pb-10">
        W FixIT dbamy o to, aby nasz asortyment był zawsze dostępny i odpowiadał
        na potrzeby naszych klientów. Regularnie uzupełniamy stany magazynowe,
        aby zapewnić szeroki wybór najnowszych modeli komputerów, laptopów oraz
        akcesoriów. Dzięki współpracy z renomowanymi dostawcami, jesteśmy w
        stanie szybko sprowadzić produkty, które cieszą się dużym
        zainteresowaniem. Kupując u nas, masz pewność, że otrzymasz sprzęt
        najwyższej jakości w krótkim czasie.
      </p>

      <div className="flex w-full justify-end">
        <Image src="/images/2.png" alt="Banner" width={900} height={2000} />
      </div>

      <section className="flex flex-col md:flex-row items-center justify-center gap-8 py-12 px-8 bg-[#1a1e28] max-w-[1200px] mx-auto">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/expert.webp"
            alt="Consultation Expert"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-white">
            Umów się na darmową konsultację z naszym ekspertem
          </h2>
          <p className="text-gray-400">
            Nasz ekspert jest gotowy odpowiedzieć na wszystkie Twoje pytania
            dotyczące serwisu i sprzętu komputerowego. Skorzystaj z darmowej
            konsultacji i dowiedz się, jak możemy pomóc.
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Twoje imię"
              className="p-3 bg-[#2a2f3d] text-white border border-gray-600 rounded"
              required
            />
            <input
              type="email"
              placeholder="Twój email"
              className="p-3 bg-[#2a2f3d] text-white border border-gray-600 rounded"
              required
            />
            <textarea
              placeholder="Wiadomość"
              className="p-3 bg-[#2a2f3d] text-white border border-gray-600 rounded"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-200"
            >
              Wyślij zapytanie
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
