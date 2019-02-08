import { storiesOf } from '@storybook/html';

const stories = storiesOf('Collection', module);


stories.add('table', () => {
  return `
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th>3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  `;
});

stories.add('list', () => {
  return `
    <ul>
      <li>Cras justo odio</li>
      <li>Dapibus ac facilisis in</li>
      <li>Morbi leo risus</li>
      <li>Porta ac consectetur ac</li>
      <li>Vestibulum at eros</li>
    </ul>
  `;
});

