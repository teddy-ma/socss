import { storiesOf } from '@storybook/html';

const stories = storiesOf('Links', module);


stories.add('link', () => {
  return `
  <a href="javascript:void(0)">Click me to somewhere</a>
  `;
});

stories.add('buttom', () => {
  return `
  <button>Button</button>
  `;
});
