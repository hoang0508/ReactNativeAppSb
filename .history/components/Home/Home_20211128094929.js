import {styles} from 'dom7';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <>
      <View style={styles.homePage}>
        <View style={styles.homeHeader}>
          <Image
            style={styles.homeBell}
            source={require('../../assets/images/bell.png')}
          />
          <Image
            style={styles.homeLogo}
            source={require('../../assets/images/logo.png')}
          />
          <Image
            style={styles.homeBar}
            source={require('../../assets/images/bar.png')}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  homePage: {
    backgroundColor: '#00623B',
  },
});

export default Home;
