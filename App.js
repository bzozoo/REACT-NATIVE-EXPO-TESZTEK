import * as React from "react";
import { View, Text, Button, StyleSheet, TouchableNativeFeedback } from "react-native";
import { ScrollView, GestureHandlerRootView } from "react-native-gesture-handler";
//import { ScrollView } from "react-native-virtualized-view";
import DropDownPicker from "react-native-dropdown-picker";

export default function App() {
   const [myArray, setMyArray] = React.useState([]);
   const [open, setOpen] = React.useState(false);
   const [value, setValue] = React.useState(null);
   const [items, setItems] = React.useState([
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Orange", value: "orange" },
      { label: "Lemon", value: "lemon" },
      { label: "Citron", value: "citron" },
      { label: "Watermelon", value: "watermelon" },
      { label: "Other", value: "other" },
   ]);

   return (
      <GestureHandlerRootView>
         <ScrollView nestedScrollEnabled={true}>
            <View style={styles.container}>
               <Button title="Check" />
               <Text>Hello world</Text>
               <Button title="Check" />
               <Text>Hello world</Text>
               <Button title="Check" />
               <Text>Hello world</Text>
               <Button title="Check" />
               <Text>Hello world</Text>
               <Button title="Check" />
               <Text>Hello world</Text>
               <Button title="Check" />
               <Text>Hello world</Text>
               <Button title="Check" />
               <Text>Hello world</Text>
               <Button title="Check" />
               <Text>Hello world</Text>
               <Button title="Check" />
               <Text>Hello world</Text>
               <DropDownPicker
                  zIndex={2000}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  containerStyle={{
                     padding: 10,
                     backgroundColor: "red",
                     position: "relative",
                  }}
                  dropDownDirection="BOTTOM"
                  dropDownContainerStyle={{
                     backgroundColor: "yellow",
                     zIndex: 5000,
                     position: "absolute",
                  }}
                  listMode="SCROLLVIEW"
               />

               <View style={{ zIndex: 0, backgroundColor: "pink" }}>
                  <TouchableNativeFeedback>
                     <Text>Check</Text>
                  </TouchableNativeFeedback>
                  <Text>Hello world</Text>
                  <Button
                     title="Check"
                     onPress={() => {
                        console.log("WHY???");
                     }}
                  />
                  <Text>Hello world</Text>
                  <Button title="Check" />
                  <Text>Hello world</Text>
                  <Button title="Check" />
                  <Text>Hello world</Text>
                  <Button title="Check" />
                  <Text>Hello world</Text>
                  <Button title="Check" />
                  <Text>Hello world</Text>
                  <Button title="Check" />
                  <Text>Hello world</Text>
                  <Button title="Check" />
                  <Text>Hello world</Text>
                  <Button title="Check" />
                  <Text>Hello world</Text>
                  <Button title="Check" />
                  <Text>Hello world</Text>
               </View>
            </View>
         </ScrollView>
      </GestureHandlerRootView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
   },
});
