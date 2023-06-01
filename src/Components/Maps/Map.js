import React,{useState,useEffect} from 'react';
import {StyleSheet, View, useWindowDimensions,Image,Text,ImageBackground,PermissionsAndroid} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import Geolocation from 'react-native-geolocation-service';
MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(
  `pk.eyJ1IjoidW1hcnJhc2hlZWQiLCJhIjoiY2xneGZkeW8yMDFleTNnbXNhbXE2ZXUzaCJ9.bg4UxxXQM4o-H3e2S3elQQ`,
);
const Map = () => {
  const {height, width} = useWindowDimensions();
  const [lat,setlat]=useState(31.5915);
  const [long,setlong]=useState(74.4716);
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  function success(pos) {
    const crd = pos.coords;
  setlat(31.6372);
  setlong(74.5038)
  console.log(pos)
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`); 
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn("Error in fetch", err);
  }
};
  // useEffect(() => {
  //   requestCameraPermission();
  //   Geolocation.getCurrentPosition(success, error, options);
   
  // }, [long,lat])
  
  // Traking Line
  const [route, setRoute] = useState({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: [
            [long, lat],
            [67.0011, 24.8607],
          ],
        },
      },
    ],
  });
// Poligon shape
const [polygon, setPolygon] = useState({
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [long, lat],
        [long, lat],
        [74.3502,lat ],
        [long, lat],
      ],
    ],
  },
});

  // Destination
  const RenderAnnotations = () => {
    return (
      <MapboxGL.PointAnnotation
        key="pointAnnotation"
        id="pointAnnotation"
        coordinate={[long, lat]}
      >
        <View
          style={{
            height: 30,
            width: 30,
            backgroundColor: "red",
            borderRadius: 50,
            borderColor: "#fff",
            borderWidth: 3,
          }}
        />
      </MapboxGL.PointAnnotation>
    );
  };
// useEffect(() => {
//   // const watchId = navigator.geolocation.watchPosition(
//   //   (position) => {
//   //     console.log(position.coords.latitude);
//   //     console.log(position.coords.longitude)
//   // console.log(navigator)
//   //   },
//   //   (error) => {
//   //     console.log(error);
//   //   }
//   // );

//   // return () => navigator.geolocation.clearWatch(watchId);
  
//     Geolocation.getCurrentPosition(
//         (position) => {
//           setCoordinatesexample([position.coords.longitude,position.coords.latitude]);
//         },
//         (error) => {
//           // See error code charts below.
//           console.log(error.code, error.message);
//         },
//         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
  
//   },[]);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        
        <MapboxGL.MapView
          style={styles.map}
          // styleURL={MapboxGL.StyleURL.Black}
          // styleURL={MapboxGL.StyleURL.Street}
          >
            
          <MapboxGL.Camera
            zoomLevel={11}
            centerCoordinate={[long,lat]}
          >
            {/* Shape added */}
            <MapboxGL.ShapeSource id="line" shape={route}>
    <MapboxGL.LineLayer
      id="linelayer1"
      style={{ lineColor: "green", lineWidth: 5 }}
      />
</MapboxGL.ShapeSource>

            </MapboxGL.Camera>
      
          {/* <View>{RenderAnnotations()}</View> */}
          {/* Adding Marker */}
          <MapboxGL.MarkerView id={"marker"} coordinate={[long,lat]}>
            <View>
              <View style={styles.markerContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>{"Bata Pur"}</Text>
                </View>
                 <ImageBackground
                source={require("../../assets/High.png")}
                style={{
                  width:50,
                  height:50,
                  transform: [{rotate: '100deg'}], 
                }}
                resizeMode='contain'
                />
                
              </View>
            </View> 
   </MapboxGL.MarkerView>
   <MapboxGL.ShapeSource id="source" shape={route}>
          {/* <MapboxGL.FillLayer id="fill" style={{ fillColor: "blue" }} /> */}
           <MapboxGL.LineLayer
            id="lineString"
            style={{ lineColor: "red", lineWidth: 2 }}
          />
</MapboxGL.ShapeSource>
                  
          {/* Adding Marker */}
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'50%'
  },
  container: {
    height: '100%',
    width: '100%',
    position:"relative"
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    alignItems: "center",
    width: 60,
    backgroundColor: "transparent",
    height: 70,
  },
  textContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    paddingHorizontal: 5,
    flex: 1,
  },

});
