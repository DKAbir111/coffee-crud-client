import Banner from "../components/Banner";
import FollowOnInstra from "../components/FollowOnInstra";
import PopulerProucts from "../components/PopulerProucts";
import SubBanner from "../components/SubBanner";


export default function HomeLayout() {
    return (
        <div>
            <Banner />
            <SubBanner />
            <FollowOnInstra />
            <PopulerProucts />
        </div>
    )
}
