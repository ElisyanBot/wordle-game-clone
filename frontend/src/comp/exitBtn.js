export default function ExitBtn({ innerText }) {
  return (
    <button
      className="exit-btn"
      onClick={() => {
        window.location.reload();
      }}
    >
      {innerText}
    </button>
  );
}

ExitBtn.defaultProps = {
  innerText: "Exit Game",
};
