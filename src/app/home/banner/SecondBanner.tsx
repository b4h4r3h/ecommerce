import secondBannerImg from "../../../assets/image/second-banner-img.png"
import { Link } from "react-router-dom"
const SecondBanner: React.FC = () => {
    return (
        <div className="bg-[#DDF6C9] flex items-center h-[416px] px-10 justify-between mt-6 rounded-xl">
            <img src={secondBannerImg}/>
            <div className="flex flex-col gap-6">
                <p className="text-5xl font-extrabold text-text-dark">UNIQUE JEWELRY</p>
                <p className="text-3xl text-text-dark">Over +2000 unique pieces
                of jewelry for all ages </p>
                {/* <div > */}
                    <Link className="flex items-center gap-2 bg-white px-4 py-2 w-fit shadow-buttonShadow rounded-md" to="">
                    <p className="text-xl text-text-dark">
                    Show More
                    </p>
                    <span className="icon-[solar--arrow-right-outline] text-text-dark" style={{width: "32px", height: "32px"}}></span>
                    </Link>
                {/* </div> */}
            </div>
        </div>
    )
}
export default SecondBanner