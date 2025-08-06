function Button({ text }) {
  return (
    <button className="w-fit px-2.5 rounded-[10px] cursor-pointer bg-[#F5E60F] hover:bg-amber-500 duration-300">
      {text}
    </button>
  );
}

export { Button };
