import { useState } from "react";

formInitialData = {
  name: "",
  text: "",
  vote: "",
};

export default function ReviewForm() {
  const [formData, setFormData] = useState(formInitialData);

  function handleFormSubmit(e) {
    e.prevent.Default();
  }

  function inputChange() {}

  return (
    <form>
      <div className="row mb-3">
        <label htmlFor="inputName" className="col-sm-2 col-form-label">
          Nome
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Il tuo nome"
            value={formData.name}
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="inputText" className="col-sm-2 col-form-label">
          Recensione
        </label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            id="inputText"
            rows="4"
            placeholder="Scrivi la tua recensione..."
            value={formData.text}
          ></textarea>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="selectVote" className="col-sm-2 col-form-label">
          Voto
        </label>
        <div className="col-sm-10">
          <select className="form-select" id="selectVote" value={formData.vote}>
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
              className="form-check-input"
              type="checkbox"
              id="gridCheck1"
            />
            <label className="form-check-label" htmlFor="gridCheck1">
              Acconsento al trattamento dei dati
            </label>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary offset-sm-2">
        Invia recensione
      </button>
    </form>
  );
}
