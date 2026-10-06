import { Routes, Route } from "react-router-dom"
import Header from "./components/Header.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Reminders from "./pages/Reminders.jsx"
import Plugins from "./pages/Plugins.jsx"
import Marketplace from "./pages/Marketplace.jsx"

function App() {

  return (
      <>
        <Header />
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/reminders" element={<Reminders />} />
              <Route path="/plugins" element={<Plugins />} />
              <Route path="/marketplace" element={<Marketplace />}/>
          </Routes>
      </>
  );
}

export default App