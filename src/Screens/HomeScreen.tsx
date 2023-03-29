import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import * as React from 'react';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../../App';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import {H3} from '../components/Typography';
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'LoginScreen'>;
export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

export function HomeScreen({navigation}: HomeScreenProps) {
  const [number, onChangeNumber] = React.useState('');
  const [error, setError] = React.useState('');

  const onSubmit = () => {
    const invalid = number.length < 10;

    setError(invalid ? 'Please enter valid phone number' : '');
    if (invalid) return;

    navigation.navigate('VerifyScreen', {mobileNo: number});
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{width: '100%', paddingHorizontal: 16}}>
        <H3>Getting Started</H3>
        <CustomInput
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Mobile Number"
          keyboardType="numeric"
          errorMsg={error}
        />
        <CustomButton onPress={onSubmit} title="Continue" />
      </View>
    </View>
  );
}
