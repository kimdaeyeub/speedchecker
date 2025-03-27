import { useState } from "react";
import SettingsCard from "./components/SettingsCard";
import ResultCard from "./components/ResultCard";

interface Target {
  id: number;
  x: number;
  y: number;
  startTime: number;
}

function Accuracy() {
  const [isStarted, setIsStarted] = useState(false);
  const [targetCount, setTargetCount] = useState(10);
  const [currentTarget, setCurrentTarget] = useState<Target | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [clickedCount, setClickedCount] = useState(0);
  const [targetTimes, setTargetTimes] = useState<number[]>([]);

  const generateTarget = () => {
    const targetSize = 40;
    const padding = 100;
    const maxX = window.innerWidth - targetSize - padding * 2;
    const maxY = window.innerHeight - targetSize - padding * 2;

    const x = Math.max(
      padding,
      Math.min(
        window.innerWidth - targetSize - padding,
        padding + Math.random() * maxX
      )
    );
    const y = Math.max(
      padding,
      Math.min(
        window.innerHeight - targetSize - padding,
        padding + Math.random() * maxY
      )
    );

    return {
      id: Date.now(),
      x,
      y,
      startTime: Date.now(),
    };
  };

  const handleStart = () => {
    setIsStarted(true);
    setStartTime(Date.now());
    setClickedCount(0);
    setEndTime(null);
    setTargetTimes([]);
    setCurrentTarget(generateTarget());
  };

  const handleTargetClick = () => {
    if (!currentTarget) return;

    const targetTime = Date.now() - currentTarget.startTime;
    setTargetTimes((prev) => [...prev, targetTime]);
    setClickedCount((prev) => prev + 1);

    if (clickedCount + 1 === targetCount) {
      setEndTime(Date.now());
      setCurrentTarget(null);
    } else {
      setCurrentTarget(generateTarget());
    }
  };

  const calculateTime = () => {
    if (!startTime || !endTime) return 0;
    return ((endTime - startTime) / 1000).toFixed(3);
  };

  const calculateAverageTargetTime = () => {
    if (targetTimes.length === 0) return 0;
    const sum = targetTimes.reduce((acc, curr) => acc + curr, 0);
    return Math.round(sum / targetTimes.length);
  };

  return (
    <div
      className={`flex-1 h-full ${
        isStarted && !endTime ? "bg-[#2FCC71]" : "bg-[#3498DB]"
      }`}
    >
      {!isStarted ? (
        <SettingsCard
          targetCount={targetCount}
          setTargetCount={setTargetCount}
          onStart={handleStart}
        />
      ) : (
        <div className="relative w-full h-full">
          {currentTarget && (
            <div
              className="absolute w-10 h-10 bg-white rounded-full cursor-pointer shadow-lg"
              style={{
                left: `${currentTarget.x}px`,
                top: `${currentTarget.y}px`,
              }}
              onClick={handleTargetClick}
            />
          )}
          {endTime && (
            <ResultCard
              clickedCount={clickedCount}
              time={calculateTime()}
              averageTargetTime={calculateAverageTargetTime()}
              onRestart={() => setIsStarted(false)}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Accuracy;
