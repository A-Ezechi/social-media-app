import './App.css';
import Content from './Content';
import Header from './Header';
import { ContextProvider } from './Context';
import UsersProvider from './API/FetchData';
import { StateProvider } from './Contexts/StateContext';

function App() {

  return (
      <ContextProvider>
        <UsersProvider>
        <StateProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
        </StateProvider>
        </UsersProvider>
      </ContextProvider>
  );
}

export default App;
