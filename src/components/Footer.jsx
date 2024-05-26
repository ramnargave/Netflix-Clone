function Footer() {
  return (
    <div>
      <div className="container mx-auto max-w-6xl lg:py-20 md:py-20 py-10 px-5 lg:text-start md:text-start text-center">
        <p className="text-gray-300 mb-4">
          Questions? Call <span>000-800-919-1694</span>
        </p>
        <div className="main text-gray-300 lg:flex md:flex lg:justify-between md:justify-between lg:text-start md:text-start text-center mb-4 cursor-pointer">
          <div className="one lg:mt-0 md:mt-0 mt-10">
            <ul>
              <li className="mb-3">FAQ</li>
              <li className="mb-3">Investor Relations</li>
              <li className="mb-3">Privacy</li>
              <li className="mb-3">Speed Test</li>
            </ul>
          </div>

          <div className="two lg:mt-0 md:mt-0 mt-10">
            <ul className=""> 
              <li className="mb-3">Help Centre</li>
              <li className="mb-3">Jobs</li>
              <li className="mb-3">Cookie Preferences</li>
              <li className="mb-3">Legal Notices</li>
            </ul>
          </div>

          <div className="three lg:mt-0 md:mt-0 mt-10">
            <ul className="">
              <li className="mb-3">Account</li>
              <li className="mb-3">Ways to Watch</li>
              <li className="mb-3">Corporate Information</li>
              <li className="mb-3">Only on Netflix</li>
            </ul>
          </div>

          <div className="fourth lg:mt-0 md:mt-0 mt-10">
            <ul className="">
              <li className="mb-3">Media Centre</li>
              <li className="mb-3">Terms of Use</li>
              <li className="mb-3">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
