import { useState } from "react";

export function useFetching(callback){
    const [error, setError] = useState('');
    function fetching(){
        try {
            callback()
        } catch (e) {
            setError(e.message)
        }
    }
    return [fetching, error];
}