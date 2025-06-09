import React from 'react'

interface User {
  id: number
  name: string
  email: string
}

interface UserListProps {
  users: User[]
  onDeleteUser: (id: number) => void
}

const UserList: React.FC<UserListProps> = ({ users, onDeleteUser }) => {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Usuarios Registrados</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="flex justify-between items-center border-b border-gray-300 py-2"
          >
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
            <button
              onClick={() => onDeleteUser(user.id)}
              className="text-red-600 hover:text-red-800 transition"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
