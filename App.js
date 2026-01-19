import { StatusBar } from "expo-status-bar";
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

export default function App() {
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
          <Input label="valor: " />

          <TouchableOpacity style={styles.swapButton} >
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
          <Input label="valor: " />
        </View>
      </ScrollView>
    </View>
  );
}
