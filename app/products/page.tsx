import React from "react";

const productsData = [
  {
    title: "Laptop Gamingowy",
    description:
      "Wysokowydajny laptop gamingowy wyposażony w najnowsze procesory Intel i karty graficzne NVIDIA RTX. Dzięki matrycy o wysokiej częstotliwości odświeżania oraz nowoczesnemu układowi chłodzenia, ten laptop zapewnia płynność gier i komfort pracy przez wiele godzin. Idealny dla graczy oraz użytkowników potrzebujących przenośnej, ale potężnej maszyny.",
    image: "/images/products/gaming-laptop.jpg",
  },
  {
    title: "Monitor 4K UHD",
    description:
      "Nowoczesny monitor 4K UHD o przekątnej 27 cali z technologią HDR i wysokim pokryciem przestrzeni barw (99% sRGB). Dzięki ultracienkim ramkom doskonale nadaje się do pracy biurowej, edycji zdjęć, projektowania graficznego oraz rozrywki. Dodatkowo posiada funkcję regulacji wysokości i tryb ochrony wzroku.",
    image: "/images/products/monitor.png",
  },
  {
    title: "Klawiatura Mechaniczna RGB",
    description:
      "Klawiatura mechaniczna z przełącznikami Cherry MX, która zapewnia precyzję i wytrzymałość. Dzięki pełnemu podświetleniu RGB oraz możliwości programowania klawiszy, jest to idealny wybór dla graczy oraz osób poszukujących komfortowego rozwiązania do pracy. Solidna metalowa obudowa zwiększa trwałość.",
    image: "/images/products/klawiatura.jpg",
  },
  {
    title: "Dysk SSD NVMe 1TB",
    description:
      "Ultraszybki dysk SSD NVMe o pojemności 1TB zapewniający błyskawiczne ładowanie systemu i aplikacji. Doskonały do modernizacji starszych komputerów lub jako dodatkowa pamięć w nowoczesnych zestawach. Dzięki technologii PCIe Gen4 osiąga prędkości odczytu na poziomie 7000 MB/s.",
    image: "/images/products/ssd.webp",
  },
  {
    title: "Zestaw Słuchawek Bezprzewodowych",
    description:
      "Stylowe słuchawki bezprzewodowe z technologią redukcji szumów i dźwiękiem wysokiej jakości. Dzięki ergonomicznemu kształtowi i długiemu czasowi pracy na baterii (do 30 godzin), są idealnym rozwiązaniem dla osób ceniących komfort i mobilność. Dodatkowo obsługują szybkie ładowanie.",
    image: "/images/products/słuchawki.webp",
  },
];

export default function ProductsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Nasze produkty</h1>

      <div className="flex flex-col gap-12">
        {productsData.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } gap-8 bg-[#0f2031] shadow-lg rounded-lg p-6`}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full md:w-1/2 h-60 object-cover rounded-lg"
            />

            <div className="flex flex-col text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                {product.title}
              </h2>
              <p className="text-gray-300">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
