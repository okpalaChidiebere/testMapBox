# MapBox

Why choose Mapbox over React Native Maps? Learn [here](https://www.uptech.team/blog/mapbox-vs-google-maps-vs-openstreetmap)

# Installing Mapbox

- Make sure you created and [account](https://account.mapbox.com/) and get your accessToken
- Run `yarn add @react-native-mapbox-gl/maps`
- Go to ios/Podfile and add:

```pod
pre_install do |installer|
    $RNMBGL.pre_install(installer)
    ... other pre install hooks
  end
```

```pod
 post_install do |installer|
    $RNMBGL.post_install(installer)
    ... other post install hooks
  end
```

Make sure to run `cd ios && pod install && cd ..`

- Go to android/app/build.gradle and add:

```groovy
dependencies {
    .... other dependencies
    implementation "com.mapbox.mapboxsdk:mapbox-android-telemetry:6.1.0"
}
```

- Then run your app on iOS or Android
- Full documentation [react-native-mapbox-gl/maps](https://github.com/react-native-mapbox-gl/maps) and besure to check out the [example](https://github.com/react-native-mapbox-gl/maps/tree/master/example/src)
- [static maps in Mapbox](https://www.mapbox.com/static-maps)

# More useful links

- [Build Awesome Map Apps with React Native and Mapbox](https://javascript.plainenglish.io/build-awesome-map-apps-with-react-native-and-mapbox-6f0709fd5efa)
- [https://techblog.geekyants.com/implementing-mapbox-on-react-native](https://techblog.geekyants.com/implementing-mapbox-on-react-native)
- [https://www.youtube.com/watch?v=dKhaQScITEw](https://www.youtube.com/watch?v=dKhaQScITEw)
- [https://www.youtube.com/watch?v=zjYYpo_n3iE&t=156s](https://www.youtube.com/watch?v=zjYYpo_n3iE&t=156s)
- [Mapbox Tutorials](https://docs.mapbox.com/help/tutorials/)
- [Using Mapbox GL with React for Web](https://blog.logrocket.com/how-to-use-mapbox-gl/)
- [https://stackoverflow.com/questions/66718047/onpress-event-not-working-with-mapboxgl-markerview](https://stackoverflow.com/questions/66718047/onpress-event-not-working-with-mapboxgl-markerview)
- [Questions tagged [react-native-mapbox-gl] in StackOverflow](https://stackoverflow.com/questions/tagged/react-native-mapbox-gl?tab=newest&page=1&pagesize=15)
- [black (night mode) tiles appearing in high zoom levels of custom rastersource react-native-mapbox-gl](https://stackoverflow.com/questions/63574188/black-night-mode-tiles-appearing-in-high-zoom-levels-of-custom-rastersource-re)
