const CreatedBy = ({ className }) => (
    <div
        className={`flex justify-between items-center mt-3 text-sm ${className}`}
    >
        <p>
            created by{" "}
            <a
                href="https://github.com/K-Kelvin"
                target="blank"
                className="underline font-bold"
            >
                Kijanda
            </a>
        </p>
        <p>devChallenges.io</p>
    </div>
);

export default CreatedBy;
