import { CarouselLauched } from "./components/CarouselLauched";
import { HeaderMenu } from "./components/HeaderMenu";
import { ContainerTitles } from "./components/HeaderMenu/styles";
import { GlobalStyle } from "./styles/global";


function App() {
  return (
    <>
      <HeaderMenu />
      <ContainerTitles>
        <h1>LANÇAMENTOS</h1>
      </ContainerTitles>
      <CarouselLauched />
      <ContainerTitles>
        <h1>OFERTAS DO DIA</h1>
      </ContainerTitles>
      <ContainerTitles>
        <h1>NOSSOS PRODUTOS</h1>
      </ContainerTitles>
      <GlobalStyle />
    </>
  );
}

export default App;
