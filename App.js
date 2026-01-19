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

  async function handleConvert() {
    const data = await fetchExchangeRates('BRL');
    console.log(data);
  }
  const [inputValue, setInputValue] = useState('');
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
                onPress={() => {}}
                key={currency.code}
                currency={currency}
              />
            ))}
          </View>
          <Input label="valor: " value={inputValue} onChangeText={setInputValue} />

          <TouchableOpacity style={styles.swapButton}>
            <Text style={styles.swapButtonText}>↑↓</Text>
          </TouchableOpacity>
          <Text style={styles.label}>Para:</Text>
          <View style={styles.currencyGrid}>
            <View />

            {currencies.map((currency) => (
              <Button
                variant="secondary"
                onPress={() => {}}
                key={currency.code}
                currency={currency}
              />
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.converterButton}
        onPress={handleConvert}>
            <Text style={styles.swapButtonText}>Converter</Text>
          </TouchableOpacity>
          <ResultCard />
      </ScrollView>
    </View>
  );
}
