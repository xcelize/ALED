import {Contact} from '../Types/Contact';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import ModalForm from './ModalForm';

interface TypesProps {
  item: Contact;
  setModalState: Dispatch<SetStateAction<boolean>>;
  modalState: boolean;
}

const ContactItem = ({item, modalState, setModalState}: TypesProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.title}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
            {item.givenName}
          </Text>
        </View>
        <View style={styles.number}>
          <Text style={{color: 'black'}}>Num: {item.phoneNumber}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => console.log('Alexis press')}
          style={styles.button}>
          <Text style={styles.textButton}>Appeler</Text>
        </Pressable>
        <Pressable
          style={styles.buttonEdit}
          onPress={() => setModalState(!modalState)}>
          <Text style={styles.textButton}>Modifier</Text>
        </Pressable>
        <ModalForm
          setModalState={setModalState}
          modalState={modalState}
          item={item}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderStyle: 'solid',
    marginVertical: 5,
  },
  title: {
    flex: 1,
    fontSize: 25,
    alignContent: 'flex-start',
    fontWeight: 'bold',
  },
  number: {
    flex: 1,
    fontSize: 10,
    alignContent: 'flex-start',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    backgroundColor: 'rgb(85,0,255)',
    alignItems: 'center',
    marginRight: 5,
  },
  buttonEdit: {
    flex: 1,
    backgroundColor: 'rgb(143,28,86)',
    alignItems: 'center',
    marginRight: 5,
  },
  textButton: {
    top: 10,
    fontFamily: 'Roboto',
    color: 'white',
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 2,
    paddingLeft: 10,
  },
});
export default ContactItem;
