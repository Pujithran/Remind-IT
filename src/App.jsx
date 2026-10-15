import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { plugins as initialPlugins, FREE_LIMIT, PREMIUM_LIMIT } from "./data/plugins.js";

import NewReminderModal from "./components/NewReminderModal.jsx";
import Header from "./components/Header.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Reminders from "./pages/Reminders.jsx";
import Plugins from "./pages/Plugins.jsx";
import Marketplace from "./pages/Marketplace.jsx";
import Premium from "./pages/Premium.jsx";
import Notifications from "./pages/Notifications.jsx";

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

function App() {
  const [reminders, setReminders] = useState(initialReminders);
  const [showModal, setShowModal] = useState(false);
  const [plugins, setPlugins] = useState(initialPlugins);
  const isPremium = false;

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

  function handleComplete(id) {
    setReminders(
      reminders.map((item) =>
        item.id === id ? { ...item, status: "completed", tag: "Done" } : item,
      ),
    );
  }

  function handleTogglePlugin(id) {
    const target = plugins.find((plugin) => plugin.id === id);
    const activeCount = plugins.filter((plugin) => plugin.active).length;
    const limit = isPremium ? PREMIUM_LIMIT : FREE_LIMIT;

    if (!target.active && target.access === "Premium" && !isPremium) {
      return;
    }

    if (!target.active && activeCount >= limit) {
      return;
    }

    setPlugins(
      plugins.map((plugin) =>
        plugin.id === id ? { ...plugin, active: !plugin.active } : plugin,
      ),
    );
  }

  return (
    <>
      <Header onNewReminder={() => setShowModal(true)} />{" "}
      <Routes>
        <Route
          path="/"
          element={<Dashboard reminders={reminders} plugins={plugins} isPremium={isPremium} />}
        />

        <Route
          path="/reminders"
          element={
            <Reminders
              reminders={reminders}
              onNewReminder={() => setShowModal(true)}
              onComplete={handleComplete}
            />
          }
        />{" "}

        <Route path="/plugins" element={<Plugins plugins={plugins} />} />
        <Route
          path="/marketplace"
          element={
            <Marketplace
              plugins={plugins}
              isPremium={isPremium}
              onTogglePlugin={handleTogglePlugin}
            />
          }
        />

        <Route 
          path="/premium" 
          element={<Premium isPremium={isPremium}/>} 
        />

        <Route 
          path="/notifications"
          element={<Notifications reminders={reminders} />} 
        />

      </Routes>
      {showModal && (
        <NewReminderModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddReminder}
        />
      )}
    </>
  );
}

export default App;
