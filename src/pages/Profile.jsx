import { useUser } from "context/user";
import { Link } from "react-router-dom";

const Profile = () => {
    const {
        displayName: name,
        email,
        phoneNumber: phone,
        photoURL,
        bio,
    } = useUser();
    return (
        <>
            <h1 className="text-3xl font-normal mb-2 text-center">
                Personal info
            </h1>
            <p className="text-lg font-light mb-11 text-center">
                Basic info, like your name and photo
            </p>
            <div className="border border-bd rounded-3xl">
                <div className="profile-input text-gray-82 flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <h1 className="text-black dark:text-secondary-dark text-lg leading-none font-bold mb-1">
                            Profile
                        </h1>
                        <p className="text-sm">
                            Some info may be visible to other people
                        </p>
                    </div>
                    <Link
                        to="/u/edit"
                        type="button"
                        className="flex-shrink-0 flex-grow-0 border border-current rounded-xl py-2 px-8"
                    >
                        Edit
                    </Link>
                </div>
                <div className="profile-input !py-3.5">
                    <p className="uppercase w-1/4 font-medium text-sm text-bd">
                        Photo
                    </p>
                    <div className="rounded-lg w-[72px] h-[72px] bg-bd overflow-hidden">
                        <img
                            src={photoURL}
                            alt=" "
                            className="w-full h-full rounded-lg"
                            onError={e => {
                                e.target.style.display = "none";
                            }}
                        />
                    </div>
                </div>
                <div className="profile-input">
                    <p className="uppercase w-1/4 font-medium text-sm text-bd">
                        Name
                    </p>
                    <p className="w-3/4">{name || "-"}</p>
                </div>
                <div className="profile-input">
                    <p className="uppercase w-1/4 font-medium text-sm text-bd">
                        Bio
                    </p>
                    <p className="w-3/4">
                        {/* `I am a software developer and a big fan of devchallenges...` */}
                        {bio || "-"}
                    </p>
                </div>
                <div className="profile-input">
                    <p className="uppercase w-1/4 font-medium text-sm text-bd">
                        Phone
                    </p>
                    <p className="w-3/4">{phone || "-"}</p>
                </div>
                <div className="profile-input">
                    <p className="uppercase w-1/4 font-medium text-sm text-bd">
                        Email
                    </p>
                    <p className="w-3/4">{email || "-"}</p>
                </div>
                <div className="profile-input !border-b-0">
                    <p className="uppercase w-1/4 font-medium text-sm text-bd">
                        Password
                    </p>
                    <p className="w-3/4">************</p>
                </div>
            </div>
        </>
    );
};

export default Profile;
