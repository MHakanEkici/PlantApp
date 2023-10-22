import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import useCategories from '../../hooks/useCategories';
import useQuestions from '../../hooks/useQuestions';
import styles from './HomeScreen.style';

import PremiumOfferCard from '../../components/Cards/PremiumOfferCard';
import QuestionCard from '../../components/Cards/QuestionCard';
import CategoryCard from '../../components/Cards/CategoryCard';
import Loading from '../../components/Loading';

export default function HomeScreen() {
  const [categoryList, setCategoryList] = useState([]);
  const [questionList, setQuestionList] = useState([]);

  const {categoryData, categoryLoading, categoryError} = useCategories();
  const {questionData, questionLoading, questionError} = useQuestions();

  useEffect(() => {
    setCategoryList(categoryData);
  }, [categoryData]);

  useEffect(() => {
    setQuestionList(questionData);
  }, [questionData]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content_container}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <PremiumOfferCard />
        <Text style={styles.title}>Get Started</Text>

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
                key={question.id}
              />
            ))}
          </ScrollView>
        )}
        {categoryLoading ? (
          <Loading />
        ) : (
          <View style={styles.category_list}>
            {categoryList.map((category, index) => (
              <CategoryCard
                image={category.image.url}
                name={category.name}
                onPress={null}
                key={category.id}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
