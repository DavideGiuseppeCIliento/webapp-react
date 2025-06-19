import axios from "axios";
import { useState, useEffect } from "react";

// # IMPORT ROUTER
import { useParams } from "react-router-dom";

const formInitialData = {
  name: "",
  text: "",
  vote: "",
  policy_accepted: false,
};

export default function ReviewForm({ reloadReviews }) {
  const [formData, setFormData] = useState(formInitialData);
  const { id } = useParams();

  function handleFormSubmit(e) {
    e.preventDefault();
    // Chiamata Axios per ricaricare le reviews con le nuove
    axios
      .post(`http://localhost:3000/movies/${id}/review`, formData)
      .then((res) => {
        console.log("Recensione inviata!", res.data);
        setFormData(formInitialData);
        if (reloadReviews) reloadReviews();
      })
      .catch((err) => console.error(err));
  }

  function inputChange(e) {
    if (e.target.type === "checkbox") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row mb-3">
        <label htmlFor="inputName" className="col-sm-2 col-form-label">
          Nome
        </label>
        <div className="col-sm-10">
          <input
            name="name"
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Il tuo nome"
            value={formData.name}
            onChange={inputChange}
            required
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="inputText" className="col-sm-2 col-form-label">
          Recensione
        </label>
        <div className="col-sm-10">
          <textarea
            name="text"
            className="form-control"
            id="inputText"
            rows="4"
            placeholder="Scrivi la tua recensione..."
            value={formData.text}
            onChange={inputChange}
            required
          ></textarea>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="selectVote" className="col-sm-2 col-form-label">
          Voto
        </label>
        <div className="col-sm-10">
          <select
            name="vote"
            className="form-select"
            id="selectVote"
            value={formData.vote}
            onChange={inputChange}
            required
          >
            <option value="">Seleziona un voto</option>
            <option value="1">1 - Pessimo</option>
            <option value="2">2 - Scarso</option>
            <option value="3">3 - Discreto</option>
            <option value="4">4 - Buono</option>
            <option value="5">5 - Ottimo</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-10 offset-sm-2">
          <div className="form-check">
            <input
              name="policy_accepted"
              className="form-check-input"
              type="checkbox"
              id="gridCheck1"
              onChange={inputChange}
              required
            />
            <label className="form-check-label" htmlFor="gridCheck1">
              Acconsento al trattamento dei dati
            </label>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary offset-sm-2" required>
        Invia recensione
      </button>
    </form>
  );
}
