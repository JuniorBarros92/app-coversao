import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Button from './src/components/Button/index.js';
import { styles } from './src/styles/App.styles';

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
          <Button variant="secondary" onPress={() => {}} />
        </View>
      </ScrollView>
    </View>
  );
}


