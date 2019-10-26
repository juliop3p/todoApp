import React, {useState, useEffect} from 'react';
import { StyleSheet, View, ScrollView, Button,} from 'react-native';

import api from './src/services/api'

import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoOutput from './components/TodoOutput'

export default function App() {
  const [todos, setTodos] = useState([])
  const [addTodo, setAddTodo] = useState(false)


  useEffect(() => {
    async function loadTodos() {
      const response = await api.get('/todos')
      setTodos(response.data)
    }

    loadTodos()
  }, [todos])


  handlePressNewTodo = async (todo) => {
    await api.post('/todos', {title: todo, completed: false})

    setAddTodo(!addTodo)
  }

  handlePressCheckbox = async (id) => { 
    let completed
    for(let todo of todos) {
      if(todo.id === id) {
        completed = !todo.completed
      }
    }

    await api.put(`/todos/${id}`, {completed})
  }

  handleDelete = async (id) => {
    await api.delete(`/todos/${id}`)
  }

  showAddScreen = () => {
    setAddTodo(!addTodo)
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.content}>
          <View style={{width: '100%', marginVertical: 20}}>
            <Button 
              title="Add New To-Do"
              color="rgb(10, 207, 53)"
              onPress={showAddScreen}
            />
          </View>
          {todos.map(todo => (
            <TodoOutput 
              key={todo.id} 
              handlePressCheckbox={handlePressCheckbox} 
              handleDelete={handleDelete} 
              listOfTodos={todo}
            />
          ))}
          <TodoInput 
            handlePressNewTodo={handlePressNewTodo} 
            visible={addTodo} 
            showAddScreen={showAddScreen}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    height: '100%'
  },
  content: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 30,
  }
})
