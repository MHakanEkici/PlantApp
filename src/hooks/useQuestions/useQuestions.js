import {useEffect, useState} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

const URL = `${Config.API_URL}/getQuestions`;

export default function useQuestions() {
  const [questionData, setQuestionData] = useState(null);
  const [questionError, setQuestionError] = useState(null);
  const [questionLoading, setQuestionLoading] = useState(true);

  async function fetchQuestions() {
    try {
      setQuestionLoading(true);
      const response = await axios.get(URL);
      console.log(response);
      setQuestionData(
        response.data.data.results.filter(
          question => (question.notFavourite = true),
        ),
      );
    } catch (error) {
      setQuestionError(error);
    } finally {
      setQuestionLoading(false);
    }
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  return {
    questionData,
    questionError,
    questionLoading,
    fetchQuestions,
  };
}
