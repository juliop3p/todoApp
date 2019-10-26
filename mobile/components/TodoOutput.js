import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'
import CheckBox from 'react-native-check-box'


export default function TodoOutput(props) {
    
    isChecked = () => {
        props.handlePressCheckbox(props.listOfTodos.id)
    }

    onDelete = () => {
        props.handleDelete(props.listOfTodos.id)
    }

    return (
        <View style={styles.outputContainer}>
            <CheckBox 
                isChecked={props.listOfTodos.completed}
                onClick={isChecked}
            /> 
            <TouchableHighlight underlayColor="rgba(255, 0, 0, 0.5)" onLongPress={onDelete} style={styles.todoContainer}>
                <Text
                    style={props.listOfTodos.completed ? styles.accomplished : styles.title} 
                >
                    {props.listOfTodos.title}
                </Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    outputContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginVertical: 5,
        flexDirection: 'row',
        paddingRight: 20,
    },
    todoContainer: {
        width: '100%',
    },
    title: {
        fontSize: 18,
        marginLeft: 5,
    },
    accomplished: {
        color: '#aaa',
        textDecorationLine: 'line-through',
        fontStyle: 'italic',
        fontSize: 17,
    },
})