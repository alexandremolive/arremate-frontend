import React from 'react';
import Card from './Card';
import { ContainerCards } from '../styled-components/ContainerCards';


function Products() {


  return (
    <div>
      <h1>Produtos</h1>
      <ContainerCards>
        <Card />
      </ContainerCards>
    </div>
  );
}

export default Products;
