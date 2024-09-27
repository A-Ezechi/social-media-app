import './App.css';
import Content from './Content';
import Header from './Header';
import { ContextProvider } from './Context';
import UsersProvider from './API/FetchData';

function App() {

  return (
    <ContextProvider>
      <UsersProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
      </UsersProvider>
    </ContextProvider>
  );
}

export default App;
