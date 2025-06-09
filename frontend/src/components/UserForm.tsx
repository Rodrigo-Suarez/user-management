import React, { useState } from 'react'

interface UserFormProps {
  onAddUser: (name: string, email: string) => void
}

const UserForm: React.FC<UserFormProps> = ({ onAddUser }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() && email.trim()) {
      onAddUser(name, email)
      setName('')
      setEmail('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mb-6">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Agregar Usuario
      </button>
    </form>
  )
}

export default UserForm
