import { UserProfile } from "@clerk/nextjs";
import Header from "@/components/Header";


const ProfilePage = () => {
    return (
        
        <>
        <Header />
        <UserProfile />
        </>
    )
}

export default ProfilePage