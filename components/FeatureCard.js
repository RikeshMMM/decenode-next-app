import FadeInWhenVisible from "./FadeInWhenVisible";
import RevealWhenVisible from "./RevealWhenVisible";

import Image from "next/image";

const FeatureCard = ({ image, title, desc }) => {
  return (
    <div className="feature-card text-start bg-primary rounded shadow">
      <div className="row row-cols-2 align-items-center justify-content-center p-3">
        <div className="col-5">
          <RevealWhenVisible>
            <Image
              src={image}
              alt={title}
              width={360}
              height={360}
              quality={90}
            />
          </RevealWhenVisible>
        </div>
        <div className="col-7">
          <RevealWhenVisible>
            <h3 className="text-light fw-bold h4 my-3">{title}</h3>
          </RevealWhenVisible>
          <FadeInWhenVisible>
            <p className="text-light">{desc}</p>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;