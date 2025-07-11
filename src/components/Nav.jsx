import { pageName } from '../../data';

import { Ol } from './Ol';

function Nav(props) {
  return (
    <nav>
      <ul>
        <Ol {...pageName[0]} />
        <Ol {...pageName[1]} />
        <Ol {...pageName[2]} />
        <Ol {...pageName[3]} />
        <Ol {...pageName[4]} />
        {props.children}
      </ul>
    </nav>
  );
}

export { Nav };
