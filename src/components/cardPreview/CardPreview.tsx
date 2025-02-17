import { useEffect, useState } from "react";
import { CardInfo } from "../../types/type";
import * as Styled from "./CardPreview.styled";
import MasterCardImage from "../../assets/Mastercard.png";
import VisaImage from "../../assets/Visa.png";
import CardNumbers from "../cardNumbers/CardNumbers";
import CardExpiration from "../cardExpiration/CardExpiration";
import { CARD_BRANDS } from "../../constants/setting";

export interface CardPreviewProps {
  cardInfo: CardInfo;
}

const CardPreview = ({ cardInfo }: CardPreviewProps) => {
  const [cardBrand, setCardBrand] = useState("");

  useEffect(() => {
    const IIN = Math.floor(cardInfo.cardNumbers[0] / 100);

    if (IIN >= CARD_BRANDS.MASTERCARD.MIN_NUMBER && IIN <= CARD_BRANDS.MASTERCARD.MAX_NUMBER) {
      setCardBrand(CARD_BRANDS.MASTERCARD.NAME);
    } else if (IIN >= CARD_BRANDS.VISA.MIN_NUMBER && IIN <= CARD_BRANDS.VISA.MAX_NUMBER) {
      setCardBrand(CARD_BRANDS.VISA.NAME);
    } else {
      setCardBrand("");
    }
  }, [cardInfo.cardNumbers]);

  const getCardBrandImage = () => {
    switch (cardBrand) {
      case CARD_BRANDS.MASTERCARD.NAME:
        return MasterCardImage;
      case CARD_BRANDS.VISA.NAME:
        return VisaImage;
      default:
        return "";
    }
  };

  return (
    <Styled.CardPreviewContainer>
      <Styled.ChipSection>
        <Styled.ICChip></Styled.ICChip>
        {cardBrand && (
          <Styled.CardBrand>
            <img
              src={getCardBrandImage()}
              alt={cardBrand}
            />
          </Styled.CardBrand>
        )}
      </Styled.ChipSection>
      <Styled.CardInfoSection>
        <CardNumbers cardNumbers={cardInfo.cardNumbers} />
        <CardExpiration
          month={cardInfo.cardExpiration[0]}
          year={cardInfo.cardExpiration[1]}
        />
        <div>{cardInfo.userName && cardInfo.userName}</div>
      </Styled.CardInfoSection>
    </Styled.CardPreviewContainer>
  );
};

export default CardPreview;
