import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { destination, vacation_price } from './vacation';
import { useState } from 'react';
import FruitScreen from '../components/fruit';

export default function App() {

  type Person = {
    name: string; 
    age: number; 
    address: Address;
    vacation_destination: string;
    vacation_days: number;
  };

  type Address = {street: string; city: string};

  const name: string = "John Doe";
  let occupation: string = "Software Developer";
  const age: number = 30;
  const isEmployed: boolean = true;
  const hobbies: string[] = ["Reading", "Swimming", "Coding"];
  const scores: number[] = [10, 20, 30, 40, 50];
  const mixed_values: any[] = [10, "John Doe", true];
  const address: Address = {
    street: "123 Main Street",
    city: "New York",
  };
  const vacation_destination: string = "Hawaii";
  const vacation_days: number = 7;

  const person1: Person = {
    name,
    age,
    address,
    vacation_destination,
    vacation_days,
  };

  const person2: Person = {
    name: "Jane Doe",
    age: 32,
    address: {street: "123 Any Street", city: "Chicago"},
    vacation_destination: "Alaska",
    vacation_days: 12,
  }

  const [displayPerson, setDisplayPerson] = useState(person1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Welcome ${displayPerson.name}`}</Text>
      <Text style={styles.text}>{destination(displayPerson.vacation_destination)}</Text>
      <Text style={styles.text}>{`It will cost you $${vacation_price(displayPerson.vacation_destination, displayPerson.vacation_days)}`}</Text>
      <StatusBar style="auto" />
      <View>
        <TouchableOpacity onPress={() => {
          if(displayPerson.name === person1.name) setDisplayPerson(person2);
          else(setDisplayPerson(person1));
          alert("Person changed.");          
        }}>
          <Text>Click me</Text>
        </TouchableOpacity>
      </View>
      <FruitScreen />
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

  title: {fontSize: 30, fontWeight: "bold"},
  text: {fontSize: 20, margin: 5, color: "black"},
});
