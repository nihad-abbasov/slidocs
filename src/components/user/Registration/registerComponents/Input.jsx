export const Input = ({ inputData }) => {
  return (
    <div className="input_wrapper w-full flex- flex-col items-start">
      <label className="text-sm pl-1" htmlFor={inputData.name}>
        {inputData.name}
      </label>
      <input
        required
        id={inputData.name}
        name={inputData.name}
        type={inputData.type}
        placeholder={inputData.placeholder}
        className="w-full mb-[10px] mx-auto px-5 py-3 text-black text-sm rounded-xl outline-none !bg-inherit border border-[#cccccc] focus:border focus:border-[#6922F0] focus:duration-200"
        // style={{ WebkitTextSecurity: "square" }}
      />
    </div>
  );
};
