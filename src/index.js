import $ from 'jquery';
import Post from '@/post';
import "@styles/styles.css";
import json from '@assets/example';
import arrowPng from '@assets/arrow.png';

const post = new Post('Webpack post title', arrowPng);

$("pre").html(post.toString());

console.log('JSON obj: ', json);
console.log('JSON -> title: ', json.title);