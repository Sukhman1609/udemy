// import logo from './logo.svg';
import './App.css';
import RouteCompo from './Project/RouteComp';
import { CartProvider } from './Project/Cart/CartContext';
// import ContextAPI from './Project/ContextAPI';

function App() {
  return (
    <div >
      <CartProvider>
      <RouteCompo/>
      {/* <ContextAPI/> */}
      </CartProvider>
    </div>
  );
}

export default App;
