import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
// import PhoneSection from "./components/PhoneSection";
import Roadmap from "./components/Roadmap";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import { Switch, Route } from "react-router-dom";
import "./App.css";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Section
        title="Why Deqree"
        subtitle="The future is digital. We are ensuring your credentials stay secure."
        points={[
          {
            title: "Rapid Onboarding process",
            desc: `Stamp up to 200 certificates on Cardano's blockchain in a single transaction.
           `,
          },
          {
            title: "Cost Effective",
            desc: `Cost-efficient than other conventional methods and blockchain solutions.
            `,
          },
          {
            title: "Instant Validation",
            desc: `Validate your credentials within seconds on a brink of a click.`,
          },
          {
            title: "Built on third generation Blockchain",
            desc: `
          Deqree is built on Cardano which is rigorously tested and a peer-reviewed robust third-gen blockchain.`,
          },
          {
            title: "Supports Smart Contracts",
            desc: `Supports Plutus smart contracts for use cases such as degree revocation. `,
          },
          {
            title: "Secured by Cardano",
            desc: `Cardano is built on Haskell which insures high assurance code unlike others, leaves no room for error.`,
          },
        ]}
      />
      <Roadmap />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
