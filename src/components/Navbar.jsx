import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="main flex lg:justify-around md:justify-around justify-between p-5 items-center lg:mb-28 md:mb-28 mb-10">
        {/* left  */}
        <div className="netflix_logo">
          <img
            className="lg:w-44 md:w-44 w-28 "
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
          />
        </div>
        {/* right  */}
        <div className="">
          <div className="main flex items-center">
            <div className="selctor bg-[#111112] text-white lg:mx-4 md:mx-4  mx-1 px-5 py-1 rounded-md border-[1.5px] border-gray-600 hover:ring-2 hover:ring-gray-200 opacity-80">
              <select name="" id="" className="bg-[#111112] outline-none " >
                <option value="English">English</option>
                <option value="हिन्दी">हिन्दी</option>
              </select>
            </div>
            <Link Link to={'/signin'} type="button" className="bg-[#e50815] text-white lg:mx-4 md:mx-4 mx-1 px-5 py-1 rounded-md border-[1.5px] font-bold border-gray-600 hover:ring-2 hover:ring-gray-200 opacity-80">Sign-in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
