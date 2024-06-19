import React, { useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Contact = ({ navigation }) => {
  useEffect(() => {
    const beforeRemoveListener = navigation.addListener('beforeRemove', (event) => {
      event.preventDefault();
      Alert.alert(
        'Konfirmasi',
        'Apakah Anda yakin ingin keluar?',
        [
          {
            text: 'Tidak',
            style: 'cancel',
            onPress: () => {},
          },
          {
            text: 'Ya',
            style: 'destructive',
            onPress: () => navigation.dispatch(event.data.action),
          },
        ]
      );
    });

    // Cleanup the event listener on component unmount
    return () => {
      navigation.removeListener('beforeRemove', beforeRemoveListener);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nama Anda" style={styles.textInput} />
      <TextInput placeholder="Pesan" style={styles.textInput} />
      <View style={styles.buttonContainer}>
        <Button title="Kirim" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  textInput: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default Contact;
