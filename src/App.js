import Header from "./layout/Header";
import RTL from "./theme/RTL";
function App() {
  return (
    <div className="App">
      <RTL>
        <Header />
      </RTL>
    </div>
  );
}

export default App;
