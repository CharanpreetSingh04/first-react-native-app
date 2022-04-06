import { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Button} from 'react-native';

export default function Header(props){
    const title = props.title;
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
})