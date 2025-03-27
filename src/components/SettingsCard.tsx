interface SettingsCardProps {
  targetCount: number;
  setTargetCount: (count: number) => void;
  onStart: () => void;
}

function SettingsCard({
  targetCount,
  setTargetCount,
  onStart,
}: SettingsCardProps) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[420px] backdrop-blur-sm bg-opacity-90">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          정확도 테스트
        </h2>
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              목표물 개수
            </label>
            <input
              type="number"
              min="1"
              max="100"
              value={targetCount}
              onChange={(e) => setTargetCount(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3498DB] focus:border-transparent"
            />
          </div>
          <button
            onClick={onStart}
            className="w-full bg-[#3498DB] text-white py-3 px-4 rounded-lg text-base font-semibold hover:bg-[#2980b9] transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsCard;
