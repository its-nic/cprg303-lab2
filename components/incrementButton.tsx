import React from "react";
import { Button, View } from "react-native";


 type IncrementProps = { value: number; setValue: (value: number) => void };

 const Increment: React.FC<IncrementProps> = ({ value, setValue }) => {
   const handleIncrement = () => {
     setValue(value + 1);
   };

   return (
     <View>
       <Button title="+" onPress={handleIncrement} />
     </View>
   );
 };

 export default Increment;