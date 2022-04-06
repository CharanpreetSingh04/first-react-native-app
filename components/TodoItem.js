import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Button} from 'react-native';

export default function TodoItem(props){
    const { item } = props;

    return(
        <TouchableOpacity onPress={() => props.handler(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item: {
        marginTop: 16,
        padding: 16,
        // backgroundColor: 'pink',
        fontSize: 24,
        marginHorizontal: 10,
        marginTop: 24,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },
})