import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center p-5">
      <FontAwesomeIcon icon={faSpinner} spin size="2x" className="text-light" />
    </div>
  );
}
