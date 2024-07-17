import "./button.css";

function Button({ count }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button key={i} className="full-width-button">
        Done
      </button>
    );
  }

  return <div className="button-group">{buttons}</div>;
}

export default Button;
