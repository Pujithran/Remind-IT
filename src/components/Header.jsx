import { NavLink } from "react-router-dom";
import { Bell } from "lucide-react";
import "./Header.css"

function Header() {
    return(
        <header className="header">
            
            <div className="header__logo">Remind IT</div>

            <nav className="header__nav">
                <NavLink 
                    to="/"
                    className={({ isActive }) =>
                    isActive ? "header__link header__link--active" : "header__link"
                    }
                    >Dashboard</NavLink>
                <NavLink 
                    to="/reminders"
                    className={({ isActive }) =>
                    isActive ? "header__link header__link--active" : "header__link"
                    }
                    >Reminders</NavLink>
                <NavLink 
                    to="/plugins"
                    className={({ isActive }) =>
                    isActive ? "header__link header__link--active" : "header__link"
                    }
                    >Plugins</NavLink>
                <NavLink 
                    to="/marketplace"
                    className={({ isActive }) =>
                    isActive ? "header__link header__link--active" : "header__link"
                    }
                    >Marketplace</NavLink>
            </nav>

            <div className="header__actions">
                <button className="header__icon-btn" aria-label="Notifications">
                    <Bell size={22} strokeWidth={2.5} />
                </button>
            </div>

            <div className="header__avatar">P</div>

        </header>
    );
}

export default Header;