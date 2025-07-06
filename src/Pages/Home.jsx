import { VscSettings } from "react-icons/vsc";
const Home = () => {
  return (
    <div>
      <div className="hidden w-2/6 mx-auto lg:flex justify-around items-center mt-5">
        <button className="h-12 flex gap-3 items-center bg-black rounded-l-full rounded-r-full p-5 text-white">
          <VscSettings className="text-2xl" /> All
        </button>

        <button className="h-12 text-stone-700 flex gap-3 items-center border border-stone-600 rounded-l-full rounded-r-full p-5 ">
          Corduroy
        </button>
        <button className="h-12 text-stone-700 flex gap-3 items-center border border-stone-600 rounded-l-full rounded-r-full p-5 ">
          Denim
        </button>
        <button className="h-12 text-stone-700 flex gap-3 items-center border border-stone-600 rounded-l-full rounded-r-full p-5 ">
          Adire
        </button>
        <button className="h-12 text-stone-700 flex gap-3 items-center border border-stone-600 rounded-l-full rounded-r-full p-5 ">
          Leather
        </button>
      </div>
    </div>
  )
}

export default Home