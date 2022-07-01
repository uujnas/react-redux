import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';

store.subscribe(()=> console.log(store.getState()))

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
      <CakeContainer />  
      </Provider>
    </div>
  );
}

export default App;
