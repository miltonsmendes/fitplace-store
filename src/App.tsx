import { BuyCart } from "./components/BuyCart";
import { CarouselLauched } from "./components/CarouselLauched";
import { HeaderMenu } from "./components/HeaderMenu";
import { ContainerTitles } from "./components/HeaderMenu/styles";
import { ResponsiveMenu } from "./components/ResponsiveMenu";
import { ListItems } from "./components/ListItems";
import { Footer } from "./components/Footer";

import { GlobalStyle } from "./styles/global";


function App() {
  return (
    <>
      <ResponsiveMenu />
      {/* <ListItems /> */}
      <BuyCart />

      <Footer />

      <GlobalStyle />
    </>
  );
}

export default App;
