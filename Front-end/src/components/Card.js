import { useState } from 'react';
import { StyledCard } from '../styled-components/Card';

const imagePath =
  'https://a-static.mlcdn.com.br/1500x1500/notebook-samsung-book-np550xda-kt2br-intel-core-i3-4gb-1tb-156-full-hd-led-windows-10/magazineluiza/228721400/2e51fce7ae575bab32ea4b5866b2de2b.jpg';

function Card() {
  const [offerClicked, setOfferClicked] = useState(false);
  const [lance, setLance] = useState('');

  const handleClick = () => {
    setOfferClicked(!offerClicked);
  };

  console.log(lance);

  return (
    <StyledCard offerClicked={offerClicked}>
      <img src={imagePath} alt='' />
      <div>
        <p>
          <span>R$ 100.00</span> / <span>R$ 52.35</span>
        </p>
        <p>Notebook Lenovo Semi-novo</p>
        <div>
          <button type='button' onClick={handleClick}>
            {offerClicked ? 'Ok' : 'OFERTAR'}
          </button>
          {offerClicked && (
            <input
              type='text'
              placeholder='Lance'
              onChange={({ target: { value } }) => setLance(value)}
            />
          )}
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
