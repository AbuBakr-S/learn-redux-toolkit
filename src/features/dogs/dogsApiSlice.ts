import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_DOGS_API_KEY;

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  }
}

export const dogsApiSlice = createApi({
  reducerPath: 'api',  // helps our code know where we're keeping our data
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', API_KEY);
      return headers;
    }
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        }
      })
    }
  }
})

export const { useFetchBreedsQuery } = dogsApiSlice;