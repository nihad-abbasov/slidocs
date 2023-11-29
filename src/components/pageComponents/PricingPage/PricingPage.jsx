"use client";

import { pricingPeriodBtns, pricingData } from "../../../../db";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PricingCard } from "./PricingCard";
import { PricingPeriodBtns } from "./PricingPeriodBtns";

export const PricingPage = () => {
  const [selectedButtonId, setSelectedButtonId] = useState(1);

  const handleBtnSelect = (btnId) => {
    setSelectedButtonId(btnId);
  };

  const formatPrice = (price) => {
    return typeof price === "number" ? `$${price.toLocaleString()}` : price;
  };

  return (
    <section className="willFadeIn w-full flex flex-col items-center justify-between">
      <h1 className="text-4xl font-bold text-center tracking-wide leading-7 text-black dark:text-white mb-[8%] lg:mb-[3%]">
        Choose your right plan!
      </h1>
      <article className="flex flex-col items-center justify-between mb-[8%] lg:mb-[3%]">
        <p className="text-sm font-light text-center text-gray-400 dark:text-gray-200 mb-1">
          Select from best plans, ensuring a perfect match. Need more or less?
        </p>
        <p className="text-sm font-light text-center text-gray-400 dark:text-gray-200 mb-1">
          Customize your subscription for a seamless fit!
        </p>
      </article>

      <PricingPeriodBtns
        pricingPeriodBtns={pricingPeriodBtns}
        selectedButtonId={selectedButtonId}
        handleBtnSelect={handleBtnSelect}
      />

      <div className="price_cards_section">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pricingData?.map((card) => {
            const selectedPricePeriod =
              selectedButtonId === 1 ? "monthly" : "anually";

            const isPremiumType = card.name == "Pro" || card.name == "Pro Plus";
            return (
              <PricingCard
                key={card.id}
                card={card}
                isPremiumType={isPremiumType}
                formatPrice={formatPrice}
                selectedPricePeriod={selectedPricePeriod}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};
