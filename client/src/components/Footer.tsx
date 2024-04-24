import amlilaLogo from "../assets/amelia_logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="flex items-center justify-center w-full mt-vh5">
            <div className="w-full px-vw5 py-vh10  bg-gradient-to-r from-primary_light2 from-10% via-white via-30% to-primary_light1 to-90%">
                <div className=" w-full flex flex-col justify-center items-center gap-vh2 text-xl">
                <img src={amlilaLogo} alt='amelia logo' className='w-vw10 min-w-px75' />
                <p className="w-full text-center">
                ameliaweddingstudio@gmail.com</p>
                <p className="w-full text-center capitalize">
                207/1,Rathmaldeniya Road, Pannipitiya, Sri Lanka, 10230</p>
                <p className="w-full text-center">
                +94718736614</p>
               
                <div className="w-full flex justify-center items-center gap-vw1">
                    <button>

                <FaFacebookSquare />
                    </button>
                    <button>

                <FaInstagram />
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
