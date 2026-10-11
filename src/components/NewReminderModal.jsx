import { useState } from "react";
import "./NewReminderModal.css";

export default function NewReminderModal({ onClose, onAdd }) {
  function handleSubmit(event) {
  event.preventDefault();
  onAdd({ title, when, category });
}

  const [title, setTitle] = useState("");
  const [when, setWhen] = useState("");
  const [category, setCategory] = useState("Personal");

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal__title">New reminder</h2>
        <p className="modal__subtitle">
          Add the essentials now. You can fine tune it later.
        </p>

        <form className="modal__form" onSubmit={handleSubmit}>
          <label className="modal__label" htmlFor="reminder-title">
            What should we remind you?
          </label>
          <input
            className="modal__input"
            id="reminder-title"
            type="text"
            placeholder="e.g. Renew passport"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="modal__label" htmlFor="reminder-when">
            When?
          </label>
          <input
            className="modal__input"
            id="reminder-when"
            type="datetime-local"
            required
            value={when}
            onChange={(e) => setWhen(e.target.value)}
          />

          <label className="modal__label" htmlFor="reminder-category">
            Category
          </label>
          <select
            className="modal__input"
            id="reminder-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Personal</option>
            <option>Student Assignments</option>
            <option>Subscriptions</option>
            <option>Appointments</option>
            <option>Bills &amp; Utilities</option>
            <option>Vehicle</option>
          </select>

          <div className="modal__actions">
            <button className="modal__cancel" type="button" onClick={onClose}>
              Cancel
            </button>
            <button className="modal__submit" type="submit">
              Add reminder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}