import { Navbar } from "../src/component";
import { Main } from "./Pages"

function App() {
  return (
    <div className="App" style={{
      margin : 0,
      fontFamily : 'Poppins'
    }}>
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;
