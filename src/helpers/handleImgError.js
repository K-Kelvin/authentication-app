import fallbackImg from "images/devchallenges.png";
import { MdAccountCircle as AccountIcon } from "react-icons/md";

export const Fallback = () => {
    return (
        <div
            className="rounded-full w-8 h-8"
            // style={{ color: "#fafafa", background: "#bdbdbd" }}
        >
            <AccountIcon className="w-8 h-8 rounded-full text-[#bdbdbd] bg-[#fafafa]" />
        </div>
    );
};
function handleImgError(e) {
    // prevent infinite loop if fallback img also fails
    if (e.target.src !== fallbackImg) {
        e.target.onerror = null;
        e.target.src = fallbackImg;
        // e.target.classList.add("bg-f2")
    }
}

export default handleImgError;
