import {getData} from './fetch.js'

async function test(){
  const verse = await getData();
  console.log(verse);
}

test();
