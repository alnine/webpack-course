import Post from '@/post';
import "@styles/styles.css";
import json from '@assets/example';
import arrowPng from '@assets/arrow.png';

const post = new Post('Webpack post title', arrowPng);

console.log('Post to string: ', post.toString());
console.log('JSON obj: ', json);
console.log('JSON -> title: ', json.title);