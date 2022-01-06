import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const DOGS_API_KEY = '7bae01d4-ff93-4aac-a7cc-73f61f39b178';

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_KEY);
      return headers;
    }
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 5) {
          return `/breeds?limit=${limit}`;
        }
      })
    };
  }
});

export const { useFetchBreedsQuery } = apiSlice;

export default apiSlice;
