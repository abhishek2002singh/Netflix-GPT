import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#141414] rounded-lgd shadow my-42 mt-2">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center flex-col md:flex-row justify-between">
          <a href="#!" className="flex items-center mb-6 md:mb-2">
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className="h-8 mr-3" alt="Flowbite Logo" />
          </a>
        
        </div>
        <hr className="my-6 sm:mx-auto border-[#282727] lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          Crafted By <a href="linkedin.com/in/abhishek-singh-a51483260" rel='noreferrer' target='_blank' className="text-white hover:underline">Abhishek Singh</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer;