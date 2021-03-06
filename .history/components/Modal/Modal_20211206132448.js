import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
const HomeModal = () => {
  // const [modalVisible, setModalVisible] = useStatete(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setOpen(true);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClickTimes = () => {
    setOpen(!open);
    return;
  };
  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          isVisible={true}
          animationType="slide"
          transparent={true}
          visible={open}
          hasBackdrop={true}
          backdropTransitionInTiming={300}
          backdropOpacity={0.9}
          backdropColor="black"
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            open(!setOpen);
          }}>
          <View style={styles.contentMoDal}>
            <View style={styles.modalView}>
              <Image
                style={styles.tinyLogo}
                source={require('../../assets/images/salem.jpeg')}
              />
              <Pressable
                style={[styles.btnModal, styles.buttonClose]}
                onPress={() => handleClickTimes()}>
                <Text style={styles.closeModal}>
                  <Icon1 name="times" style={styles.iconTimes} />
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    //position: 'relative',
  },
  tinyLogo: {
    width: 480,
    height: 350,
    resizeMode: 'contain',
    borderRadius: 10,
    flexShrink: 0,
  },
  contentMoDal: {
    //position: 'relative',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    position: 'relative',
    // height: 300,
  },
  buttonClose: {
    position: 'absolute',
    //right: 0,
    top: 0,
    right: 65,
  },
  closeModal: {
    width: 30,
    height: 30,
    lineHeight: 30,
    backgroundColor: '#ccc',
    textAlign: 'center',
    borderBottomLeftRadius: 10,
  },
  iconTimes: {
    fontSize: 20,
  },
});

export default HomeModal;
