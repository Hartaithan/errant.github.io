"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import type { FC, PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import FrozenRouter from "@/components/frozen-router";

const animation: HTMLMotionProps<"main"> = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const LayoutTransition: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const path = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={path}
        className="flex size-full flex-col items-center justify-center"
        {...animation}>
        <FrozenRouter>{children}</FrozenRouter>
      </motion.main>
    </AnimatePresence>
  );
};

export default LayoutTransition;
