import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import * as React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {RootStackParamList} from '../../App';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

type DashboardScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;
type DashboardScreenRouteProp = RouteProp<RootStackParamList, 'LoginScreen'>;
export type DashboardScreenProps = {
  navigation: DashboardScreenNavigationProp;
  route: DashboardScreenRouteProp;
};

export function DashboardScreen({navigation, route}: DashboardScreenProps) {
  const [input, setInput] = React.useState('');
  const [inputErr, setInputErr] = React.useState('');
  const [noList, setNoList] = React.useState<string[]>([]);

  const BackButton = (
    <TouchableOpacity
      onPress={() => navigation.replace('LoginScreen')}
      style={{marginVertical: 20}}>
      <Text style={{color: '#1565c0', fontSize: 16}}>Logout</Text>
    </TouchableOpacity>
  );

  const addNew = () => {
    if (input.length < 10) {
      setInputErr('Enter valid phone number');
    } else {
      setInputErr('');
      setNoList(list => [...list, input]);
      setInput('');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '20%',
      }}>
      <View style={{width: '100%', padding: 20}}>
        <View style={{justifyContent: 'flex-end'}}>{BackButton}</View>
        <CustomInput
          value={input}
          onChangeText={setInput}
          placeholder="Enter mobile number"
          errorMsg={inputErr}
        />
        <CustomButton title="Add" onPress={addNew}></CustomButton>
        <View style={{marginVertical: 10}}>
          <FlatList
            data={noList}
            renderItem={({item}) => (
              <View
                style={{
                  borderColor: '#888',
                  padding: 10,
                  borderWidth: 1,
                  marginBottom: 10,
                }}>
                <Text>{item}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
