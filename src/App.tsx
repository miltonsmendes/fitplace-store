import { BuyCart } from "./components/BuyCart";
import { CarouselLauched } from "./components/CarouselLauched";
import { HeaderMenu } from "./components/HeaderMenu";
import { ContainerTitles } from "./components/HeaderMenu/styles";
import { ResponsiveMenu } from "./components/ResponsiveMenu";
import { ListItems } from "./components/ListItems";

import { GlobalStyle } from "./styles/global";


function App() {
  return (
    <>
    {/* <Logo /> */}
    <ResponsiveMenu />
    <ListItems />
      {/* <BuyCart /> */}


      <GlobalStyle />
    </>
  );
}

export default App;
