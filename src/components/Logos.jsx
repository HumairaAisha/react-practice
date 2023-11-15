import A1 from "../assets/A1.jpg"
const Logos = () => {
    return (
        <div className="w-full bg-red-500 md:bg-white py-16 my-4">
            <div className="min-h-screen py-20 max-auto grid grid-cols-1 md:grid-cols-2">
        <img className="w-[500px] mx-auto py-4 " src={A1} alt="/" />
        <div className="flex flex-col justify-center">
            <p className="text-[#050542] font-bold">DESIGNS DASHBAORD</p> 
            <h1 className="md:text-3xl sm:2xl text-1xl py-1 font-bold text-[#050542]">Have A Company Brand Identity</h1>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dolores suscipit repellat tempore aliquid voluptatum eum sint incidunt ut aut cum rem culpa odio pariatur sed iste cumque facilis placeat.</p>
            <button className="bg-[#050542] w-[200px] rounded-md font-bold my-6 mx-auto md:mx-0 py-3 text-white">Get Started</button>

        </div>
            </div>
        </div>

    )

}



export default Logos;