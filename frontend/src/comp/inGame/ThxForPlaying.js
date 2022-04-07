import ExitBtn from "../exitBtn.js";

export default function ThxForPlaying() {
  return (
    <div className="thx-for-playing">
      <h2>Thank you for playing</h2>
      <p>Your score is now submited</p>
      <ExitBtn innerText={"Restart Game"} />
    </div>
  );
}

