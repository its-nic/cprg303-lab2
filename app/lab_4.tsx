import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { VacationDestination } from '../constants/list_items';
import vacationDestinations from '../constants/list_items';

export default function Lab4() {

  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
};


  return (
    <View>
      <Text>Lab 4: Vacation destinations:</Text>
      <View>
        {vacationDestinations.map((destination: VacationDestination) => (
           <TouchableOpacity
           key={destination.id}
           style={styles.container}

           onPress={() => toggleSelection(destination.id)}
         >
           <Text>
             {selected.includes(destination.id) ? '✅' : '⬜'}{destination.location}
           </Text>
           <Text>Price: {destination.price}</Text>
           <Text>Average Temp: {destination.average_yearly_temperature}</Text>
         </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    maxWidth: 200,
    borderRadius: 10,
  },
});
