import { RiRestaurant2Line, RiVerifiedBadgeLine } from "react-icons/ri";
import Advantages from "../fragments/Advantages";
import { PiChefHatFill } from "react-icons/pi";
import { TbBuildingStore } from "react-icons/tb";

const AdvantagesLayout = () => {
    return (
        <div className="flex gap-2 mt-6 group">
            <Advantages
            icon={<RiVerifiedBadgeLine/>}
            title="Exceptional Quality"
            desc="We pride ourselves on serving only the finest, hand-picked coffee beans, ensuring every cup delivers a rich and satisfying flavor."
            />
            <Advantages
            icon={<TbBuildingStore/>}
            title="Cozy Atmosphere"
            desc="Our coffee shop offers a warm and inviting ambiance, perfect for relaxing, working, or catching up with friends."
            />
            <Advantages
            icon={<PiChefHatFill/>}
            title="Friendly Service"
            desc="Our baristas are passionate about coffee and dedicated to providing you with a personalized and memorable experience every time you visit."
            />
        </div>
    )
}

export default AdvantagesLayout;