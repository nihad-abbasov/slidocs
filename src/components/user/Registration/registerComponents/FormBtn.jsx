export const FormBtn = ({ children }) => {
  return (
    <button className="w-full bg-purple-600 text-white text-base font-medium text-center rounded-xl mb-3 p-3 hover:bg-purple-700 transition duration-200">
      {children}
    </button>
  );
};
