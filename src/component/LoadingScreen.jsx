import React from "react";

const LoadingScreen = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen  overflow-hidden">



            <div className="flex flex-col items-center mt-8">
                <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-xl text-gray-700 font-medium">loading...</p>
            </div>
        </div>
    );
};

export default LoadingScreen;
