import { storiesOf } from '@storybook/html';

const stories = storiesOf('Images', module);


stories.add('small-img', () => {
  return `
  <img src="https://via.placeholder.com/350x150" />
  `;
});

stories.add('big-img', () => {
  return `
  <img src="https://via.placeholder.com/2350x150" />
  `;
});



