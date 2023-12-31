import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Alert,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import useCategories from '../../hooks/useCategories';
import useQuestions from '../../hooks/useQuestions';
import styles from './HomeScreen.style';

import PremiumOfferCard from '../../components/Cards/PremiumOfferCard';
import QuestionCard from '../../components/Cards/QuestionCard';
import CategoryCard from '../../components/Cards/CategoryCard';
import Loading from '../../components/Loading';
import AppText from '../../constants/AppText';

export default function HomeScreen() {
  const [categoryList, setCategoryList] = useState([]);
  const [questionList, setQuestionList] = useState([]);

  const {categoryData, categoryLoading, categoryError} = useCategories(onError);
  const {questionData, questionLoading, questionError} = useQuestions(onError);

  useEffect(() => {
    setCategoryList(categoryData);
  }, [categoryData]);

  useEffect(() => {
    setQuestionList(questionData);
  }, [questionData]);

  function onError(error) {
    Alert.alert(
      'Server Error',
      'There was a problem on the server. Please try again later.',
    );
    console.error(error);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content_container}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <PremiumOfferCard />
        <Text style={styles.title}>{AppText.GetStarted}</Text>

        {questionLoading ? (
          <Loading />
        ) : (
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            bounces={false}>
            {questionList.map((question, index) => (
              <QuestionCard
                image={question.image_uri}
                question={question.title}
                onPress={null}
                key={question.id.toString()}
              />
            ))}
          </ScrollView>
        )}
        {categoryLoading ? (
          <Loading />
        ) : (
          <FlatList
            style={styles.categories_container}
            columnWrapperStyle={styles.category_list}
            data={categoryList}
            renderItem={({item, index}) => (
              <CategoryCard
                image={item.image.url}
                name={item.name}
                onPress={null}
                key={item.id.toString()}
              />
            )}
            numColumns={2}
            scrollEnabled={false}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
