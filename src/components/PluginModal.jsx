import "./PluginModal.css";

export default function PluginModal({ plugin, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__title">{plugin.name}</h2>
        <p className="modal_subtitle">{plugin.description}</p>
        <div className="plugin-modal__stats">
          <div className="plugin-modal__stat">
            <div className="plugin-modal__value">{plugin.rating}</div>
            <div className="plugin-modal__label">Rating</div>
          </div>
          <div className="plugin-modal__stat">
            <div className="plugin-modal__value">{plugin.installs}</div>
            <div className="plugin-modal__label">Installs</div>
          </div>
          <div className="plugin-modal__stat">
            <div className="plugin-modal__value">{plugin.access}</div>
            <div className="plugin-modal__label">Access</div>
          </div>
        </div>
        <p className="plugin-modal__note">
          Includes guided reminder templates, recurring schedules, document
          notes, and a focused plugin dashboard.
        </p>

        <div className="modal__actions">
          <button className="modal__submit" type="button">
            {plugin.active ? "Deactivate plugin" : "Activate plugin"}
          </button>
        </div>
      </div>
    </div>
  );
}
