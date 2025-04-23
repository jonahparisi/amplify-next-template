import "./../app/app.css";
import LocationFinderClient from "./components/LocationFinderClient";
import LocationFinderServer from "./components/LocationFinderServer";
import ToDo from "./components/ToDo";

export default function App() {
  return (
    <main>
      <LocationFinderClient />
      <LocationFinderServer />
      <ToDo></ToDo>
    </main>
  );
}
