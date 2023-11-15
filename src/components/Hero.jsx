import Typed from 'react-typed';

    const Hero = () => {
        return (
            <div className="text-white">
                <div className="bg-[#050542] py-20 w-full min-h-screen mx-auto text-center flex flex-col justify-center">
                    <p className="text-white font-bold p-2 md:text-2xl sm:text-1xl text-xl">DESIGNS BEYOND IMAGINATION</p>
                    <h1 className="text-white md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 ">Beautiful Designs Increase Brand Visibility</h1>
                    <div className='flex justify-center items-center'>
                        
                    <p className="text-white md:text-4xl sm:text-2xl text-xl font-bold">Increase visibility with designs that are  </p>
                    <Typed className="text-white md:text-4xl sm:text-2xl text-xl font-bold pl-2" strings={["Amazing","Creative", "Impressive"]} typeSpeed={120} backSpeed={140} loop/>
                    </div>
                        
                    <p className='md:text-xl text-xl font-bold text-gray-600'>Creating visual contents to communicate and convey messages,</p>
                    <p className='md:text-xl text-xl font-bold text-gray-600' >making it the best way to reflect a Company's Image and its Services.</p>
            
                <button className='bg-white w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-[#050542] '>Hire Us</button>
                </div>
            </div>
            
        )
}



export default Hero;