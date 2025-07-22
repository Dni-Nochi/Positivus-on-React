import { Nav } from './Nav';
import { Search } from './Search';
function Header() {
  return (
    <header className="m-auto w-300 h-25 bg-[#1452CC] rounded-b-[15px]">
      <Nav />
      <Search />
    </header>
  );
}

export { Header };
