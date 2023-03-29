import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({
  onPress,
  title,
}: {
  onPress: () => void;
  title: string;
}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 14,
    marginVertical: 10,
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
