import path from 'path';
import bodyParser from 'body-parser';
import Database from './database.js';


const scriptUrl = new URL(import.meta.url);
const currentPath = scriptUrl.pathname;
const colonIndex = currentPath.indexOf(":");
const subPath = currentPath.substring(colonIndex + 1);
const src = 'src';
const indexOfSrc = subPath.lastIndexOf(src);
const srcPath = subPath.substring(0, indexOfSrc + src.length);

console.log(srcPath);