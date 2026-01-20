import { View, Text } from 'react-native';

export function ResultCard({ fromCurrency, toCurrency, amount, result, exchangeRates }) {
   if (!result) {
        return null;
    }
   
    return (
        <View style={{ padding: 16, backgroundColor: '#334155', borderRadius: 8, marginTop: 16 }}>
            <Text style={{ color: '#ffffff', fontSize: 18 }}>Resultado: {result}</Text>
            {exchangeRates && (
                <Text style={{ color: '#94a3b8', fontSize: 14, marginTop: 8 }}>
                    Taxa: 1 {fromCurrency} = {exchangeRates[toCurrency].toFixed(4)} {toCurrency}
                </Text>
            )}
        </View>
    );
}