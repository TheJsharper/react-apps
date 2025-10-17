
import useTrafficLightUseEffectCustomHooked from "../hooks/useTrafficLightUseEffectCustomHooked";
export const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
}
export type TrafficLight = keyof typeof colors;

export const TrafficLightWithUseEffectCustomHooked = () => {

    const { countdown, procentage, greenLight, yellowLight, redLight } = useTrafficLightUseEffectCustomHooked();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">


                <h1 className="text-white text-2xl font-thin">Traffic Light with UseEffect</h1>
                <h2 className="text-white text-xl">{countdown}</h2>
                <div className="w-64 h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full transition-all duration-1000 ease-in-out" style={{ width: `${procentage}%` }}></div>
                </div>

                <div className={`w-32 h-32 rounded-full ${redLight}`}></div>
                <div className={`w-32 h-32 rounded-full ${yellowLight}`}></div>
                <div className={`w-32 h-32 rounded-full ${greenLight}`}></div>



            </div>
        </div>
    );
};