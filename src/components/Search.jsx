import logo from '../img/Лого.svg';
import searching from '../img/search_magnifier.svg';

import { Button } from './Button';

function Search() {
  return (
    <div className="flex mx-[50px] pt-[10px] items-center text-[30px] text-[#fff]">
      <img src={logo} />
      <div className="flex items-center bg-white rounded-[15px] mx-4.5 px-4 w-full max-w-3xl">
        <img src={searching} className="opacity-50" />
        <input
          type="search"
          placeholder="Все продукты в Sale.kz"
          className=" flex-1 bg-transparent h-10 rounded-[15px] ml-[15px] outline-none text-[#000] text-[14px]"
        />
      </div>
      <Button text="Каталог" />
    </div>
  );
}

export { Search };
