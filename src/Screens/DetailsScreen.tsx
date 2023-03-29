import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import * as React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {RootStackParamList} from '../../App';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import {H3, SubText} from '../components/Typography';
import {SecondsToTimer} from '../utils/timer';

type VerifyScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'VerifyScreen'
>;
type VerifyScreenRouteProp = RouteProp<RootStackParamList, 'VerifyScreen'>;
export type VerifyScreenProps = {
  navigation: VerifyScreenNavigationProp;
  route: VerifyScreenRouteProp;
};

export function DetailsScreen({navigation, route}: VerifyScreenProps) {
  const {mobileNo} = route.params;
  const [timerSeconds, setTimerSeconds] = React.useState(90);
  const [otp, setOtp] = React.useState('');
  const [otpErr, setOtpErr] = React.useState('');

  React.useEffect(() => {
    let timer = setInterval(() => {
      setTimerSeconds(seconds => seconds - 1);
    }, 1000);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  const verify = () => {
    if (otp === '9999') {
      navigation.navigate('Dashboard');
    } else {
      setOtpErr('Verification failed!');
    }
  };
  const BackButton = (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{marginVertical: 20}}>
      <Text style={{color: '#1565c0', fontSize: 16}}>Back</Text>
    </TouchableOpacity>
  );
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        {BackButton}
        <H3>Enter OTP</H3>
        <View style={{marginTop: 10, marginBottom: 20, paddingRight: 40}}>
          <SubText>
            We have sent a one time password(OTP) to ****{mobileNo.slice(-4)}
          </SubText>
        </View>

        <View>
          <CustomInput
            placeholder="OTP"
            value={otp}
            onChangeText={setOtp}
            errorMsg={otpErr}
          />
          {timerSeconds > 0 ? (
            <SubText>Resend OTP in {SecondsToTimer(timerSeconds)}</SubText>
          ) : (
            <TouchableOpacity onPress={() => setTimerSeconds(90)}>
              <Text style={{color: '#1565c0', fontSize: 10}}>Resend OTP</Text>
            </TouchableOpacity>
          )}
          <CustomButton title="Verify" onPress={verify}></CustomButton>
        </View>
      </View>
    </View>
  );
}
