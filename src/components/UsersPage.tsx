import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
    id: number;
    name: string;
}

function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [showUsers, setShowUsers] = useState(false); // Состояние для отображения списка пользователей

    useEffect(() => {
        // Загружаем пользователей только при необходимости
        if (showUsers) {
            axios.get('http://localhost:7000/api/users')
                .then(response => {
                    setUsers(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the data!", error);
                });
        }
    }, [showUsers]); // Эффект сработает каждый раз, когда showUsers изменится

    return (
        <div>
            <h1>Мои пользователи</h1>

            {/* Кнопка с галочкой для отображения списка */}
            <button onClick={() => setShowUsers(!showUsers)}>
                {showUsers ? 'Скрыть пользователей' : 'Показать пользователей'}
            </button>

            {/* Если showUsers истинно, то отображаем список пользователей */}
            {showUsers && (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UsersPage;
