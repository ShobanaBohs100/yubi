import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';
import React from 'react';

export default function CustomInput({
  customStyle = {},
  errorMsg = '',
  ...props
}: TextInputProps & {
  customStyle?: StyleProp<TextStyle>;
  errorMsg?: string;
}) {
  const isError = !!errorMsg;
  const errorStyle = isError ? {borderColor: 'red'} : {};
  return (
    <View style={{}}>
      <TextInput
        style={[
          {
            height: 40,
            borderWidth: 1,
            marginVertical: 10,
            padding: 10,
            borderRadius: 5,
            borderColor: '#AAA',
          },
          customStyle,
          errorStyle,
        ]}
        {...props}
      />
      <Text style={{color: 'red'}}>{isError && errorMsg}</Text>
    </View>
  );
}
