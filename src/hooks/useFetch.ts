"use client";

import React from 'react';

export default function useFetch<T>(url: string, options: any = {})
{
    const [data, setData] = React.useState<T>();
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            })
    }, [url, JSON.stringify(options)]);

    return { data, loading, error }
}