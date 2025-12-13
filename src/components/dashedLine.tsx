import { motion } from "framer-motion";

const DashedLine = (start: any, end: any) => {
  return (
    <div className="mt-3 w-full flex justify-center">
      <motion.svg
        width="100%"
        height="100%" // Make the SVG take the full height of the container
        viewBox="0 0 100 1" // Make sure the viewBox fits the full width of the container
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.line
          x1="0"
          y1="0.5" // Center the line vertically within the container
          x2="100"
          y2="0.5"
          stroke="black"
          strokeWidth="0.1"
          strokeDasharray="0.5" // Dashed effect
          strokeLinecap="round"
          initial={{ strokeDashoffset: start }} // Start with the line hidden
          animate={{ strokeDashoffset: end }} // Animate it to the visible line
          transition={{
            strokeDashoffset: {
              duration: 24, // Constant duration for each loop
              ease: "linear", // Constant speed
              repeat: Infinity, // Infinite loop
              repeatType: "loop", // Loop the animation
            },
          }}
        />
      </motion.svg>
    </div>
  );
};

export default DashedLine;
