import amlilaLogo from "../assets/amelia_logo.png";

const Footer = () => {
    return (
        <div className="flex items-center justify-center w-full mt-vh5">
            <div className="w-full px-vw5">
                <div className="bg-red-400 flex flex-col justify-center items-center">
                <img src={amlilaLogo} alt='amelia logo' className='w-vw10 min-w-px75' />
                </div>
            </div>
        </div>
    )
}

export default Footer
