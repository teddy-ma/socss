import { storiesOf } from '@storybook/html';

const stories = storiesOf('Code', module);

stories.add('code', () => {
  return `
  <pre class="src" lang="ruby">require <span style="background-color:hsla(0,100%,50%,0.05)"><span style="color:#710">'</span><span style="color:#D20">delegate</span><span style="color:#710">'</span></span>
  <span style="color:#080;font-weight:bold">class</span> <span style="color:#B06;font-weight:bold">User</span> &lt; <span style="color:#036;font-weight:bold">ApplicationRecord</span>
    <span style="color:#777"># attribute name</span>
  <span style="color:#080;font-weight:bold">end</span>
  </pre>
  `;
});
