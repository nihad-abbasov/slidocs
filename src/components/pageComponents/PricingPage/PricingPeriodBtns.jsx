export const PricingPeriodBtns = ({ pricingPeriodBtns, selectedButtonId, handleBtnSelect }) => {
  return (
    <div className="price_period_tabs bg-white p-2 rounded-lg w-full md:w-full lg:w-1/2 mx-auto mb-[5%]">
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-4">
        {pricingPeriodBtns?.map((btn) => {
          return (
            <li
              key={btn.id}
              onClick={() => handleBtnSelect(btn.id)}
              className={`flex justify-center items-center text-center p-3 cursor-pointer transition duration-300 ease-in-out rounded-lg ${
                selectedButtonId === btn.id
                  ? "bg-purple-500 text-white"
                  : "bg-transparent text-black hover:bg-purple-100"
              }`}
              style={{ textWrap: "balance" }}
            >
              {btn.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
