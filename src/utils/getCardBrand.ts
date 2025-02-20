import MasterCardImage from "../assets/Mastercard.png";
import VisaImage from "../assets/Visa.png";
import { CARD_BRAND } from "../constants/setting";

export const getCardBrandImage = (cardNumbers: string[]) => {
  const cardBrandNumber = Math.floor(Number(cardNumbers[0]) / 100);

  if (cardBrandNumber >= CARD_BRAND.MASTERCARD.MIN_NUMBER && cardBrandNumber <= CARD_BRAND.MASTERCARD.MAX_NUMBER) {
    return MasterCardImage;
  } else if (cardBrandNumber >= CARD_BRAND.VISA.MIN_NUMBER && cardBrandNumber <= CARD_BRAND.VISA.MAX_NUMBER) {
    return VisaImage;
  }
};
