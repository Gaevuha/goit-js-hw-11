import axios from 'axios';

// Ключ для доступу до API
const API_KEY = '49751566-58037048f2894c5e898374fdb';
const BASE_URL = 'https://pixabay.com/api/';

// Функція, яка надсилає HTTP-запит на Pixabay
export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,        // Ключ авторизації
    q: query,            // Пошукове слово
    image_type: 'photo', // Тип зображень — фото
    orientation: 'horizontal', // Горизонтальні зображення
    safesearch: true     // Безпечний пошук
  };

  // Повертаємо проміс з .then()
  return axios.get(BASE_URL, { params })
    .then(response => response.data) // Повертаємо тільки дані з відповіді
    .catch(error => {
      console.error('Помилка при запиті:', error);
      throw error; // Прокидуємо помилку далі, якщо потрібно обробити її в іншому місці
    });
}
