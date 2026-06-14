import { useEffect } from 'react'
import { Switch, Route, Router as WouterRouter } from "wouter";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { InquiryProvider } from "@/components/InquiryContext";
import { InquiryDrawer } from "@/components/InquiryDrawer";
import { StickyMobileCTA } from "@/components/home/StickyMobileCTA";
import Home from "@/pages/Home";
import Make from "@/pages/Make";
import NotFound from "@/pages/not-found";
import Lenis from "lenis";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/make" component={Make} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <InquiryProvider>
        <Nav />
        <Router />
        <Footer />
        <InquiryDrawer />
        <StickyMobileCTA />
      </InquiryProvider>
    </WouterRouter>
  );
}

export default App;
