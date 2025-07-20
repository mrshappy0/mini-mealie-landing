export enum MINI_MEALIE_CLOUD_BASE_URL {
    Production = 'https://y6lfcntp79.execute-api.us-west-2.amazonaws.com',
    Staging = 'https://edusqp95v5.execute-api.us-west-2.amazonaws.com',
}

export const fetchFromMMCApi = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
    const base =
        import.meta.env.MODE === 'production'
            ? MINI_MEALIE_CLOUD_BASE_URL.Production
            : MINI_MEALIE_CLOUD_BASE_URL.Staging;

    const res = await fetch(`${base}${endpoint}`, options);
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
};
