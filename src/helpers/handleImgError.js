import fallbackImg from "images/devchallenges.png";

function handleImgError(e) {
    // prevent infinite loop if fallback img also fails
    if (e.target.src !== fallbackImg) {
        e.target.onerror = null;
        e.target.src = fallbackImg;
        // e.target.classList.add("bg-f2")
    }
}

export default handleImgError;
