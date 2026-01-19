const BASE_URL = 'https://api.exchangerate.host/latest';

export async function fetchExchangeRates(baseCurrency) {
    // Mock data for testing
    const mockRates = {
        USD: 1,
        BRL: 5.5,
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110,
        CAD: 1.25,
        AUD: 1.35,
        CHF: 0.92
    };
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockRates), 1000); // Simulate delay
    });

    // Uncomment below to use real API
    /*
    try {   
    const response = await fetch(`${BASE_URL}?base=${baseCurrency}`);
    const data = await response.json();
    return data.rates;
    } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
    }
    */
}

