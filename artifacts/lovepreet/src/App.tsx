import { Switch, Route, Router as WouterRouter } from "wouter";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Make from "@/pages/Make";
import NotFound from "@/pages/not-found";

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
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Nav />
      <Router />
      <Footer />
    </WouterRouter>
  );
}

export default App;
