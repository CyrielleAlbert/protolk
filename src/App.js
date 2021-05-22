import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Store from './Store';
import {RoomStore} from './Components/room'

function App() {
  return (
    <Provider store={Store}>
      <RoomStore />
    </Provider>
  );
}

export default App;
