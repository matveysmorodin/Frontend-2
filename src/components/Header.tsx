import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header style={{ padding: "10px", background: "#333", color: "white", textAlign: "center" }}>
            <h1>Мои пользователи</h1>
            <nav>
                <Link to="/" style={{ color: "white", textDecoration: "none", marginRight: "20px" }}>🏠 Home</Link>
                <Link to="/users" style={{ color: "white", textDecoration: "none" }}>👤 Users</Link>
            </nav>
        </header>
    );
};

export default Header;
