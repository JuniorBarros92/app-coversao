import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Button from "./src/components/Button/index";
import { currencies } from "./src/constants/currencies";
import { Input } from "./src/components/input/index";
import { ResultCard } from "./src/components/ResultCard/index";
import {fetchExchangeRates} from "./src/services/api";

const colors = {
  primary: '#2563eb',
  secondary: '#16a34a',
  background: '#0f172a',
  cardBackground: '#1e293b',
  inputBackground: '#334155',
  text: '#ffffff',
  textSecondary: '#94a3b8',
  disabled: '#334155',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  ScrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 24,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  label: {
    color: colors.textSecondary,
    marginBottom: 8,
    fontSize: 14,
  },
  currencyGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -4,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  swapButton: {
    backgroundColor: colors.inputBackground,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 24,
  },
  swapButtonText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 24,
  },
  converterButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 24,
  },
  converterButtonDisabled: {
    backgroundColor: colors.disabled,
  },
});

export default function App() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    ScrollView: {
      flex: 1,
    },
    content: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: 80,
      paddingBottom: 24,
    },
    header: {
      marginBottom: 32,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.text,
      marginBottom: 8,
    },
    subTitle: {
      fontSize: 16,
      color: colors.textSecondary,
    },
    card: {
      backgroundColor: colors.cardBackground,
      borderRadius: 16,
      padding: 24,
      marginBottom: 24,
    },
    label: {
      color: colors.textSecondary,
      marginBottom: 8,
      fontSize: 14,
    },
    currencyGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginHorizontal: -4,
      marginBottom: 12,
      alignItems: "center",
      justifyContent: "center",
    },
    swapButton: {
      backgroundColor: colors.inputBackground,
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 12,
      marginBottom: 24,
    },
    swapButtonText: {
      color: "#fff",
      fontWeight: "600",
      textAlign: "center",
      fontSize: 24,
    },
    converterButton: {
      backgroundColor: colors.primary,
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 12,
      marginBottom: 24,
    },
    converterButtonDisabled: {
      backgroundColor: colors.disabled,
    },
  });

  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BRL');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [exchangeRates, setExchangeRates] = useState(null);

  function handleConvert() {
    console.log('handleConvert called with amount:', amount, 'from:', fromCurrency, 'to:', toCurrency);
    if (!amount || isNaN(amount)) {
      console.log('Invalid amount, returning');
      return;
    }
    setLoading(true);
    setResult('');
    fetchExchangeRates(fromCurrency).then(data => {
      console.log('Data received:', data);
      setExchangeRates(data);
      const toSymbol = currencies.find(c => c.code === toCurrency).symbol;
      const rate = data[toCurrency];
      console.log('Rate for', toCurrency, ':', rate);
      const convertedAmount = parseFloat(amount) * rate;
      console.log('Converted amount:', convertedAmount);
      setResult(`${toSymbol} ${convertedAmount.toFixed(2)}`);
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
          <ResultCard result={result} fromCurrency={fromCurrency} toCurrency={toCurrency} amount={amount} exchangeRates={exchangeRates} />
      </ScrollView>
    </View>
  );
}
