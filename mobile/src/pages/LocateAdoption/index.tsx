import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { StyleSheet, View, KeyboardAvoidingView, Image, Text, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';


const LocateAdoption: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToAdoption() {
    navigation.navigate('Adoption');
  }

  const placeholderUf = {
    label: 'Escolha o estado...',
    value: null,
    color: '#9EA0A4',
  };

  const placeholderCity = {
    label: 'Escolha a cidade...',
    value: null,
    color: '#9EA0A4',
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#FFF" }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')} />
          <Text style={styles.title}>Adotar</Text>
        </View>

        <View style={styles.footer}>
          <RNPickerSelect
            placeholder={placeholderUf}
            onValueChange={(value) => console.log(value)}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
            items={[
                { label: 'BA', value: 'football' },
                { label: 'PE', value: 'baseball' },
                { label: 'SP', value: 'hockey' },
            ]}
          />

          <RNPickerSelect
            placeholder={placeholderCity}
            onValueChange={(value) => console.log(value)}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
            items={[
                { label: 'Salvador', value: 'football' },
                { label: 'Recife', value: 'baseball' },
                { label: 'São Paulo', value: 'hockey' },
            ]}
          />

          <RectButton style={styles.button} onPress={handleNavigateToAdoption}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color="#FFF" size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}>
              Entrar
            </Text>
          </RectButton>
        </View>

      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 40,
  },

  footer: {},

  button: {
    backgroundColor: '#FF004E',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 50,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    paddingRight: 30,
  }
  
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 4,
    color: 'black',
    fontFamily: 'Roboto_500Medium',
    marginBottom: 12,
    height: 60,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
    color: 'black',
    fontFamily: 'Roboto_500Medium',
    marginBottom: 12,
    height: 60,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default LocateAdoption;