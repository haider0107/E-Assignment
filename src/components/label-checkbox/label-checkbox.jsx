import "./label-checkbox.css";

function LabelCheckBox({ count, label }) {
  const labelCheckboxs = [];

  for (let i = 0; i < count; i++) {
    labelCheckboxs.push(
      <div className="checkbox-item">
        <label htmlFor={`checkbox${i}`}>{label}</label>
        <input type="checkbox" id={`checkbox${i}`} />
      </div>
    );
  }

  return <div className="checkbox-group">{labelCheckboxs}</div>;
}

export default LabelCheckBox;
