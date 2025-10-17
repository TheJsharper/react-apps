import { useEffect, useState } from "react";
import { colors, type TrafficLight } from "../useEffectWithHook/TrafficLightWithUseEffectCustomHooked";

const useTrafficLightUseEffectCustomHooked = () => {
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

    return {
        countdown, procentage: (countdown / 10) * 100,
        greenLight: light === 'red' ? colors.green : 'bg-gray-700',
        yellowLight: light === 'green' ? colors.yellow : 'bg-gray-700',
        redLight: light === 'yellow' ? colors.red : 'bg-gray-700',

    };
}
export default useTrafficLightUseEffectCustomHooked;