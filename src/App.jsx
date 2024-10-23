import './App.css';
import Content from './Content';
import Header from './Header';
import { ContextProvider } from './Context';
import UsersProvider from './API/FetchData';
import { StateProvider } from './Contexts/StateContext';
import FetchLinkedAccountsProvider from './API/FetchLinkedAccounts';

function App() {

  return (
      <ContextProvider>
        <FetchLinkedAccountsProvider>
        <UsersProvider>
        <StateProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
        </StateProvider>
        </UsersProvider>
        </FetchLinkedAccountsProvider>
      </ContextProvider>
  );
}

export default App;
