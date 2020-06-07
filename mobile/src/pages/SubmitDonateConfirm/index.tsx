import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

const SubmitDonateConfirm: React.FC = () => {

  const navegation = useNavigation();

  function navegateToHome() {
    navegation.navigate('Home');
  }
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Cadastro realizado com sucesso.</Text>
        <RectButton style={styles.button} onPress={navegateToHome}>
            <Text style={styles.buttonText}>
              OK
            </Text>
          </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#FF004E',
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#FFF',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 34,
    textAlign: 'center',
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#FFFFFF',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 128,
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
    color: '#FF004E',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default SubmitDonateConfirm;