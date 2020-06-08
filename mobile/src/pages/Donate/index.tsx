import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { StyleSheet, View, KeyboardAvoidingView, Image, Text, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';

const Donate: React.FC = () => {

  const navegation = useNavigation();

  const placeholderSpecies = {
    label: 'Escolha a espécie...',
    value: null,
    color: '#FF004E',
  };

  const placeholderBreed = {
    label: 'Escolha a raça...',
    value: null,
    color: '#FF004E',
  };

  const placeholderGender = {
    label: 'Escolha o sexo...',
    value: null,
    color: '#FF004E',
  };

  const placeholderAge = {
    label: 'Escolha a idade...',
    value: null,
    color: '#FF004E',
  };

  const placeholderUf = {
    label: 'Escolha o estado...',
    value: null,
    color: '#FF004E',
  };

  const placeholderCity = {
    label: 'Escolha a cidade...',
    value: null,
    color: '#FF004E',
  };

  function handleSubmit() {
    navegation.navigate('SubmitDonateConfirm');
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#FFF" }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <View style={styles.main}>
          <Image style={{width: 151, height: 146}} source={require('../../assets/logo.png')} />
        </View>
        <View style={styles.footer}>

          <RNPickerSelect
            placeholder={placeholderSpecies}
            onValueChange={(value) => console.log(value)}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
            items={[
                { label: 'Cachorro', value: 'football' },
                { label: 'Gato', value: 'baseball' },
                { label: 'Coelho', value: 'hockey' },
            ]}
          />

          <RNPickerSelect
            placeholder={placeholderBreed}
            onValueChange={(value) => console.log(value)}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
            items={[
                { label: 'Poodle', value: 'football' },
                { label: 'Pincher', value: 'baseball' },
                { label: 'Vira-latas', value: 'hockey' },
            ]}
          />

          <RNPickerSelect
            placeholder={placeholderGender}
            onValueChange={(value) => console.log(value)}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
            items={[
                { label: 'Macho', value: 'football' },
                { label: 'Fêmea', value: 'baseball' },
            ]}
          />

          <RNPickerSelect
            placeholder={placeholderAge}
            onValueChange={(value) => console.log(value)}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
            items={[
                { label: '< 1 Ano', value: 'football' },
                { label: 'Entre 1 e 2 anos', value: 'baseball' },
                { label: 'Entre 2 e 3 anos', value: 'hockey' },
            ]}
          />

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

          <RectButton style={styles.button} onPress={handleSubmit}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color="#FFF" size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}>
              Salvar Cadastro
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {},

  button: {
    backgroundColor: '#FF004E',
    height: 55,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 18,
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
    backgroundColor: '#FFF',
    fontSize: 16,
    paddingVertical: 1,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 4,
    color: 'black',
    fontFamily: 'Roboto_500Medium',
    marginBottom: 8,
    height: 50,
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
    height: 55,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default Donate;