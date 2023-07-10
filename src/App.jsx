import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header title="Module 6 Assignment" />
      <Content />
      <Footer
        fullName="Shahriar Shakil"
        occupation="Web Developer"
        favoriteQuote="Whoever saves one life, saves the world entire. —Itzhak Stern"
      />
    </div>
  );
}

export default App;
