import LayoutTransition from "@/components/layout-transition";
import Navigation from "@/components/nav";
import Script from "next/script";
import type { FC, PropsWithChildren } from "react";

const NavigationLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <>
      <Navigation />
      <LayoutTransition>{children}</LayoutTransition>
      <Script
        src="https://hartaithan.github.io/portfolio-background/init.iife.js"
        strategy="lazyOnload"
      />
    </>
  );
};

export default NavigationLayout;
