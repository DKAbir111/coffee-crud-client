import AddCoffee from "../components/AddCoffee";
import Banner from "../components/Banner";
import FollowOnInstra from "../components/FollowOnInstra";
import SubBanner from "../components/SubBanner";


export default function HomeLayout() {
    return (
        <div>
            <Banner />
            <SubBanner />
            <FollowOnInstra />
            <AddCoffee />
        </div>
    )
}
