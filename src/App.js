import { Provider } from 'react-redux';
import './App.css';
import DashBoard from './components/DashBoard';

import store from './redux/store';

function App() {
  return (
   
       <Provider store={store}>
           <div className="container">
         
               <DashBoard />
           </div>
       </Provider>
    
  );
}

export default App;
