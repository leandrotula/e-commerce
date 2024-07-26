import Navbar from "./components/navbar/navbar.jsx";
import {ItemListContainer} from "./components/container/itemlistcontainer.jsx";

function App() {
  return (
      <>
        <Navbar />
          <ItemListContainer testValue="FROM PARENT TESTING PASSING VALUE"></ItemListContainer>
      </>

  );
}

export default App;

