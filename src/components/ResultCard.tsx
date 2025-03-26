interface ResultCardProps {
  clickedCount: number;
  time: string | number;
  averageTargetTime: number;
  onRestart: () => void;
}

function ResultCard({
  clickedCount,
  time,
  averageTargetTime,
  onRestart,
}: ResultCardProps) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[420px] backdrop-blur-sm bg-opacity-90">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          결과
        </h2>
        <div className="space-y-5">
          <div className="bg-gray-50 p-5 rounded-xl">
            <p className="text-lg font-semibold text-gray-700 mb-1">
              클릭한 목표물
            </p>
            <p className="text-2xl font-bold text-[#3498DB]">
              {clickedCount}개
            </p>
          </div>
          <div className="bg-gray-50 p-5 rounded-xl">
            <p className="text-lg font-semibold text-gray-700 mb-1">
              소요 시간
            </p>
            <p className="text-2xl font-bold text-[#3498DB]">{time}초</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-xl">
            <p className="text-lg font-semibold text-gray-700 mb-1">
              목표물 평균 제거 시간
            </p>
            <p className="text-2xl font-bold text-[#3498DB]">
              {averageTargetTime}ms
            </p>
          </div>
          <button
            onClick={onRestart}
            className="w-full bg-[#3498DB] text-white py-3 px-4 rounded-lg text-base font-semibold hover:bg-[#2980b9] transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            다시 시작
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
