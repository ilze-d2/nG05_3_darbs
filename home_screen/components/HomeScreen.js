import * as React from 'react';
import { Button, View, Text, } from 'react-native';
import { useState } from 'react';

export default function HomeScreen({ navigation,stock }) {
  const [counter, setCounter] = useState(0);
  return (
    <View style={{ flex: 1, alignItems: 'strech', justifyContent: 'flex-start' }}>
    <Button title="Go to List View" onPress={() => navigation.navigate ('Screen2')} /> 
    <Button title='Increase count'onPress={() => { setCounter(counter+1); }}/>
    <Button title='Decrease count'onPress={() => { setCounter(counter-1); }}/>
    <Text style={{marginBottom: 20}}> Counter value: {counter}</Text>
    <View style={{marginTop:30}}></View>
    </View>
  );
}