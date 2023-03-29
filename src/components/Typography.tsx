import {Text, TextProps} from 'react-native';
import React from 'react';

export function H3(props: TextProps) {
  return (
    <Text style={{fontSize: 24, fontWeight: '700'}} {...props}>
      {props.children}
    </Text>
  );
}
export function SubText(props: TextProps) {
  return (
    <Text style={{fontSize: 14, color: '#999'}} {...props}>
      {props.children}
    </Text>
  );
}
