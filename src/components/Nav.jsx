import { pageName } from '../../data';
import location from '../img/location_marker.svg';
import arrow from '../img/down_arrow.svg';
import { Li } from './Li';
import { Search } from './Search';

function Nav() {
  return (
    <nav className="flex justify-between items-center pt-4 mx-[50px] text-[#fff]">
      <ul className="flex">
        <img src={location} />
        <Li {...pageName[0]} />
        <Li {...pageName[1]} />
        <img src={arrow} />
      </ul>
      <ul className="flex gap-2.5">
        <Li {...pageName[2]} />
        <Li {...pageName[2]} />
        <Li {...pageName[2]} />
      </ul>
    </nav>
  );
}

export { Nav };
