import React from "react";
import { Button, View } from "react-native";


 type DecrementProps = { value: number; setValue: (value: number) => void };

 const Decrement: React.FC<DecrementProps> = ({ value, setValue }) => {
   const handleIncrement = () => {
     setValue(value - 1);
   };

   return (
     <View>
       <Button title="-" onPress={handleIncrement} />
     </View>
   );
 };

 export default Decrement;