import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import PhonesContact from '../Assets/number.json';
import {Contact} from '../Types/Contact';
import {useDispatch, useSelector} from 'react-redux';
import {AnyAction} from 'redux';
import {SETCONTACTS} from '../Store/Actions/Contact';
import ContactItem from './ContactItem';

const ContactsList = () => {
  const [contacts, setContacts] = useState<Contact[]>(PhonesContact);
  const [modalState, setModalState] = useState(false);
  const dispach = useDispatch();
  const contactReducer = useSelector((state: AnyAction) => state.contacts);
  useEffect(() => {
    dispach({
      type: SETCONTACTS,
      value: {
        recordID: '4',
        phoneNumber: '0989098789',
        givenName: 'Lola',
        familyName: 'test',
      },
    });
  }, []);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Safety</Text>
        </View>
        <FlatList
          data={contacts}
          renderItem={({item}) => (
            <ContactItem
              item={item}
              modalState={modalState}
              setModalState={setModalState}
            />
          )}
          keyExtractor={item => item.recordID.toString()}></FlatList>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.buttonAddContainer}
            onPress={() => setModalState(!modalState)}>
            <Text style={styles.buttonText}>AJOUTER</Text>
          </Pressable>
          {/*<ModalForm setModalState={setModalState} modalState={modalState} />*/}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  title: {
    fontSize: 25,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonAddContainer: {
    borderRadius: 15,
    backgroundColor: 'rgb(85,0,255)',
    width: '50%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default ContactsList;
