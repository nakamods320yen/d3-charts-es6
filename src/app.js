import 'babel-polyfill';
import * as d3 from 'd3';

d3.select('body').append('h1').text('Hi there!');

const sleep = (msec) => new Promise((resolve) => {
  setTimeout(resolve, msec);
});

(async () => {
  console.log('start');
  await sleep(2000);
  console.log('end');
})();
