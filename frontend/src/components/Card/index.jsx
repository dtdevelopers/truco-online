import React, {useMemo} from 'react';
import cardBack from '../../assets/card.png';
import cardBackHoriz from '../../assets/cardHoriz.png';

const Card = ({card, handleIcon, isRevealed, vertical}) => {
  const cardClasses = useMemo(() => {
    let className =
      'flex flex-col justify-between bg-white rounded-lg shadow-[5px_3px_8px_rgb(0,0,0)] p-2 h-[80px] w-[60px] sm:h-[110px] sm:w-[80px]';
    if (card.suit === 's' || card.suit === 'c') {
      className = className.concat(` text-black`);
    } else {
      className = className.concat(` text-red-500`);
    }
    return className;
  }, [card]);

  return isRevealed ? (
    <div className={cardClasses}>
      <b className="text-left">{card.nr}</b>
      <div className="flex w-full justify-center">
        {React.createElement(handleIcon(card.suit), {size: 40}, null)}
      </div>
      <div />
    </div>
  ) : (
    <img
      className={`rounded ${
        vertical ? 'h-[80px] w-[50px] sm:h-[110px] sm:w-[80px] shadow-[5px_3px_8px_rgb(0,0,0)]' 
            : 'w-[80px] h-[50px] sm:h-[80px] sm:w-[110px] shadow-[3px_5px_8px_rgb(0,0,0)]'
      }`}
      src={vertical ? cardBack : cardBackHoriz}
      alt={'card'}
    />
  );
};

export default Card;
