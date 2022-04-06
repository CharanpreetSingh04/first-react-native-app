import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Button} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [name, setName] = useState('Charanpreet');
  const [people, setPeople] = useState([
    {name: "A", key: '1'},
    {name: "B", key: '2'},
    {name: "C", key: '3'},
    {name: "D", key: '4'},
    {name: "E", key: '5'},
    {name: "F", key: '6'},
    {name: "G", key: '7'},
    {name: "H", key: '8'},
  ])
  const inputName = useRef();
  const clickHandler = () => {
      // console.log(inputName.current)
      setName('Charanpreet');
  }

  const pressHandler = (id) => {
    setPeople((prevPeople) => prevPeople.filter(person => person.key!==id))
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}> */}
        {/* <Text style={styles.bold}>Hi {name}</Text> */}
      <Header title="My app"/>
      {/* </View> */}
      <View style={styles.bodyElement}>
        {/* <Text>Enter name:</Text>
        <TextInput 
          style={styles.input} 
          ref={inputName}
          // keyboardType='numeric'
          // numeric keyboard is shown
          placeholder='e.g. Charanpreet'
          onChangeText={(val) => setName(val)}
        />
        <View style={styles.buttonContainer}>
          <Button title='Reinitialize Name' onPress={clickHandler}/>
        </View> */}
        <FlatList
          // keyExtractor={(item) => item.key}
          numColumns={2}
          data={people}
          renderItem={({item}) => (
            <TodoItem item={item} handler={pressHandler}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 2,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
    position: 'absolute'
  },
  header: {
    backgroundColor: 'pink',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  bodyElement: {
    backgroundColor: 'lightgreen',
    width: '100%',
    paddingLeft: '35%',
    paddingTop: 80,
    paddingBottom: 100,
    marginBottom: 5,
    height: 598,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  
  
});
