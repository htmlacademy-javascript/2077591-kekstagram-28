import {createMessage} from './data.js';
import {createComment} from './data.js';
import {createPictures} from './data.js';


createMessage();
createComment();
createPictures();

import { renderThumbnails } from './thumbnail.js';

import { showBigPicture } from './big-picture.js';

import { renderGallery } from './gallery.js';

renderThumbnails(createPictures());
