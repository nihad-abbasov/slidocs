import Link from "next/link";

export const PricingCard = ({
  card,
  isPremiumType,
  formatPrice,
  selectedPricePeriod,
}) => {
  return (
    <li
      className={`fadeIn flex flex-col justify-between relative rounded-2xl shadow-lg p-6 transition duration-500 hover:shadow-2xl md:hover:scale-105 ease-in-out cursor-pointer min-h-[500px] lg:min-h-[600px] ${
        card.name == "Custom" ? "bg-purple-100" : "bg-white"
      }`}
      style={{ animation: `${card.id}s childrenEachFade` }}
    >
      <Link href="/pricing" className="absolute w-full h-full z-10"></Link>
      <h3
        className={`w-max text-xl font-semibold py-2 px-4 mb-4 rounded-xl ${
          isPremiumType
            ? "bg-purple-600 bg-opacity-75 text-white"
            : "bg-white text-black"
        }`}
      >
        {card.name}
      </h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">
          {formatPrice(card.pricePeriods[selectedPricePeriod].rate)}
        </span>
        {isPremiumType && (
          <span className="text-lg">/ {selectedPricePeriod}</span>
        )}
      </div>
      <ul className="mb-6">
        {card?.pricePeriods[selectedPricePeriod]?.features?.map(
          (feature, index) => (
            <li key={index} className="flex items-center space-x-2 mb-2">
              <span className="text-green-500">✓</span>
              <span className="truncate">{feature}</span>
            </li>
          )
        )}
      </ul>
      <button
        className={`w-full text-white py-2 rounded-lg  transition duration-300 z-20 ${
          isPremiumType
            ? "bg-purple-500 hover:bg-purple-600"
            : "bg-purple-800 hover:bg-purple-900"
        }  `}
      >
        {isPremiumType ? "Get started" : "Book a call"}
      </button>
    </li>
  );
};
