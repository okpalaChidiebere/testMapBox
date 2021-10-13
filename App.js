import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("<YOUR_MAPBOX_ACCESS_TOKEN>");

export default function App() {
  const [coordinates, setCoordinates] = React.useState([-73.99155, 40.73581]);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.mapContainer}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera zoomLevel={8} centerCoordinate={coordinates} />
          <MapboxGL.PointAnnotation coordinate={coordinates} id="Test" />
        </MapboxGL.MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "blue",
  },
  map: {
    flex: 1,
  },
});
