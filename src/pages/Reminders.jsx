import { useState } from "react";
import NewReminderModal from "../components/NewReminderModal.jsx";
import "./Reminders.css";

const tabs = [
  { key: "all", label: "All" },
  { key: "overdue", label: "Overdue" },
  { key: "upcoming", label: "Upcoming" },
  { key: "completed", label: "Completed" },
];

export default function Reminders({ reminders, onNewReminder, onComplete }) {
  const [filter, setFilter] = useState("all");

  const visible =
    filter === "all"
      ? reminders.filter((item) => item.status !== "completed")
      : reminders.filter((item) => item.status === filter);

  return (
    <div className="page">
      <div className="reminders__header">
        <div>
          <div className="reminders__eyebrow">YOUR SCHEDULE</div>
          <h1 className="reminders__title">Reminders</h1>
          <p className="reminders__subtitle">
            Everything that needs your attention, ordered without the noise.
          </p>
        </div>
        <button className="reminders__new-btn" onClick={onNewReminder}>
          New reminder
        </button>{" "}
      </div>

      <div className="reminders__tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={
              filter === tab.key
                ? "reminders__tab reminders__tab--active"
                : "reminders__tab"
            }
            onClick={() => setFilter(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="reminders__list">
        {visible.length === 0 && (
          <div className="reminders__empty">Nothing here yet.</div>
        )}

        {visible.map((item) => (
          <div className="reminders__row" key={item.id}>
            <button
              className="reminders__check"
              onClick={() => onComplete(item.id)}
              aria-label="Mark as done"
            ></button>{" "}
            <div className="reminders__info">
              <div className="reminders__name">{item.title}</div>
              <div className="reminders__meta">{item.meta}</div>
            </div>
            <span
              className={
                item.status === "overdue"
                  ? "reminders__tag reminders__tag--overdue"
                  : "reminders__tag"
              }
            >
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
