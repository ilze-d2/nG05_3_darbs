import * as React from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const Second2 = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Jhon Doe 1'},
          {key: 'Jhon Doe 2'},
          {key: 'Jhon Doe 3'},
          {key: 'Jhon Doe 4'},
          {key: 'Jhon Doe 5'},
          {key: 'Jhon Doe 6'},
          {key: 'Jhon Doe 7'},
          {key: 'Jhon Doe 8'},
          {key: 'Jhon Doe 9'},
          {key: 'Jhon Doe 10'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default Second2;







 