/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

const URL = `${Config.API_URL}/getQuestions`;

export default function useQuestions(onError) {
  const [questionData, setQuestionData] = useState([]);
  const [questionError, setQuestionError] = useState(null);
  const [questionLoading, setQuestionLoading] = useState(true);

  async function fetchQuestions() {
    try {
      setQuestionLoading(true);
      const response = await axios.get(URL);
      setQuestionData(response.data);
    } catch (error) {
      setQuestionError(error);
      onError(error);
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
