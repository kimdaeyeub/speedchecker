interface SettingsCardProps {
  targetCount: number;
  setTargetCount: (count: number) => void;
  horizontalSensitivity: number;
  setHorizontalSensitivity: (value: number) => void;
  verticalSensitivity: number;
  setVerticalSensitivity: (value: number) => void;
  onStart: () => void;
}

function SettingsCard({
  targetCount,
  setTargetCount,
  horizontalSensitivity,
  setHorizontalSensitivity,
  verticalSensitivity,
  setVerticalSensitivity,
  onStart,
}: SettingsCardProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[420px] backdrop-blur-sm bg-opacity-90">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          속도 측정 게임
        </h2>
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              목표물 개수
            </label>
            <select
              value={targetCount}
              onChange={(e) => setTargetCount(Number(e.target.value))}
              className="mt-1 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-[#3498DB] focus:ring-[#3498DB] p-2.5 text-base transition-all duration-200"
            >
              <option value={10}>10개</option>
              <option value={20}>20개</option>
              <option value={30}>30개</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              수평 마우스 감도
            </label>
            <input
              type="number"
              min="0.5"
              max="2"
              step="0.1"
              value={horizontalSensitivity}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value >= 0.5 && value <= 2) {
                  setHorizontalSensitivity(value);
                }
              }}
              className="mt-1 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-[#3498DB] focus:ring-[#3498DB] p-2.5 text-base transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              수직 마우스 감도
            </label>
            <input
              type="number"
              min="0.5"
              max="2"
              step="0.1"
              value={verticalSensitivity}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value >= 0.5 && value <= 2) {
                  setVerticalSensitivity(value);
                }
              }}
              className="mt-1 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-[#3498DB] focus:ring-[#3498DB] p-2.5 text-base transition-all duration-200"
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
