import { Rack } from './Rack';

function ShowCase() {
  return (
    <div className="w-[860px] mt-14 rounded-[10px] bg-white">
      <select className="mt-4 ml-4 px-2.5 py-2.5 bg-[#F6F7F8] rounded-[10px] cursor-pointer">
        <option>По популярности</option>
        <option>Пункт 2</option>
        <option>Пункт 3</option>
        <option>Пункт 4</option>
      </select>
      <Rack />
    </div>
  );
}

export { ShowCase };
