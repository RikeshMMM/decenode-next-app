import Image from "next/image";

const USPCard = ({ image, title, text }) => {
  return (
    <div className="usp-card m-3">
      <Image
        src={image}
        alt={title}
        width={360}
        height={360}
        quality={90}
      />
      <h3 className="fw-bold text-light">{title}</h3>
      <p className="text-light">{text}</p>
    </div>
  );
};

export default USPCard;
