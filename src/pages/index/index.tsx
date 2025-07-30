import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "../../assets/react.svg";
const Index = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 控制整体加载状态
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center px-6 text-gray-700 relative bg-gradient-to-br from-slate-50 via-white to-indigo-50 transition-all duration-700 overflow-hidden"
            aria-labelledby="hero-title"
        >
            {/* 装饰性背景元素 —— 极简抽象 */}
            <div
                className="absolute w-60 h-60 sm:w-80 sm:h-80 border border-indigo-100 rounded-full -top-28 -left-28 opacity-60 animate-pulse-slow"
            ></div>
            <div
                className="absolute w-40 h-40 bg-pink-100 rounded-full blur-xl -bottom-16 right-12 opacity-40"
            ></div>

            {/* Logo 组合 —— 手绘晃动入场 */}
            <div
                className={`flex space-x-8 mb-6 opacity-0 transform translate-y-2 transition-all duration-700 delay-300 ${
                    isLoaded ? "opacity-100 translate-y-0" : ""
                }`}
                style={{ transition: "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
            >
                <a
                    href="https://vite.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group hover:rotate-6 hover:scale-110 transition-transform duration-500 focus:ring-2 focus:ring-indigo-200 rounded-lg p-2"
                    aria-label="Vite official site"
                >
                    <img
                        src={viteLogo}
                        alt="Vite logo"
                        className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-sm group-hover:drop-shadow-md transition-shadow"
                    />
                </a>
                <a
                    href="https://react.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group hover:-rotate-6 hover:scale-110 transition-transform duration-500 focus:ring-2 focus:ring-blue-200 rounded-lg p-2"
                    aria-label="React official site"
                >
                    <img
                        src={reactLogo}
                        alt="React logo"
                        className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-sm group-hover:drop-shadow-md transition-shadow"
                    />
                </a>
            </div>

            {/* 主徽标 —— 浮动 + 轻微呼吸 */}
            <div
                className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white flex items-center justify-center shadow-xl border border-gray-100 mb-6 transform-gpu transition-all duration-300 hover:shadow-2xl hover:scale-105 relative z-10 animate-float`}
            >
        <span className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent select-none">
          S
        </span>
            </div>

            {/* 名字 */}
            <h1
                id="hero-title"
                className={`text-4xl sm:text-6xl font-extrabold text-gray-800 tracking-tight text-center mb-2 opacity-0 transform translate-y-4 transition-all duration-700 delay-500 ${
                    isLoaded ? "opacity-100 translate-y-0" : ""
                }`}
                style={{
                    transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
            >
                Suxiaoxiang
            </h1>

            {/* 职业标签 */}
            <p
                className={`text-lg sm:text-2xl text-gray-500 text-center max-w-xs mb-2 opacity-0 transform translate-y-4 transition-all duration-700 delay-700 ${
                    isLoaded ? "opacity-100 translate-y-0" : ""
                }`}
                style={{
                    transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
            >
                Front-End Developer & Creator
            </p>

            {/* 个性语句 —— 打字机效果 or 淡入 */}
            <p
                className={`text-sm sm:text-base italic text-gray-400 text-center max-w-xs opacity-0 transform translate-y-4 transition-all duration-700 delay-900 font-medium ${
                    isLoaded ? "opacity-100 translate-y-0" : ""
                }`}
                style={{
                    transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
            >
                Building with heart, one pixel at a time.
            </p>

            {/* 小彩蛋：点击徽标轻微抖动 */}
            <div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                onClick={() =>
                    document.querySelector(".animate-float")?.classList.add("jiggle")
                }
                role="button"
                tabIndex={0}
                aria-label="Click for fun"
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        document.querySelector(".animate-float")?.classList.add("jiggle");
                        setTimeout(() => {
                            document.querySelector(".jiggle")?.classList.remove("jiggle");
                        }, 600);
                    }
                }}
            >
        <span className="text-xs text-gray-300 hover:text-gray-500 cursor-pointer transition">
          👉 click me
        </span>
            </div>
        </div>
    );
};

export default Index;