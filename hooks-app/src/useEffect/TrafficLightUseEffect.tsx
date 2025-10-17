
import { useEffect, useState } from "react";
const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
}
type TrafficLight = keyof typeof colors;

export const TrafficLightWithUseEffect = () => {

    const [light, setLight] = useState<TrafficLight>('red')

    const [countdown, setCountdown] = useState(10);



    useEffect(() => {

        if (countdown === 0) return;

        const interval = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [countdown, light]);

    useEffect(() => {

        if (countdown > 0) return;

        setCountdown(10);

        if (light === 'red') setLight('green');
        else if (light === 'green') setLight('yellow');
        else if (light === 'yellow') setLight('red');
        return;

    }, [countdown, light]);


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">


                <h1 className="text-white text-2xl font-thin">Traffic Light with UseEffect</h1>
                <h2 className="text-white text-xl">{countdown}</h2>
                <div className="w-64 h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full transition-all duration-1000 ease-in-out" style={{ width: `${(countdown / 10) * 100}%` }}></div>
                </div>

                <div className={`w-32 h-32 rounded-full ${light === 'red' ? colors.red : 'bg-gray-700'}`}></div>
                <div className={`w-32 h-32 rounded-full ${light === 'yellow' ? colors.yellow : 'bg-gray-700'}`}></div>
                <div className={`w-32 h-32 rounded-full ${light === 'green' ? colors.green : 'bg-gray-700'}`}></div>



            </div>
        </div>
    );
};