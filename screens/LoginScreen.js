import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');

  const handleLogin = () => {
    // Simple validation
    if (username.trim() === '') {
      alert('Please enter a username');
      return;
    }
    // Navigate to Homepage
    navigation.navigate('Homepage');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20, width: 200 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;