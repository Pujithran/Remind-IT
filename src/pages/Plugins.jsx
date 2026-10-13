import { Link } from "react-router-dom";
import "./Plugins.css";

export default function Plugins({ plugins }) {
  const activePlugins = plugins.filter((plugin) => plugin.active);
  return (
    <div className="page">
      <div className="plugins__header">
        <div>
          <div className="plugins__eyebrow">YOUR TOOLKIT</div>
          <h1 className="plugins__title">Active plugins</h1>
          <p className="plugins__subtitle">
            Specialized reminder systems configured around the way you live.
          </p>
        </div>
        <Link className="plugins__browse" to="/marketplace">
          Browse library
        </Link>
      </div>
      <div className="plugins__grid">
        {activePlugins.map((plugin) => (
          <div className="plugin-tile" key={plugin.id}>
            <div className="plugin-tile__top">
              <h3 className="plugin-tile__name">{plugin.name}</h3>
              <span className="plugin-tile__badge">Active</span>
            </div>
            <p className="plugin-tile__text">{plugin.description}</p>
            <div className="plugin-tile__meta">
              {plugin.installs} installs · {plugin.rating} rating
            </div>
          </div>
        ))}

        <Link className="plugin-tile plugin-tile--add" to="/marketplace">
          <div className="plugin-tile__plus">+</div>
          <div className="plugin-tile__name">Add another plugin</div>
          <p className="plugin-tile__text">
            Discover a reminder system for your next priority.
          </p>
        </Link>
      </div>
    </div>
  );
}
