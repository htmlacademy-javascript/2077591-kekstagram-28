import {createMessage} from './data.js';
import {createComment} from './data.js';
import {createPictures} from './data.js';

createMessage();
createComment();
createPictures();

import { renderThumbnails } from './thumbnail.js';

renderThumbnails(createPictures());
