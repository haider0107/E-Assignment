import "./App.css";
import Button from "./components/button/button";
import Checkbox from "./components/checkbox/checkbox";
import LabelCheckBox from "./components/label-checkbox/label-checkbox";

function App() {
  const pages = [];

  for (let i = 1; i <= 4; i++) {
    pages.push(<LabelCheckBox count={1} label={`Page ${i}`} />);
  }

  return (
    <>
      <div className="container">
        <div className="box box1">
          <Button count={3} />
        </div>
        <div className="box box2">
          <Checkbox count={8} />
        </div>
        <div className="box box3">
          <LabelCheckBox count={7} label="All pages" />
        </div>
        <div className="box box4">
          <div className="form">
            <LabelCheckBox count={1} label="All pages" />
            <hr className="divider" />
            {pages}
            <hr className="divider" />
            <br />
            <Button count={1} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
