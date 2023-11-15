import keys from "../assets/keys.png"
// import login from "../assets.login.png"
// import images33 from "../assets.images33.jpg"


const Cards = () => {
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="min-h-screen max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"></div>
                <img className="w-20 mx-auto mt-[-3rem] bg-white" src={keys.png} alt="/" />
                <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
               
                <p className="text-center text-4xl font-bold">$140</p>
                <div className="text-center font-medium ">
                    <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                    <p className="py-2 border-b mx-8">1 granted user</p>
                    <p className="py-2 border-b mx-8">send up to 1 GB </p>
                </div>
                    <button className="bg-[#050542]  rounded-md font-bold my-2 mx-auto md:mx-0 py-2 ml-4 text-white">Sart trial</button>
            </div>

            <div className="w-full py-[10rem] px-4 bg-white">
            <div className="min-h-screen max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"></div>
                <img className="w-20 mx-auto mt-[-3rem] bg-white" src={keys.png} alt="/" />
                <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
               
                <p className="text-center text-4xl font-bold">$140</p>
                <div className="text-center font-medium ">
                    <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                    <p className="py-2 border-b mx-8">1 granted user</p>
                    <p className="py-2 border-b mx-8">send up to 1 GB </p>
                </div>
                    <button className="bg-[#050542]  rounded-md font-bold my-2 mx-auto md:mx-0 py-2 ml-4 text-white">Sart trial</button>
            </div>

            <div className="w-full py-[10rem] px-4 bg-white">
            <div className="min-h-screen max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"></div>
                <img className="w-20 mx-auto mt-[-3rem] bg-white" src={keys.png} alt="/" />
                <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
               
                <p className="text-center text-4xl font-bold">$140</p>
                <div className="text-center font-medium ">
                    <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                    <p className="py-2 border-b mx-8">1 granted user</p>
                    <p className="py-2 border-b mx-8">send up to 1 GB </p>
                </div>
                    <button className="bg-[#050542]  rounded-md font-bold my-2 mx-auto md:mx-0 py-2 ml-4 text-white">Sart trial</button>
            </div>
        </div>

        </div>
        </div>
    )
}

export default Cards; 
