import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  Button,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Onboarding.style';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import OnboardingTemplete from '../../components/OnboardingTemplete';
import CustomButton from '../../components/CustomButton';

const {height, width} = Dimensions.get('window');

export default function Onboardingg({navigation}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [refC, setRefC] = useState();

  const onboardingPagesData = [
    {
      backgroundImage: require('../../assets/onboarding/GettingStartedBackground.png'),
      image: require('../../assets/onboarding/Onboarding1Image.png'),
      text: require('../../assets/onboarding/Onboarding1Text.png'),
    },
    {
      backgroundImage: require('../../assets/onboarding/GettingStartedBackground.png'),
      image: require('../../assets/onboarding//Onboarding2Image.png'),
      text: require('../../assets/onboarding/Onboarding2Text.png'),
    },
  ];

  function onContinuePressed() {
    refC.snapToNext();
  }

  const carouselItem = ({item, index}) => (
    <OnboardingTemplete
      item={item}
      buttonText={'Continue'}
      onButtonPressed={onContinuePressed}
      key={index}
    />
  );

  return (
    <View style={{flex: 1}}>
      <Carousel
        data={onboardingPagesData}
        sliderWidth={width}
        sliderHeight={height}
        ref={ref => setRefC(ref)}
        scrollEnabled={false}
        // onLayout={() => {
        //   refC.snapToItem(focused);
        // }}
        itemWidth={width}
        itemHeight={height}
        pagingEnabled={true}
        //   activeSlideAlignment={'start'}
        onSnapToItem={event => {
          // console.log(
          //   'focused offer from carousel' + JSON.stringify(data[event]),
          // );
          setSelectedIndex(event);
        }}
        // onBeforeSnapToItem={event => {
        //   console.log(
        //     '(onBeforeSnapToItem) - focused offer from carousel' +
        //       JSON.stringify(data[event]),
        //   );
        //   setSelectedIndex(event);

        //   onFocused(data[event]);
        // }}
        renderItem={carouselItem}
      />
      <Pagination
        dotsLength={onboardingPagesData.length}
        activeDotIndex={selectedIndex}
        containerStyle={styles.pagination_container}
        dotColor={'#13231B'}
        dotStyle={styles.pagination_dot}
        inactiveDotColor={'gray'}
        inactiveDotOpacity={1}
        inactiveDotScale={0.7}
        carouselRef={refC}
        tappableDots={!!refC}
      />
    </View>
  );
}
