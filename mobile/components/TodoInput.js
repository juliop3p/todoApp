import React, {useState} from 'react'
import {View, Text, Button, TextInput, StyleSheet, Modal} from 'react-native'

export default function TodoInput(props) {
    const [todo, setTodo] = useState('')

    handleChange = (todo) => {
        setTodo(todo)
    }

    handlePressAdd = () => {
        if(todo.length > 0) {
            props.handlePressNewTodo(todo)
            setTodo('')
        }
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="New todo"
                    style={styles.input}
                    onChangeText={handleChange}
                    value={todo}
                />
                <View style={styles.btns}>
                    <Button 
                        title="Add to-do"
                        color="rgb(10, 207, 53)"
                        onPress={handlePressAdd}
                    />
                </View>
                <View style={styles.btns}>
                    <Button 
                        title="CANCEL"
                        color="#e30b1d"
                        onPress={props.showAddScreen}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 5,
        marginVertical: 10,
        textAlign: 'center',
        width: '100%',
    },
    btns: {
        marginVertical: 10,
        width: '100%',
    }
})