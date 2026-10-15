import "./PluginModal.css";
import { Link } from "react-router-dom"

export default function PluginModal({ plugin, onClose, onToggle, limitReached, locked }) {
  const blocked = locked || (limitReached && !plugin.active)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__title">{plugin.name}</h2>
        <p className="modal__subtitle">{plugin.description}</p>
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

        {blocked && (
          <p className="plugin-modal__warning">
            {locked ? (
              <>This is a Premium plugin. <Link to="/premium">Upgrade to Premium</Link> to activate it.</>
            ) : (
              "You've reached the Free plan limit. Deactivate a plugin to activate another."
            )}
          </p>
        )}

        <div className="modal__actions">
          <button className="modal__submit" type="button" onClick={onToggle} disabled={blocked}>
            {plugin.active ? "Deactivate plugin" : "Activate plugin"}
          </button>
        </div>
      </div>
    </div>
  );
}
