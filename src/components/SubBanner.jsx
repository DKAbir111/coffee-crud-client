import SubBannerCard from "./SubBannerCard";
import icon1 from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'


export default function SubBanner() {
    return (
        <div className="bg-[#ECEAE3]">
            <div className="container mx-auto grid grid-cols-4 gap-7">
                <SubBannerCard image={icon1} title="Awesome Aroma" content="You will definitely be a fan of the design & aroma of your coffee" />
                <SubBannerCard image={icon2} title="High Quality" content="We served the coffee to you maintaining the best quality" />
                <SubBannerCard image={icon3} title="Pure Grades" content="The coffee is made of the green coffee beans which you will love" />
                <SubBannerCard image={icon4} title="Proper Roasting" content="Your coffee is brewed by first roasting the green coffee beans" />
            </div>
        </div>
    )
}
