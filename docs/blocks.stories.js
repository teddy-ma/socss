import { storiesOf } from '@storybook/html';

const stories = storiesOf('Blocks', module);

stories.add('code', () => {
  return `
  <pre class="src" lang="ruby">
<span style="color:#080;font-weight:bold">class</span> <span style="color:#B06;font-weight:bold">User</span> &lt; <span style="color:#036;font-weight:bold">ApplicationRecord</span>
  <span style="color:#777"># attribute name</span>
<span style="color:#080;font-weight:bold">end</span>
  </pre>
  `;
});

stories.add('quote', () => {
  return `
<blockquote>
  <p>Every piece of knowledge has one and only one representation</p>
</blockquote>
  `;
});
