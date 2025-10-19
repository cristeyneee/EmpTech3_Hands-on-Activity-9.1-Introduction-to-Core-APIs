import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Status from './components/Status'; // Custom network status bar

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* STATUS AREA */}
      <Status />

      {/* MESSAGE LIST AREA */}
      <View style={styles.messageList}>
        <Text style={styles.label}>MessageList</Text>
      </View>

      {/* TOOLBAR AREA */}
      <View style={styles.toolbar}>
        <Text style={styles.label}>Toolbar</Text>
      </View>

      {/* INPUT METHOD EDITOR AREA */}
      <View style={styles.inputMethodEditor}>
        <Text style={styles.label}>IME</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Main container for the app
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  // Main message display area
  messageList: {
    flex: 2,
    backgroundColor: '#FFB6B9', // pinkish background
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Toolbar area just above IME
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: 'white',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // IME (Input Method Editor) section
  inputMethodEditor: {
    flex: 1,
    backgroundColor: '#B6E2D3', // light teal
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Label text style
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
});
