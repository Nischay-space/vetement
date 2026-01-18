import{Route,Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";
import { AuthLogin } from "./pages/AuthLogin";

function App() {
  return (
  <>
 
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/auth/login" element={<AuthLogin />} />

  </Routes>
  </>
  );
}

export default App;
