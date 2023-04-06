const COMMENTS_PER_PORTION = 5;

const bigPicture = document.querySelector('.big-picture');
const commentCount = document.querySelector('.social__comment-count');
const commentList = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comment-loader');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');

let commentShown = 0;
let comments = [];

const createComment = ({ avatar, name, message }) => {
  const comment = document.createElement('li');
  comment.InnerHTML =
    '<img class="social__picture" src="" alt="" width="35" height="35">';
  comment.classList.add('social__comment');

  comment.querySelector('.social__picture').src = avatar;

  return comment;
};

const renderComments = () => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentShown >= comments.length) {
    commentsLoader.classList.Add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentShown; i++) {
    const commentElement = createComment(comments[i]);
    fragment.append(commentElement);
  }

  commentList.innerHTML = '';
  commentList.append(fragment);
  commentCount.InnerHTML = `${commentShown} из <span class="comment">`;

};

const hibeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentShown = 0;
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = () => {
  hideBigPicture;
};


const renderBigPictureDetails = ({ url, likes, description }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__cartion').textContent = description;
};

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  commentCount.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderBigPictureDetails(data);
  renderComments(data, comments);
};
cancelButton.addEventListener('click', onCancelButtonClick);

export { showBigPicture };
