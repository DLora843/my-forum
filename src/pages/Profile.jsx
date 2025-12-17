import "./Profile.css";

export default function Profile() {
    // Взимаме user от контекста
    // const { user } = useContext(AuthContext);

    // Временно фиктивен user за тест
    const user = { email: "Georgi.G@abv.bg", gender: "male" };
    const avatar = user?.gender === "female"
        ? "/avatars/female.png"
        : "/avatars/male.png";

    return (
        <div className="profile-container">
            <h1>Моят профил</h1>
            <div className="profile-card">
                <img src={avatar} alt="avatar" className="profile-avatar" />
                <div className="profile-info">
                    <p><b>Потребител:</b> {user?.email || "Няма информация"}</p>
                    <p><b>Роля:</b> User</p>
                    <p><b>Регистрация:</b> ✔</p>
                </div>
            </div>
        </div>
    );
}
