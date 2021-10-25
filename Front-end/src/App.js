import Products from './components/products';
import { GlobalStyle } from './styled-components/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <h1> Leilão de centavos R$</h1>
        <Products />
      </div>
    </>
  );
}

export default App;
