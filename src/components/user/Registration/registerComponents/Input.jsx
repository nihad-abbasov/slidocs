export const Input = ({ inputData }) => {
  return (
    <div className="input_wrapper w-full flex- flex-col items-start">
      <label
        className="text-sm pl-1 text-black dark:text-white"
        htmlFor={inputData.name}
      >
        {inputData.name}
      </label>
      <input
        required
        id={inputData.name}
        name={inputData.name}
        type={inputData.type}
        placeholder={inputData.placeholder}
        className="w-full mb-[12px] mx-auto px-5 py-3  text-sm rounded-xl outline-none !bg-inherit border border-[#cccccc] focus:border focus:border-[#6922F0] dark:focus:border-pink-600 focus:duration-200 duration-200 text-black dark:text-white"
        // style={{ WebkitTextSecurity: "square" }}
      />
    </div>
  );
};
