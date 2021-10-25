import { useState } from 'react';
import { StyledCard } from '../styled-components/Card';

const imagePath =
  'https://a-static.mlcdn.com.br/1500x1500/notebook-samsung-book-np550xda-kt2br-intel-core-i3-4gb-1tb-156-full-hd-led-windows-10/magazineluiza/228721400/2e51fce7ae575bab32ea4b5866b2de2b.jpg';

function Card() {
  const [offerClicked, setOfferClicked] = useState(false);

  const handleClick = () => {
    setOfferClicked(!offerClicked);
  };

  console.log(offerClicked);

  return (
    <StyledCard>
      <img src={imagePath} alt='' />
      <div>
        <p>
          <span>R$ 100.00</span> / <span>R$ 52.35</span>
        </p>
        <p>Notebook Lenovo Semi-novo</p>
        {/* <div> */}
          <input type='text' placeholder='Lance' />
          <button type='button' onClick={handleClick}>
            OFERTAR
          </button>
        {/* </div> */}
      </div>
    </StyledCard>
  );
}

export default Card;
