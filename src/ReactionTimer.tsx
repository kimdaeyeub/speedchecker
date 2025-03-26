import { useEffect, useState } from "react";

function ReactionTimer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [prepare, setPrepare] = useState(true);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    let timer: number = 0;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [running]);

  const onClickStart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setTime(0);
    setPrepare(false);
    setComplete(false);
    const randomDelay = Math.random() * (4000 - 1500) + 1500;

    setTimeout(() => {
      setRunning(true);
    }, randomDelay);
  };

  const onClickStop = () => {
    setRunning(false);
    setPrepare(true);
    setComplete(true);
  };

  return (
    <div
      onClick={onClickStop}
      style={{
        backgroundColor: running ? "#2FCC71" : prepare ? "#3498DB" : "#E74B3C",
      }}
      className="w-full h-screen flex flex-col gap-8 items-center justify-center"
    >
      {prepare && !complete && (
        <span className="font-bold text-5xl text-white">
          반응 속도를 측정해보세요.
        </span>
      )}
      {complete && (
        <div className="text-white flex flex-col items-center gap-5">
          <span className="text-3xl font-semibold">당신의 반응 속도는:</span>
          <span className="text-5xl font-bold">{time}ms</span>
        </div>
      )}
      {!prepare && !complete && (
        <span className="font-bold text-5xl text-white">준비 중...</span>
      )}
      <div className="flex gap-5">
        {!running && prepare && (
          <button
            className="rounded-md px-5 py-2 cursor-pointer text-white font-medium bg-gradient-to-tr from-red-500 to-purple-600 text-lg"
            onClick={(event) => onClickStart(event)}
          >
            {running ? "중지" : "시작"}
          </button>
        )}
      </div>
    </div>
  );
}

export default ReactionTimer;
