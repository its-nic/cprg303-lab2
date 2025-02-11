import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import IncrementButton from '../components/incrementButton';
import DecrementButton from '../components/decrementButton';

export default function Lab3() {

  const [count, setCount] = useState(0);


  return (
    <View style={styles.container}>
      <Text>Lab 3</Text>
      <Text>Count: {count}</Text>
      <IncrementButton value={count} setValue={setCount} />
      <DecrementButton value={count} setValue={setCount}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
