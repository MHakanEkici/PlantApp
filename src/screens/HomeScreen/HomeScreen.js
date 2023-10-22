import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import useCategories from '../../hooks/useCategories';
import useQuestions from '../../hooks/useQuestions';
import styles from './HomeScreen.style';

import PremiumOfferCard from '../../components/Cards/PremiumOfferCard';
import QuestionCard from '../../components/Cards/QuestionCard';

export default function HomeScreen() {
  const [categoryList, setCategoryList] = useState([]);
  const [questionList, setQuestionList] = useState([]);

  // const {categoryData, categoryLoading, categoryError} = useCategories();
  const {questionData, questionLoading, questionError} = useQuestions();

  // useEffect(() => {
  //   setCategoryList(categoryData);
  // }, [categoryData]);

  useEffect(() => {
    setQuestionList(questionData);
  }, [questionData]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      bounces={false}>
      <PremiumOfferCard />
      <Text style={styles.title}>Get Started</Text>

      {questionLoading ? (
        <ActivityIndicator />
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
              key={question.id}
            />
          ))}
        </ScrollView>
      )}
    </ScrollView>
  );
}
