import EditProfile from "../components/Profile/EditProfile";
import ProfileCard from "../components/Profile/ProfileCard";
import Loader from "../components/Common/Loader";
import { useGlobalStore } from "../store/useStore";

const Profile = () => {
    const { user } = useGlobalStore();
    if (!user) return <Loader />;

    return (
        <div className="flex justify-center gap-10 items-center relative my-24 px-3">
            <EditProfile user={user} />
            <ProfileCard user={user} />
        </div>
    );
};

export default Profile;
