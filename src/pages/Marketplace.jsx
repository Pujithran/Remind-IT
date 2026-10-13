import { useState } from "react";
import PluginModal from "../components/PluginModal.jsx"
import "./Marketplace.css";

export default function Marketplace({ plugins }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null)

  const visible = plugins.filter((plugin) => {
    const matchesSearch = plugin.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && plugin.active) ||
      plugin.access.toLowerCase() === filter;
    return matchesSearch && matchesFilter;
  });

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

      <div className="library__controls">
        <input
          className="library__search"
          type="text"
          placeholder="Search plugins"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="library__filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </select>
      </div>

      <div className="library__grid">
        {visible.length === 0 && (
          <div className="library__empty">No plugins match your search.</div>
        )}
        {visible.map((plugin) => (
          <div className="plugin-tile" key={plugin.id} onClick={() => setSelected(plugin)}>
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

      {selected && <PluginModal plugin={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
