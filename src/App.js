import './App.css';
import Content from './Content';
import Header from './Header';
// import { ContextProvider } from './Context';

function App() {

  return (
    // <ContextProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    // {/* </ContextProvider> */}
  );
}

export default App;
