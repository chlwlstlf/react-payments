import { useRef } from "react";
import { Group } from "three";
import { Canvas } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";
import { Html } from "@react-three/drei";

import * as Styled from "./CardPreview.styled";
import CardNumbers from "../cardNumbers/CardNumbers";
import CardExpiration from "../cardExpiration/CardExpiration";
import { CardCompany } from "../../../types/type";
import { getCardBrandImage } from "../../../utils/getCardBrand";

export interface CardPreviewProps {
  isCardFlipped: boolean;
  cvc: string;
  userName: string;
  cardExpiration: string[];
  cardCompany: CardCompany;
  cardNumbers: string[];
}

const CardPreview = ({ isCardFlipped, cvc, userName, cardExpiration, cardCompany, cardNumbers }: CardPreviewProps) => {
  const cardBrandImage = getCardBrandImage(cardNumbers);
  const cardRef = useRef<Group | null>(null);

  const { rotationY } = useSpring({
    rotationY: isCardFlipped ? Math.PI : 0,
    config: { mass: 1, tension: 30, friction: 10 },
  });

  return (
    <Canvas
      style={{ width: "375px", height: "300px" }}
      camera={{ position: [0, 0, 5] }}
    >
      {/* 조명 설정 */}
      <ambientLight intensity={0.6} />
      <directionalLight
        intensity={0.5}
        position={[0, 7, 5]}
      />

      {/* 3D 카드 */}
      <a.group
        ref={cardRef}
        rotation-y={rotationY}
      >
        {/* 카드 앞면 */}
        <mesh position={[0, 0.5, 0.01]}>
          <planeGeometry args={[3.5, 2]} />
          <meshStandardMaterial />
          <Html transform>
            <Styled.FrontCard cardCompany={cardCompany}>
              <Styled.ChipSection>
                <Styled.ICChip />
                {cardBrandImage && (
                  <Styled.CardBrand>
                    <img
                      src={cardBrandImage}
                      alt="카드 브랜드 이미지"
                    />
                  </Styled.CardBrand>
                )}
              </Styled.ChipSection>
              <Styled.CardInfoSection>
                <CardNumbers cardNumbers={cardNumbers} />
                <CardExpiration
                  month={cardExpiration[0]}
                  year={cardExpiration[1]}
                />
                <div>{userName && userName}</div>
              </Styled.CardInfoSection>
            </Styled.FrontCard>
          </Html>
        </mesh>

        {/* 카드 뒷면 */}
        <mesh
          position={[0, 0.5, -0.01]}
          rotation-y={Math.PI}
        >
          <planeGeometry args={[3.5, 2]} />
          <meshStandardMaterial />
          <Html transform>
            <Styled.BackCard>
              <Styled.CVC>{cvc}</Styled.CVC>
            </Styled.BackCard>
          </Html>
        </mesh>
      </a.group>
    </Canvas>
  );
};

export default CardPreview;
