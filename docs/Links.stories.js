import { storiesOf } from '@storybook/html';

const stories = storiesOf('Links', module);


stories.add('link', () => {
  return `
  <a href="#">Link</a>
  `;
});

stories.add('buttom', () => {
  return `
  <button>Button</button>
  `;
});



