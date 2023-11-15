
const Newsletter = () => {

    return (
        <div className="bg-[#050542] w-full py-16 text-white px-4">
            <div className="min-h-scren max-w-[1240px] py-20 mx-auto grid grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Wants tips & tricks to increase your brand Identity</h1>
                    <p>Sign up to our newsletter and stay up to date</p>
                </div>
            <div className="my-4">
                <div className="item-center justify-between w-full">
                    <input className="p-2 flex ml-4 rounded-md text-black" type="email" placeholder="Enter email"/>
                    <button className="bg-white w-[200px] rounded-md font-medium ml-4 px-4  my-6 mx-auto py-3 text-[#050542] ">Notify Me</button>

                </div>
                <p>We care about your how you stand out the crowd, Read <span className="text-gray-400 font-bold">About Us</span></p>
                </div>
            </div>
        </div>



    )

}
    
    
    
export default Newsletter;