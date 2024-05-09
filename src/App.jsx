import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
import { CartButtonPositionProvider } from '@/shared/hooks/cartBtnPositionContext';

const App = () => {
  return (
    <BrowserRouter>
      <CartButtonPositionProvider>
        <Router />
      </CartButtonPositionProvider>
    </BrowserRouter>
  )
}

export default App