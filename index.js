document.addEventListener('DOMContentLoaded', () => {
  // количество загружаемых изображений
  const IMAGES_COUNT = 4;

  // ссылка для загрузки изображений
  const IMAGES_URL = `https://dog.ceo/api/breeds/image/random/${IMAGES_COUNT}`;

  // ссылка для загрузки списка пород
  const BREEDS_URL = "https://dog.ceo/api/breeds/list";

  // узел, в котором будет список изображений
  const imagesContainer = document.querySelector('.images');

  // узел, в котором будет список пород
  const breedsContainer = document.querySelector('.breeds');

  // узел кнопки обновления
  const button = document.querySelector('button');

  // сразу загружаем изображения
  fetchAndRenderImages = () => {
    fetch(IMAGES_URL)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.message.length; i++) {
        const img = document.createElement('img');
        img.src = data.message[i];
        imagesContainer.append(img);
      }
    })
  };
  fetchAndRenderImages()


  // загружаем список пород
  fetchBreedsList = () => {
    fetch(BREEDS_URL)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.message.length; i++) {
        const li = document.createElement('li');
        li.textContent = data.message[i];
        breedsContainer.append(li)
      }
    })
  };

  fetchBreedsList()
  // еще раз загружаем изображения, если кликнули на кнопку обновления
  button.addEventListener('click', () => {
    imagesContainer.textContent = '';
    fetchAndRenderImages()
  });
});
