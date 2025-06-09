import React, { useState, useEffect } from 'react'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

interface User {
  id: number
  name: string
  email: string
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null) // Nuevo estado para errores

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/users')
      if (response.ok) {
        const data = await response.json()
        setUsers(data)
      }
    } catch (error) {
      setError('Error al obtener usuarios')
      console.error('Error fetching users:', error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const addUser = async (name: string, email: string) => {
    setError(null) // Limpia el error anterior
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })
      if (response.ok) {
        fetchUsers()
      } else {
        const data = await response.json()
        setError(data.message || 'Error al agregar usuario')
      }
    } catch (error) {
      setError('Error al agregar usuario')
      console.error('Error adding user:', error)
    }
  }

  const deleteUser = async (id: number) => {
    setError(null)
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        fetchUsers()
      } else {
        const data = await response.json()
        setError(data.message || 'Error al eliminar usuario')
      }
    } catch (error) {
      setError('Error al eliminar usuario')
      console.error('Error deleting user:', error)
    }
  }

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Gestión de Usuarios</h1>
      {error && (
        <div className="mb-4 text-red-600 border border-red-300 bg-red-50 px-4 py-2 rounded">
          {error}
        </div>
      )}
      <UserForm onAddUser={addUser} />
      <UserList users={users} onDeleteUser={deleteUser} />
    </div>
  )
}

export default App
