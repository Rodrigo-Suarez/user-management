# User Management Application

## 📌 Descripción

Aplicación **fullstack** desarrollada como prueba técnica para la **gestión de usuarios**. Permite registrar, listar y eliminar usuarios mediante una interfaz web conectada a una API REST. Los datos se almacenan en **memoria** en el backend (sin base de datos).

## 🛠 Tecnologías utilizadas

* **Frontend:** React + Vite, TailwindCSS
* **Backend:** NestJS

## 🧩 Funcionalidades

1. **Registro de usuarios:**
   Formulario con los campos:

   * Nombre
   * Correo electrónico

2. **Listado de usuarios:**
   Vista de todos los usuarios registrados con nombre y correo.

3. **Eliminación de usuarios:**
   Cada usuario tiene un botón para eliminarlo. La lista se actualiza automáticamente.

4. **Almacenamiento en memoria:**
   Los datos se guardan en memoria en el backend. No se utiliza base de datos.

---

## 🖥️ Pasos para instalar y correr el proyecto

### 🔙 Backend (NestJS)

1. Navegar al directorio `/user-management/backend`
   ```bash
   cd backend
   ```
2. Ejecutar:

   ```bash
   npm install
   npm run start
   ```
3. La API estará disponible en `http://localhost:3000`

> Asegúrate de que el CORS esté habilitado para permitir solicitudes del frontend.

---

### 🌐 Frontend (React + Vite + TailwindCSS)

1. Navegar al directorio `/user-management/frontend`
   ```bash
   cd frontend
   ```
2. Ejecutar:

   ```bash
   npm install
   npm run dev
   ```
3. Abrir el navegador en `http://localhost:5173`

---

## 💡 Comandos útiles para desarrollo

| Comando               | Descripción                                |
| --------------------- | ------------------------------------------ |
| `npm run dev`         | Inicia el servidor de desarrollo (frontend)|
| `npm run start:dev`   | Inicia el servidor de desarrollo (backend) |
| `npm run build`       | Construye el frontend para producción      |
| `npm run start`       | Inicia la aplicación backend NestJS        |

---

## 📁 Estructura del proyecto

```
/user-management
├── /frontend   → Aplicación React + Vite + TailwindCSS
├── /backend    → API NestJS con almacenamiento en memoria
└── README.md   → Instrucciones y descripción del proyecto
```

