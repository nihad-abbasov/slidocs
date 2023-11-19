// import "./button_config/styles.module.css";
import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "./button_config/Shapes";
import { transition } from "./button_config/settings";
import useMeasure from "react-use-measure";

export default function App() {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <MotionConfig transition={transition}>
      <style jsx>
        {`
          body,
          html {
            overflow: hidden;
          }

          .shapes .container {
            position: absolute;
            top: -100px;
            bottom: -100px;
            left: -100px;
            right: -100px;
            width: calc(100% + 200px);
            pointer-events: none;
          }

          .default {
            display: block;
          }

          .number {
            padding: 20px 0;
            width: 88px;
            position: relative;
            transform: translateZ(0);
          }

          .number:before {
            content: "";
            position: absolute;
            left: 0;
            top: 1px;
            bottom: 1px;
            width: 1px;
            background-color: #35373f;
          }

          .current {
            color: #8a8d9b;
            opacity: 1;
            display: block;
          }

          .new {
            color: #fbfaaa;
            position: absolute;
            top: 20px;
            left: 0;
            right: 0;
            display: block;
          }

          .add {
            position: absolute;
            bottom: 100%;
            left: 0;
            right: 0;
            opacity: 0;
            transform: translateY(38px);
            pointer-events: none;
            color: #d0d0db;
            display: block;
          }

          html {
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
          }

          * {
            box-sizing: inherit;
          }

          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            min-height: 100vh;
            display: flex;
            font-family: "Inter", Arial;
            justify-content: center;
            align-items: center;
            background: #f4f5fa;
          }
        `}
      </style>
      <motion.button
        className="access_button appearance-none border-none cursor-pointer bg-[#acc7ed] text-white rounded-[60px] outline-none m-0 px-6 py-3 font-poppins text-2xl font-semibold leading-none -tracking-[1px] relative text-center flex items-center w-full"
        ref={ref}
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.5 },
          press: { scale: 1.4 },
        }}
        onHoverStart={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onHoverEnd={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => setIsPress(false)}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={(e) => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2);
          mouseY.set(e.clientY - bounds.y - bounds.height / 2);
        }}
      >
        <motion.div
          className="shapes absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] rounded-[60px] bg-gradient-to-r from-[#61dafb] via-[#d6cbf6] to-[#db07d1]"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
        >
          <div className="pink blush absolute bottom-[-15px] w-[100px] h-[30px] filter blur-[20px] right-5 bg-[#f2056f;]" />
          <div className="blue blush absolute bottom-[-15px] w-[100px] h-[30px] filter blur-[20px] left-5 bg-[#61dafb]" />
          <div className="container">
            <Suspense fallback={null}>
              <Shapes
                isHover={isHover}
                isPress={isPress}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </Suspense>
          </div>
        </motion.div>
        <motion.div
          variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
          className="label w-full py-5 px-4 font-bold z-10 transform-[translateZ(0)]"
        >
          Get Full Access for $39
        </motion.div>
      </motion.button>
    </MotionConfig>
  );
}
