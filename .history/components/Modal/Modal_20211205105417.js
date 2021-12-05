import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Pressable, Modal} from 'react-native';
const Hoang = () => {
  // const [modalVisible, setModalVisible] = useStatete(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 3000);
    return () => {
      clearTimeout;
    };
  });
  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={open}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            open(!setOpen);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.btnModal, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.closeModal}>X</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default Hoang;
