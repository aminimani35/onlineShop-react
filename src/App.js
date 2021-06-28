import Footer from "./layout/Footer";
import Header from "./layout/Header";
import RTL from "./theme/RTL";
function App() {
  return (
    <div className="App">
      <RTL>
        <Header />
        <Footer />
      </RTL>
    </div>
  );
}

export default App;
