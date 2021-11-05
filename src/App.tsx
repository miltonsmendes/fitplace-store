import { NewBuyCart } from "./components/NewBuyCart";
import { ResponsiveMenu } from "./components/ResponsiveMenu";
import { ListItems } from "./components/ListItems";
import { Footer } from "./components/Footer";

import { GlobalStyle } from "./styles/global";
import { CartModalProvider } from "./hooks/useCartModal";

function App() {


  return (
    <CartModalProvider>
      <ResponsiveMenu />
      <ListItems />
      <NewBuyCart />
      <Footer />


      <GlobalStyle />
    </CartModalProvider>
  );
}

export default App;
