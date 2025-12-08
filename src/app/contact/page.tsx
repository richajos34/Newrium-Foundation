import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  return (
    <main style={{ padding: 24 }}>
      <div className="flex justify-center items-start gap-20 flex-col md:flex-row">
        <div className="mt-10 items-center pt-10">
          <div className="font-poppins">
            <h1 className="font-semibold text-(--tangerine) text-5xl mb-6">
              Contact Us
            </h1>
            <div className="space-y-4">
              <div>
                <h2 className="font-medium text-(--teal) text-2xl">
                  Email
                </h2>
                <p className="font-normal text-(--foreground) text-xl">
                  newrium_foundation@gmail.com
                </p>
              </div>
              <div>
                <h2 className="font-medium text-(--teal) text-2xl">
                  Phone Number
                </h2>
                <p className="font-normal text-(--foreground) text-xl">
                  123-456-78910
                </p>
              </div>
              <div className="w-full">
                <h2 className="font-medium text-[var(--teal)] text-2xl">
                  Socials
                </h2>
                <div className="flex flex-row mt-1 items-center space-x-3">
                  <button className="w-10 h-10 rounded-full flex items-center justify-center border-3 hover:bg-[#444444] text-white
                    transition-colors active:scale-96 active:duration-75 bg-(--teal) border-(--teal) hover:border-[#444444]">
                      <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4"/>
                  </button>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center border-3 hover:bg-[#444444] text-white
                  transition-colors active:scale-96 active:duration-75 bg-(--teal) border-(--teal) hover:border-[#444444]">
                    <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4"/>
                  </button>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center border-3 hover:bg-[#444444] text-white
                  transition-colors active:scale-96 active:duration-75 bg-(--teal) border-(--teal) hover:border-[#444444]">
                    <FontAwesomeIcon icon={faInstagram} className="w-4 h-4"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form className="w-full max-w-lg md:mt-10 md:pt-10 -mt-5">
          <div className="flex flex-wrap -mx-3 mb-2 font-poppins text-l text-(--foreground)">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-l font-bold mb-2">
                First Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 border-2 border-gray-200 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text"></input>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block tracking-wide text-l font-bold mb-2">
                Last Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 border-2 border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text"></input>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2 font-poppins text-l text-(--foreground)">
            <div className="w-full px-3">
              <label className="block tracking-wide text-l font-bold mb-2">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 border-2 border-gray-200 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="email"></input>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 font-poppins text-l text-(--foreground)">
            <div className="w-full px-3">
              <label className="block tracking-wide text-l font-bold mb-2">
                Message
              </label>
              <textarea className="appearance-none block w-full bg-gray-200 border-2 border-gray-200 rounded-md py-3 px-4 mb-3 min-h-[100px] leading-tight focus:outline-none focus:bg-white resize-y"></textarea>
            </div>
          </div>
          <div className="flex items-center justify-end -mt-1">
            <button 
              className="bg-(--teal) hover:bg-[#444444] border text-white font-poppins font-bold py-2 px-4 rounded-md transition-colors active:scale-96 active:duration-75" 
              type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
