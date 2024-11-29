import Banner from "../components/Banner";
import FollowOnInstra from "../components/FollowOnInstra";
import PopulerProucts from "../components/PopulerProucts";
import SubBanner from "../components/SubBanner";
import Title from "../components/Title";


export default function HomeLayout() {
    return (
        <div>
            <Title title="Home" />
            <Banner />
            <SubBanner />
            <FollowOnInstra />
            <PopulerProucts />
        </div>
    )
}
