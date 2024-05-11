import { SearchBar } from '@/shared/components';

const Hero = () => {
    return (
        <section className="md:h-screen w-full bg-slate-100 flex flex-col items-center justify-center md:bg-[url('@/shared/media/imgs/hero.png')] bg-cover bg-center">
            <h1 className='text-5xl font-bold text-blue-950 mb-4 md:block hidden'>Branded & imported makeups</h1>
            <p className='text-slate-500 text-lg font-medium md:block hidden'>Easiest and cheapest way to get your branded & imported makeups</p>
            <SearchBar />
        </section>
    )
}

export default Hero