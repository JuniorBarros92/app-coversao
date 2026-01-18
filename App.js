import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Button from './src/components/Button/index.js';
import { styles } from './src/styles/App.styles';
import {currencies} from './src/constants/currencies.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView style={styles.ScrollView} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Conversor de Moedas</Text>
          <Text style={styles.subTitle}>Converta valores entre diferentes moedas</Text>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.label}>De:</Text>
          <View>
            {currencies.map((currency) => (
              <Button variant="primary" onPress={() => {}} 
              key={currency.code} 
              currency={currency} />
            ))}
          </View>
          
        </View>
      </ScrollView>
    </View>
  );
}


