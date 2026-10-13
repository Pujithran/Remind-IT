import { plugins } from "../data/plugins.js";
import "./Marketplace.css";

export default function Marketplace() {
  return (
    <div className="page">
      <div className="library__header">
        <div className="library__eyebrow">PLUGIN LIBRARY</div>
        <h1 className="library__title">Build your perfect setup</h1>
        <p className="library__subtitle">
          Add only the specialist reminders you need. Every plugin includes
          essential features for free.
        </p>
      </div>

      <div className="library__grid">
        {plugins.map((plugin) => (
          <div className="plugin-tile" key={plugin.id}>
            <div className="plugin-tile__top">
              <h3 className="plugin-tile__name">{plugin.name}</h3>
              <span
                className={
                  "plugin-tile__badge plugin-tile__badge--" +
                  (plugin.active ? "active" : plugin.access.toLowerCase())
                }
              >
                {plugin.active ? "Active" : plugin.access}
              </span>
            </div>
            <p className="plugin-tile__text">{plugin.description}</p>
            <div className="plugin-tile__meta">
              {plugin.installs} installs · {plugin.rating} rating
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
