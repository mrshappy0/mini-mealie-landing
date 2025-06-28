enum MINI_MEALIE_CLOUD_BASE_URL {
    Production = 'https://adott4o6c0.execute-api.us-west-2.amazonaws.com',
    Staging = 'https://9bivzfs7w6.execute-api.us-west-2.amazonaws.com',
}

export const fetchFromMMCApi = async <T>(endpoint: string): Promise<T> => {
    const base =
        import.meta.env.MODE === 'production'
            ? MINI_MEALIE_CLOUD_BASE_URL.Production
            : MINI_MEALIE_CLOUD_BASE_URL.Staging;
    const res = await fetch(`${base}${endpoint}`);
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
};

