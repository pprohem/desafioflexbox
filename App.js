import { StyleSheet, Text, View } from 'react-native';
import Superior from './src/components/parteSuperior';
import Inferior from './src/components/parteInferior';

export default function App() {
  return (
    <View style={styles.container}>
      <Superior/>
      <Inferior/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB6C1',
    alignItems: 'center',
    marginTop: 25
    
  },
});
