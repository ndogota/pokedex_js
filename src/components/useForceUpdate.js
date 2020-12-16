import {useCallback, useState} from 'react'

export default function useForceUpdate() {
    const [, setTick] = useState(0);
    return useCallback(() => {
        setTick(tick => tick + 1);
    }, []);
}