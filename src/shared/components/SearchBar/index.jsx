import { search } from '@/shared/media/imgs';

const SearchBar = () => {
  return (
    <div className="mt-10 bg-white shadow-lg border rounded-lg md:flex lg:w-[45%] hidden md:w-[60%] p-2 gap-4">
      <span className='text-[#009e7f] bg-gray-100 font-medium p-2 rounded-md flex flex-col items-center justify-center'>Makeup</span>
      <form action="#" className='w-full flex items-center'>
        <input type="text" placeholder="Search your products from here" className='w-full border-none outline-none' />
        <button className='flex items-center justify-center gap-2 text bg-[#009e7f] text-white font-medium p-2 rounded-tr-md rounded-br-md px-6'>
          <img src={search} alt="" className='w-4 invert' />Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar;