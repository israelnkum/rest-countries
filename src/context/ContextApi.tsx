import React, { createContext, useContext, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface Country {
  name: string;
  capital: string;
  // Add other properties as needed
}

const http = axios.create({
  baseURL: 'https://restcountries.com/v2',
});

const ApiContext = createContext<Country[] | null>(null);

export const ApiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response: AxiosResponse<Country[]> = await http.get('/all');
        setCountries(response.data);
      } catch (error) {
        console.error('Failed to retrieve countries:', error);
      }
    };

    fetchCountries().catch((error) => {
      console.error('Failed to fetch countries:', error);
    });
  }, []);

  return <ApiContext.Provider value={countries}>{children}</ApiContext.Provider>;
};

export const useApi = () => useContext(ApiContext);
