import Navbar from "./Navbar"
import { FaAngleRight } from "react-icons/fa";



function HeroSection() {
  return (
    <>
    <div className="lg:h-[44.5em] md:h-[44em] h-[34em]" style={{background: "linear-gradient(80deg, black, transparent), url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)"}} >
    <Navbar/>



    {/* herosection  */}

    <div className="container mx-auto flex justify-center items-center h-96">
        <div>
            <h1 className="text-white text-center font-bold lg:text-5xl md:text-5xl text-3xl px-5 mb-5">The biggest Indian hits. The best Indian stories. All streaming here.</h1>
            <p className="text-white text-center lg:text-2xl md:text-2xl text-xl mb-5">Watch anywhere. Cancel anytime.</p>
            <p className="text-white text-center lg:text-xl md:text-xl text-lg">Ready to watch? Enter your email to
            <br className="lg:hidden md:hidden sm:hidden " />create or restart your membership.</p>


            {/* input button  */}

            <div className="flex justify-center items-center mt-5 flex-wrap">
                <input type="text" className="text-white bg-[#1d1e1e] text-lg py-3 px-3 lg:w-96 md:w-96 w-80 mb-5 lg:mb-0 md:mb-0 rounded-md opacity-80 border border-gray-300 hover:ring-1 hover:ring-gray-50 outline-none" placeholder="Email Address" />
                <button className="text-white text-xl font-bold flex items-center mx-5 bg-[#e50815] py-3 px-5 rounded-lg"><p className="px-1">Get Started</p> <FaAngleRight /> </button>
            </div>
        </div>
    </div>
    </div>
    <div className="hr_line"/>
    </>
  )
}

export default HeroSection