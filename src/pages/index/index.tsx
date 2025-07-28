import viteLogo from "/vite.svg";
import reactLogo from "../../assets/react.svg";

const Index = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-gray-800 space-y-6 overflow-hidden">
            {/* Logo 区域 */}
            <div className="flex space-x-6">
                <a
                    href="https://vite.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-110"
                >
                    <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
                </a>
                <a
                    href="https://react.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-110"
                >
                    <img src={reactLogo} className="w-16 h-16" alt="React logo" />
                </a>
            </div>

            {/* 圆形徽标（跳动） */}
            <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center shadow-md animate-bounce">
                <span className="text-4xl font-bold text-indigo-600">S</span>
            </div>

            {/* 名字标识（淡入） */}
            <h1 className="text-3xl font-semibold opacity-0 animate-fade-in">Suxiaoxiang</h1>

            {/* 个性签名（淡入） */}
            <p className="text-base text-gray-500 opacity-0 animate-fade-in delay-200">
                Front-End Developer & Creator
            </p>
        </div>
    );
};

export default Index;
