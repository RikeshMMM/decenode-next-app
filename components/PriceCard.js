import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PriceCard = ({ title, price, caption, desc1, desc2, desc3, btn }) => {
  return (
    <div className="card px-3 py-5 rounded-3 shadow h-100 w-100">
      <div className="card-body d-flex flex-column align-items-center justify-content-between">
        <h3 className="card-title display-6 fw-bold text-primary mb-3">{title}</h3>
        <h4>
          $<span className="display-4 fw-bold">{price}</span>/Month
        </h4>
        <h6 className="card-subtitle mb-3 text-muted">{caption}</h6>
        <ul className="card-text list-unstyled my-3">
          <li className="mb-3">
            <FontAwesomeIcon icon={faCheck} className="text-primary me-1" />
            {desc1}
          </li>
          <li className="mb-3">
            <FontAwesomeIcon icon={faCheck} className="text-primary me-1" />
            {desc2}
          </li>
          <li className="text-primary mb-3">
            <FontAwesomeIcon icon={faCheck} className="text-primary me-1" />
            {desc3}
          </li>
        </ul>
        <button type="button" className="btn btn-primary btn-lg text-white display-block shadow">
          {btn}
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
