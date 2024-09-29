import './App.css';
import Content from './Content';
import Header from './Header';
import { ContextProvider } from './Context';
import UsersProvider from './API/FetchData';
import FilteredUsersProvider from './Components/FilteredUsers';

function App() {

  return (
    <FilteredUsersProvider>
      <ContextProvider>
        <UsersProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
        </UsersProvider>
      </ContextProvider>
    </FilteredUsersProvider>
  );
}

export default App;
