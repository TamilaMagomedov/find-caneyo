import DynamicMap from "./components/map/map";

export default function Home() {
  return (
    <div className="layout">
      <div className="mainTitleDiv">
        <div className="title">
          Find Cane Yo
        </div>
        <div className="description">
          Place your map point
        </div>
        <DynamicMap />
      </div>
    </div>
  );
}
