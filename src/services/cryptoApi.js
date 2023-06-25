//import create from '@ant-design/icons/lib/components/IconFont';
import { createFromIconfontCN as createIcon } from '@ant-design/icons';
import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'f009a0eaf2msh997bcf8eb084655p16f72djsn74b2fefe652b'
    
 }

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders});

export const cryptoApi = createApi ({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getExchanges: builder.query({
            query: (count) => createRequest(`/exchanges}`),
        }),
        getCryptoDetails: builder.query({
            query: (rank) => createRequest(`/coin/${rank}`),
        }),
        getCryptoHistory: builder.query({
            query: (rank,timePeriod) => createRequest(`/coin/${rank}/history/${timePeriod}`),
        })
    })
});

export const {
    useGetCryptosQuery, 
    useGetExchangesQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
   
}  = cryptoApi;
















