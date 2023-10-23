/* eslint-disable react-hooks/exhaustive-deps */
import {View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import routes from '../../navigation/routes';
import onboardingPagesData from '../../constants/OnboardingPagesData';
import styles from './Onboarding.style';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import OnboardingTemplete from '../../components/OnboardingTemplete';

const {height, width} = Dimensions.get('window');

export default function Onboardingg({navigation}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [refC, setRefC] = useState();

  function onContinuePressed() {
    selectedIndex + 1 === onboardingPagesData.length
      ? navigation.navigate(routes.PAYWALL_SCREEN)
      : refC.snapToNext();
  }

  const carouselItem = ({item, index}) => (
    <OnboardingTemplete
      item={item}
      buttonText={'Continue'}
      onButtonPressed={onContinuePressed}
      key={index.toString()}
    />
  );

  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
    });
  }, []);

  return (
    <View style={styles.container}>
      <Carousel
        data={onboardingPagesData}
        sliderWidth={width}
        sliderHeight={height}
        ref={ref => setRefC(ref)}
        scrollEnabled={false}
        itemWidth={width}
        itemHeight={height}
        pagingEnabled={true}
        onSnapToItem={event => {
          setSelectedIndex(event);
        }}
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
        tappableDots={false}
      />
    </View>
  );
}
