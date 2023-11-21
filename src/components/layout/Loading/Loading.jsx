"use client";

export const Loading = () => {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="block relative w-full h-[400px] mx-auto tracking-[0.5px] ">
        <style jsx>
          {`
            .spinner::after {
              content: "";
              box-sizing: border-box;
              width: 40px;
              height: 40px;
              position: absolute;
              top: calc(50% - 20px);
              left: calc(50% - 20px);
              border-radius: 50%;
              border-top: 4px solid rgb(0, 127, 219);
              border-left: 4px solid rgba(0, 127, 219, 1);
              border-right: 4px solid rgba(0, 127, 219, 0);
              animation: spinner 0.6s linear infinite;
            }

            @keyframes spinner {
              to {
                transform: rotate(360deg);
              }
            }
          `}
        </style>
        <span className="spinner"></span>
      </div>
    </section>
  );
};
