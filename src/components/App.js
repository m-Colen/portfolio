import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", appHeight);
  appHeight();

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
