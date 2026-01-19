import { View, Text } from 'react-native';

export function ResultCard({ result }) {
    return (
        <View style={{ padding: 16, backgroundColor: '#1e293b', borderRadius: 8, marginTop: 16 }}>
            <Text style={{ color: '#ffffff', fontSize: 18 }}>Resultado: {result}</Text>
        </View>
    );
}
