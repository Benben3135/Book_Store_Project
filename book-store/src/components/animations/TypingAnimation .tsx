import { motion } from "framer-motion";
import { FC } from "react";

interface TypingAnimationProps {
  text: string;
  highlightedText?: string;
}

const TypingAnimation: FC<TypingAnimationProps> = ({
  text,
  highlightedText,
}) => {
  const typingVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.1 },
    }),
  };

  const renderText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial="hidden"
        animate="visible"
        variants={typingVariants}
        custom={index}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <h1 className="font-sans antialiased text-3xl font-bold tracking-tight text-primary sm:text-5xl text-center">
      {renderText(text)}
      {highlightedText && (
        <span className="text-blue-500">
          {renderText(highlightedText)}
        </span>
      )}
    </h1>
  );
};

export default TypingAnimation;
