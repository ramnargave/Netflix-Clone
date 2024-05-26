

function Signin() {
  return (
    <div style={{background: "linear-gradient(80deg, black, transparent), url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)"}}>
        <div className="main flex items-center justify-center h-screen">
         <div className="sub_main bg-black opacity-75 p-20 text-white rounded-md">
            <h2 className="text-3xl mb-7 font-bold ">Sign In</h2>
            <div className="mb-7">
                <input type="Email" placeholder="email or Phone Number" className="w-full px-3 py-3 rounded-md bg-[#333333] outline-none" />
            </div>
            <div className="mb-7">
                <input type="text" placeholder="Passworld" className="w-full px-3 py-3 rounded-md bg-[#333333] outline-none" />
            </div>
            <div className="">
                <button className="w-full px-3 py-3 rounded-md bg-[#e91515] outline-none mb-2">Sign In</button>
            </div>
            <div className="">
                <div className="main flex justify-between items-center">
                    <div className=" flex items-center justify-between gap-1">
                        <input type="checkbox" className="w-4 h-4 " />
                        <label className="text-gray-400 font-light text-sm">Remember</label>

                        
                    </div>
                    <p className="font-light text-sm text-gray-400">Need Help?</p>
                </div>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Signin