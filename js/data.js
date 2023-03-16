import { getRandomArrayElement } from './util';
import { getRandomInteger } from './util';
import { generateCommentId } from './util';

const pictureCount = 25;
const avatarCount = 6;
const likeMinCount = 15;
const likeMaxCount = 200;
const commentCount = 20;
const commentLines = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const descriptions = [
  'Некоторые дни начинаются лучше остальных.',
  'Сегодня в моей душе солнце.',
  'Если ты ищешь того человека, который изменит твою жизнь, просто возьми и посмотри в зеркало.',
  'Красота лишь привлекает внимание, душа – завоевывает сердце.',
  'Все, что мы отдаем, возвращается вновь.',
  'Цени моменты.',
  'Улыбайся больше, смейся чаще.',
  'Счастье никогда не выйдет из моды.',
  'Они говорили мне, что я не смогу, поэтому я это сделала.',
];

const names = ['Роман', 'Яна', 'Джозеф', 'Карина', 'Нона', 'Тимур'];


//функция создания сообщений

const createMessage = () =>
  Array.from({ length: getRandomInteger(1, 2) }, () =>
    getRandomArrayElement(commentLines)
  ).join(' ');


//функция для создания одного комментария

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, avatarCount)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(names),
});


//функция, которая возвращает обьект

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  descriptions: getRandomArrayElement(descriptions),
  likes: getRandomInteger(likeMinCount, likeMaxCount),
  comments: Array.from(
    { length: getRandomInteger(0, commentCount) },
    createComment
  ),
});


//сначала генерируем 25 элементов массива, и далее функция, которая применяется к каждому элементу этого массива

const createPictures = () =>
  Array
    .from({ length: pictureCount })
    .map((_, pictureIndex) =>
      createPicture(pictureIndex + 1));

createPictures();

export {createMessage};
export {createComment};
export {createPictures};

