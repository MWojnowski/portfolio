import { useState } from "react";
import { motion } from "framer-motion";
import "./carousel.scss";

const Carousel = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );
      return updatedIndexes;
    });
  };

  const contents = [
    { content: '\"Lorem ipsum...\"', author: 'John Doe' },
    { content: '\"Lorem ipsum...\"', author: 'Jane Smith' },
    { content:  '\"Lorem ipsum...\"', author: 'Mike Brown' },
    { content: '\"Lorem ipsum...\"', author: 'Alice Jones' },
    { content:  '\"Lorem ipsum...\"', author: 'Peter Lee' },
  ];

  const positions = ["center", "left1", "left", "right", "right1"];

  const contentVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <div className="flex items-center flex-col justify-center bg-black h-screen carousel">
      {contents.map((item, index) => (
        <motion.div 
          key={index}
          className="rounded-[12px] bg-gray-200 text-center py-4 px-6 reviews" // Adjust styles as needed
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={contentVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position: "absolute" }}
        >
          <p>{item.content}</p><br />
          <h4 className="text-sm text-gray-600"> ~ {item.author}</h4>
        </motion.div>
      ))}
      <div className="flex flex-row gap-3 buttons">
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;