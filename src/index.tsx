
import { Text, View } from 'react-native';
import React from 'react';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function ViewDemo() {
  return (
    <View>
      <Text>Hello I'm Thomas</Text>
    </View>
  );
}
