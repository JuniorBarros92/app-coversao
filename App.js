import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Button from "./src/components/Button/index.js";
import { styles } from "./src/styles/App.styles";
import { currencies } from "./src/constants/currencies.js";
import { Input } from "./src/components/input/index.js";
import { ResultCard } from "./src/components/ResultCard/index.js";
import {fetchExchangeRates} from "./src/services/api.js";

export default function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BRL');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [exchangeRates, setExchangeRates] = useState(null);

  function handleConvert() {
    if (!amount || isNaN(amount)) return;
    setLoading(true);
    setResult('');
    fetchExchangeRates(fromCurrency).then(data => {
      const rate = data[toCurrency];
      const convertedAmount = parseFloat(amount) * rate;
      setResult(convertedAmount.toFixed(2));
    }).catch(error => {
      console.error('Error fetching exchange rates:', error);
      setResult('Erro na conversão');
    }).finally(() => {
      setLoading(false);
    });
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView
        style={styles.ScrollView}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Conversor de Moedas</Text>
          <Text style={styles.subTitle}>
            Converta valores entre diferentes moedas
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>De:</Text>
          <View style={styles.currencyGrid}>
            <View />

            {currencies.map((currency) => (
              <Button
                variant="primary"
                
                key={currency.code}
                currency={currency}
                onPress={() => setFromCurrency(currency.code)}
                isSelected={fromCurrency === currency.code}
              />
            ))}
          </View>
          <Input label="valor: " value={amount} onChangeText={setAmount} />

          <TouchableOpacity style={styles.swapButton}>
            <Text style={styles.swapButtonText}>↑↓</Text>
          </TouchableOpacity>
          <Text style={styles.label}>Para:</Text>
          <View style={styles.currencyGrid}>
            <View />

            {currencies.map((currency) => (
              <Button
                variant="secondary"
                
                key={currency.code}
                currency={currency}
                onPress={() => setToCurrency(currency.code)}
                isSelected={toCurrency === currency.code}
              />
            ))}
          </View>
        </View>
        <TouchableOpacity style={[styles.converterButton, loading && styles.converterButtonDisabled]}
        onPress={handleConvert} disabled={loading}>
            <Text style={styles.swapButtonText}>{loading ? 'Convertendo...' : 'Converter'}</Text>
          </TouchableOpacity>
          <ResultCard result={result} />
      </ScrollView>
    </View>
  );
}
