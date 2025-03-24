import { useState, useEffect } from "react";

// Тип данных для пользователя
interface User {
    id: number;
    name: string;
}

const UsersPage = () => {
    const [showUsers, setShowUsers] = useState(false);
    const [users, setUsers] = useState<User[]>([]); // Здесь типизируем users как массив объектов User

    useEffect(() => {
        if (showUsers) {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => response.json())
                .then((data) => setUsers(data))
                .catch((error) => console.error("Ошибка загрузки", error));
        }
    }, [showUsers]);

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <label>
                <input type="checkbox" checked={showUsers} onChange={() => setShowUsers(!showUsers)} />
                Показать пользователей
            </label>

            {showUsers && (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                        ))}
                </ul>
            )}
        </div>
    );
};

export default UsersPage;
