/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

const URL = `${Config.API_URL}/getCategories`;

export default function useCategories(onError) {
  const [categoryData, setCategoryData] = useState([]);
  const [categoryError, setCategoryError] = useState(null);
  const [categoryLoading, setCategoryLoading] = useState(true);

  async function fetchCategories() {
    try {
      setCategoryLoading(true);
      const response = await axios.get(URL);
      setCategoryData(response.data.data);
    } catch (error) {
      setCategoryError(error);
      onError(error);
    } finally {
      setCategoryLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categoryData,
    categoryError,
    categoryLoading,
    fetchCategories,
  };
}
