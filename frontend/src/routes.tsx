// MainRoutes.tsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import MoreInformation from "./Components/MoreInformation";
import UpdateCharacter from "./Components/UpdateCharacter";
import CreateCharacter from "./Components/CreateCharacter";

function MainRoutes() {
  return (
    <Router>
      <div className="flex">
        <Link to='/'>
          🏠
        </Link>
      </div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/more-info/:id" element={<MoreInformation />} />
          <Route path="/edit/:id" element={<UpdateCharacter />} />
          <Route path="/new" element={<CreateCharacter />} />
        </Routes>
        
    </Router>
  );
}

export default MainRoutes;
