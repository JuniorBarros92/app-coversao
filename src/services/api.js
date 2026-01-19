const BASE_URL = 'https://api.exchangerate-api.com/v4/latest/';

export async function fetchExchangeRates(baseCurrency) {

    try {   
    const response = await fetch(`${BASE_URL}${baseCurrency}`);
    const data = await response.json();
    return data.rates;
} catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
}   }