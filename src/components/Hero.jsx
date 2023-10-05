
export default function Hero() {
    return (
        <div className="grid place-items-center bg-[url('/src/assets/hero.jpg')] bg-no-repeat bg-cover bg-center min-h-[30rem] h-[750px] ">
            <div className='row-start-1 col-start-1 w-full h-full opacity-60 bg-[#2a323c99]'></div>
            <div className="flex items-center justify-center max-w-3xl gap-4 row-start-1 col-start-1 opacity-100 text-[#a6adba] z-0 ">
                <div className='flex flex-col items-center'>
                    <h1 className='text-5xl text-white font-bold text-center leading-loose'>Explore the best electronics collection online!</h1>
                
                <button className='text-xl font-semibold px-10'>Shop</button>
                </div>
            </div>
        </div>
    )
}