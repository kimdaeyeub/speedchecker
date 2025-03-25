import { Link } from "react-router";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <div className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-36 mb-12 shadow-lg">
        <h1 className="text-5xl font-bold text-white mb-6 text-center drop-shadow-lg">
          Speed Check
        </h1>
        <p className="text-xl text-white/90 text-center max-w-3xl mx-auto leading-relaxed">
          당신의 마우스 반응속도와 정확도를 측정해보세요. 다양한 게임 모드로
          실력을 향상시킬 수 있습니다.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <Link
          to="/reaction"
          className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-200"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            반응속도 테스트
          </h2>
          <p className="text-gray-600 leading-relaxed">
            화면이 변하는 순간 마우스를 클릭하여 당신의 반응속도를 측정해보세요.
          </p>
        </Link>
        <Link
          to="/accuracy"
          className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-200"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            정확도 테스트
          </h2>
          <p className="text-gray-600 leading-relaxed">
            제한된 시간 안에 목표물을 정확하게 클릭하여 당신의 정확도를
            측정해보세요.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
