
// function Header(){

//     return(
//         <header>
//             <h1>Remind IT</h1>
//         </header>
//     );

// }

// export default Header


import { NavLink } from "react-router-dom";
import { Bell } from "lucide-react";
import "./Header.css";

const NAV_ITEMS = [
  { label: "Dashboard", to: "/" },
  { label: "Reminders", to: "/reminders" },
  { label: "Plugins", to: "/plugins" },
  { label: "Marketplace", to: "/marketplace" },
];

export default function Header({ user }) {
  return (
    <header className="header">
      <div className="header__logo">Remind IT</div>

      <nav className="header__nav">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="header__actions">
        <button className="header__icon-btn" aria-label="Notifications">
          <Bell size={18} />
        </button>
        <div className="header__avatar">{user?.name?.[0] ?? "P"}</div>
      </div>
    </header>
  );
}