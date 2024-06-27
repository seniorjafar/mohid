import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: "https://bazar.ilyosbekdev.uz",
    prepareHeaders: (headers) => {
        const token = localStorage.getItem("token")
        if (token) {
            headers.set('Authorization', `${token}`)
        }
        return headers
    },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 10 })

export const api = createApi({
    reducerPath: 'mainApi',
    baseQuery: baseQueryWithRetry,
    tagTypes: ["Product"], 
    endpoints: () => ({}),
})