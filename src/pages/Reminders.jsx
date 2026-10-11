import { useState } from "react";
import NewReminderModal from "../components/NewReminderModal.jsx";
import "./Reminders.css";

const initialReminders = [
  {
    id: 1,
    title: 'Submit "Urban Ecology" essay',
    meta: "Student Assignments due in 4 hours",
    tag: "Overdue soon",
    status: "overdue",
  },
  {
    id: 2,
    title: "Renew internet + streaming bundle",
    meta: "Subscriptions tomorrow, 9:00 AM",
    tag: "Tomorrow",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Dentist follow-up · Dr. Halvorsen",
    meta: "Appointments Thu, 11:30 AM",
    tag: "This week",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Electricity bill · Cycle 07",
    meta: "Bills & Utilities due Fri, 16 May",
    tag: "Friday",
    status: "upcoming",
  },
];

const tabs = [
  { key: "all", label: "All" },
  { key: "overdue", label: "Overdue" },
  { key: "upcoming", label: "Upcoming" },
  { key: "completed", label: "Completed" },
];

export default function Reminders() {
  const [filter, setFilter] = useState("all");

  const [showModal, setShowModal] = useState(false);

  const [reminders, setReminders] = useState(initialReminders);

  const visible =
    filter === "all"
      ? reminders
      : reminders.filter((item) => item.status === filter);

  function handleAddReminder({ title, when, category }) {
    const date = new Date(when);
    const isOverdue = date < new Date();

    const newReminder = {
      id: Date.now(),
      title: title,
      meta:
        category +
        " · " +
        date.toLocaleString("en-GB", {
          day: "numeric",
          month: "short",
          hour: "numeric",
          minute: "2-digit",
        }),
      tag: isOverdue ? "Overdue" : "Upcoming",
      status: isOverdue ? "overdue" : "upcoming",
    };

    setReminders([newReminder, ...reminders]);
    setShowModal(false);
  }

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
        <button
          className="reminders__new-btn"
          onClick={() => setShowModal(true)}
        >
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
            <div className="reminders__check"></div>
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

      {showModal && (
        <NewReminderModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddReminder}
        />
      )}
    </div>
  );
}
