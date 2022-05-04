import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * A custom hook which fetches data from the given URL. Includes functionality to determine
 * whether the data is still being loaded or not.
 */
export default function useGet(url, initialState = null) {

    const [data, setData] = useState(initialState);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(url);
            setData(response.data);
        }
        fetchData();
    }, [url]);

    return { data };
}