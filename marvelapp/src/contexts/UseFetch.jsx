import { useEffect, useState } from 'react';
import axios from 'axios';

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);  // Set initial loading state to true
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setData(response.data);  // Access data property of the response
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, [url]);

    return { data, loading, error };
}

export default UseFetch;