import { FaAngleRight } from "react-icons/fa"
import CreateProfile from "../components/CreateProfile"
import Download from "../components/Download"
import Enjoy from "../components/Enjoy"
import Faq from "../components/Faq"
import HeroSection from "../components/HeroSection"
import Watch from "../components/Watch"
import { faqData } from "../data/fqData"
import Footer from "../components/Footer"


function Home() {
  return (
    <>
    <HeroSection/>
    <Enjoy/>
    <Download/>
    <Watch/>
    <CreateProfile/>

    <div className="">
        <h2 className="text-white text-center lg:font-5xl md:font-5xl textt-3xl font-bold py-10" >Frequently Asked <br className="lg:hidden md:hidden sm:hidden" /> Questions</h2>
        <div className="">
            {faqData.map((item,index)=> {
                const {title,desc} = item
                return (
                    <>
                    <Faq key={index} title={title} desc={desc} />
                    </>
                )
            })}

            {/* <Faq/> */}
        </div>
        <div className="mt-10">
        <p className="text-white text-center lg:text-xl md:text-xl text-lg">Ready to watch? Enter your email to
            <br className="lg:hidden md:hidden sm:hidden " />create or restart your membership.</p>


            {/* input button  */}

            <div className="flex justify-center items-center mt-5 flex-wrap">
                <input type="text" className="text-white bg-[#1d1e1e] text-lg py-3 px-3 lg:w-96 md:w-96 w-80 mb-5 lg:mb-0 md:mb-0 rounded-md opacity-80 border border-gray-300 hover:ring-1 hover:ring-gray-50 outline-none" placeholder="Email Address" />
                <button className="text-white text-xl font-bold flex items-center mx-5 bg-[#e50815] py-3 px-5 rounded-lg"><p className="px-1">Get Started</p> <FaAngleRight /> </button>
            </div>
        </div>
    </div>
    <div className="hr_line mt-5"></div>

    <Footer/>
    </>
  )
}

export default Home