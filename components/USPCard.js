import FadeInWhenVisible from "./FadeInWhenVisible";
import RevealWhenVisible from "./RevealWhenVisible";

import Image from "next/image";

const USPCard = ({ image, title, text }) => {
  return (
    <div className="usp-card m-3">
      <RevealWhenVisible>
        <Image src={image} alt={title} width={360} height={360} quality={90} />
      </RevealWhenVisible>
      <RevealWhenVisible>
        <h3 className="fw-bold text-light">{title}</h3>
      </RevealWhenVisible>
      <FadeInWhenVisible>
        <p className="text-light">{text}</p>
      </FadeInWhenVisible>
    </div>
  );
};

export default USPCard;