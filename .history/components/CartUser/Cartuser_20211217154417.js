import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
const Cartuser = () => {
  return (
    <>
      <ScrollView>
        <View>
          <MapView
            style={Styles.container}
            provider={PROVIDER_GOOGLE}
            initialRegion={initialRegion}>
            <Marker
              coordinate={{
                latitude: 21.04639947170033,
                longitude: 105.78491492015995,
              }}>
              <Callout>
                <Image style={Styles.MarkerImage} />
                <Text style={Styles.MarkerText}>StarBuck Coffee Shop HH </Text>
              </Callout>
            </Marker>
          </MapView>
        </View>
      </ScrollView>
    </>
  );
};

export default Cartuser;
