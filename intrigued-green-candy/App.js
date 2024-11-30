import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleOperation = (operation) => {
    if (firstNumber === '' || secondNumber === '') {
      Alert.alert('Missing Input', 'Please enter both numbers.');
      return;
    }

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Invalid input');
      return;
    }

    let res;
    switch (operation) {
      case 'add':
        res = num1 + num2;
        break;
      case 'subtract':
        res = num1 - num2;
        break;
      case 'multiply':
        res = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          Alert.alert('Invalid Operation', 'Division by zero is not allowed.');
          return;
        }
        res = num1 / num2;
        break;
      default:
        return;
    }
    setResult(res);
  };

  const handleReset = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.backButton}>Back</Text>
        <Text style={styles.title}>Calculator App</Text>
        <View style={{ width: 50 }}></View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter First Number"
          keyboardType="numeric"
          value={firstNumber}
          onChangeText={setFirstNumber}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Second Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Second Number"
          keyboardType="numeric"
          value={secondNumber}
          onChangeText={setSecondNumber}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleOperation('add')}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={() => handleOperation('subtract')}>
          <Text style={styles.buttonText}>Subtract</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperation('multiply')}>
          <Text style={styles.buttonText}>Multiply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperation('divide')}>
          <Text style={styles.buttonText}>Divide</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.label}>Result</Text>
        <Text style={styles.result}>{result !== null ? result : ''}</Text>
      </View>
      <TouchableOpacity onPress={handleReset}>
        <Text style={styles.resetButton}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    color: '#007AFF',
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
    fontSize: 16,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resultContainer: {
    marginBottom: 20,
  },
  result: {
    fontSize: 20,
    marginTop: 5,
  },
  resetButton: {
    color: '#007AFF',
    textAlign: 'center',
    fontSize: 16,
  },
});
