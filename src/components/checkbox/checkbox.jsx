import "./checkbox.css"

function Checkbox({ count }) {
  const checkboxs = [];
  for (let i = 0; i < count; i++) {
    checkboxs.push(<input key={i} type="checkbox" id={`checkbox${i}`} />);
  }

  return <div className="checkbox-container">{checkboxs}</div>;
}

export default Checkbox;
