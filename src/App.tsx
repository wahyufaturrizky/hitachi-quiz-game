import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
      <Outlet />
    </div>
  );
}

export default App;
