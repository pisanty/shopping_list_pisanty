import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [data, setData] = useState([]);

  const addItem = () => {
    setData([...data , { key: `${item}` }]);
    setItem('');
  }

  const clearList = () => {
    setData('');
    setItem('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextInput
          style = {{fontSize: 20, width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText = {text => setItem(text)}
          value = {String(item)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title = " Add "  onPress={addItem} />
        <Button title = " Clear "  onPress={clearList} />
      </View>
      <View style={styles.listcontainer}>
        <Text style= {{fontSize: 25}}>Shopping List:</Text>
        <FlatList
          data={data}
          renderItem={({item}) => <Text style= {{fontSize: 20}}>{item.key}</Text>}
          keyExtractor={((item, index) => index.toString())}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 1,
    width: 150,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 10,
  },
  listcontainer: {
    flex: 4,
    width: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
});
