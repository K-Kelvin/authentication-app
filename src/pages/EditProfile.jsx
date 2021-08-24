/* eslint-disable no-alert */
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import {
    MdChevronLeft as LeftIcon,
    MdPhotoCamera as CameraIcon,
} from "react-icons/md";
import useForm from "hooks/useForm";
import { useUser } from "context/user";
import { changePassword, updateCurrentUser } from "utils/firebaseUserActions";

const EditProfile = () => {
    const history = useHistory();
    const { state, setState, onChange } = useForm("/profile");
    const imageRef = useRef();
    const user = useUser();
    const formRef = useRef();

    const onSubmit = e => {
        e.preventDefault();
        updateCurrentUser(state).then(() => {
            alert("User updated successfully!");
            if (state.password) {
                changePassword(state.password)
                    .then(() => alert("Password changed successfully!"))
                    .catch(() => alert("Failed to change password!"));
            }
            setState({});
            formRef.current.reset();
        });
    };
    return (
        <>
            <button
                type="button"
                className="text-blue1 mb-3 flex gap-1.5 items-center"
                onClick={history.goBack}
            >
                <LeftIcon className="w-6 h-6" />
                Back
            </button>
            <div className="rounded-xl border border-bd px-12 py-11">
                <h1 className="text-black dark:text-secondary-dark text-2xl mb-1">
                    Change Info
                </h1>
                <p className="text-bd text-sm mb-6">
                    Changes will be reflected to every services
                </p>
                <form onSubmit={onSubmit} ref={formRef}>
                    <div className="mb-8 flex items-center gap-7">
                        <div className="relative rounded w-[72px] h-[72px] bg-bd overflow-hidden">
                            <input
                                type="file"
                                name="image"
                                accept="image/png, image/jpeg"
                                multiple={false}
                                className="peer visually-hidden focus:outline-none"
                                onChange={e => {
                                    if (e.target.files !== 0) {
                                        onChange(e);
                                        const file = e.target.files[0];
                                        if (!file) return;
                                        imageRef.current.src =
                                            URL.createObjectURL(file);
                                        imageRef.current.style.visibility =
                                            "visible";
                                    }
                                }}
                                id="image"
                            />
                            <label
                                htmlFor="image"
                                className="absolute rounded top-0 left-0 z-10 hover:cursor-pointer w-full h-full peer-focus:ring-2 ring-blue1 ring-inset text-transparent"
                            >
                                Change profile photo
                            </label>
                            <img
                                src={user.photoURL || user.photoUrl || null}
                                alt=" "
                                ref={imageRef}
                                className="rounded w-[72px] h-[72px] object-cover object-center"
                                onError={e => {
                                    e.target.style.visibility = "hidden";
                                }}
                            />
                            <CameraIcon className="text-white w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <span className="uppercase font-medium text-sm">
                            Change photo
                        </span>
                    </div>
                    <div className="w-full md:max-w-[416px] mb-6">
                        <label htmlFor="name" className="block mb-1">
                            Name
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name..."
                                className="rounded-xl border border-gray-82 text-82 placeholder-bd text-base px-4 py-3 w-full bg-transparent focus:outline-none focus:border-blue1 ring-blue1 focus:ring-1"
                                defaultValue={user.displayName}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                    <div className="w-full md:max-w-[416px] mb-6">
                        <label htmlFor="bio" className="block mb-1">
                            Bio
                            <textarea
                                name="bio"
                                id="bio"
                                placeholder="Enter your bio..."
                                className="rounded-xl border border-gray-82 text-82 placeholder-bd text-base px-4 py-3 w-full bg-transparent focus:outline-none focus:border-blue1 ring-blue1 focus:ring-1"
                                rows={3}
                                defaultValue={user.bio}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                    <div className="w-full md:max-w-[416px] mb-6">
                        <label htmlFor="phone" className="block mb-1">
                            Phone
                            <input
                                type="phone"
                                name="phone"
                                id="phone"
                                placeholder="Enter your phone..."
                                className="rounded-xl border border-gray-82 text-82 placeholder-bd text-base px-4 py-3 w-full bg-transparent focus:outline-none focus:border-blue1 ring-blue1 focus:ring-1"
                                defaultValue={user.phoneNumber || user.phone}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                    <div className="w-full md:max-w-[416px] mb-6">
                        <label htmlFor="email" className="block mb-1">
                            Email
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email..."
                                className="rounded-xl border border-gray-82 text-82 placeholder-bd text-base px-4 py-3 w-full bg-transparent focus:outline-none focus:border-blue1 ring-blue1 focus:ring-1"
                                defaultValue={user.email}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                    <div className="w-full md:max-w-[416px] mb-6">
                        <label htmlFor="password" className="block mb-1">
                            Password
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your new password..."
                                className="rounded-xl border border-gray-82 text-82 placeholder-bd text-base px-4 py-3 w-full bg-transparent focus:outline-none focus:border-blue1 ring-blue1 focus:ring-1"
                                // onChange={onChange}
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue1 text-white rounded-lg px-6 py-2 font-medium"
                    >
                        Save
                    </button>
                </form>
            </div>
        </>
    );
};

export default EditProfile;
