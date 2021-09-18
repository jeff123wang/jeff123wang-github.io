import {getData} from './fetch.js'

async function test(){
  verse = await getData();
  console.log(verse);
}
