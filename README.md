Here’s an updated **README.md** for your project that includes the necessary instructions on how to set up and run it:

---

# Admin Dashboard with Authentication 🚀

A secure and responsive **Admin Dashboard** built with **ReactJS**, **NodeJS**, and **MySQL**, featuring complete **user registration**, **login**, and **admin authentication** modules.

## 🔐 Features

* 🔸 User Registration & Login
* 🔸 Admin access to the dashboard
* 🔸 Responsive UI with SCSS styling
* 🔸 Logout functionality
* 🔸 MySQL integration
* 🔸 Node.js backend API with Express

---

## 📂 Tech Stack

### Frontend

* ReactJS
* Axios (API calls)
* React Router DOM
* SCSS (modular, responsive styling)

### Backend

* NodeJS
* ExpressJS
* MySQL database

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/vadla-vamsikrishna/admin-auth-dashboard-using-react.js-node.js-MySQL.git
```

OR

Download the ZIP file from GitHub and extract it.

---

### 2. Install Dependencies

After cloning or downloading the project, navigate to the project directory in your terminal or Git Bash.

#### Frontend (ReactJS):

1. Go to the **client** folder.

```bash
cd client
```

2. Install the required dependencies:

```bash
npm install
```

#### Backend (NodeJS + ExpressJS):

1. Go to the **server** folder.

```bash
cd ../server
```

2. Install the required dependencies:

```bash
npm install
```

3. **Vite setup**: If Vite is not installed in the **client** folder, you can add it using:

```bash
npm install vite
```

Alternatively, you can follow the [Vite documentation](https://vitejs.dev/guide/) for proper setup if not already configured.

---

### 3. Database Setup (MySQL)

1. Install **XAMPP** or another MySQL server.

2. Start **MySQL** from XAMPP.

3. Create a new database called `plantdb`.

```sql
CREATE DATABASE plantdb;
```

4. In the `plantdb` database, create a table called `users` with the following structure:

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

---

### 4. Running the Project

#### Client (Frontend):

1. Go to the **client** folder.

```bash
cd client
```

2. Run the frontend ReactJS application:

```bash
npm run dev
```

#### Server (Backend):

1. Go to the **server** folder.

```bash
cd ../server
```

2. Run the backend NodeJS server:

```bash
node index.js
```

---

## 🎯 Testing the Application

After completing the setup and running both frontend and backend, you can access the admin dashboard by visiting:

* **Frontend**: `http://localhost:5173`
* **Backend**: API requests are handled in the backend running on `http://localhost:3002` (or the port specified in your `index.js` file).

---

## 💡 Notes

* Make sure MySQL is running and accessible via **XAMPP** (or another server).
* Adjust your **CORS** configuration in the **server** to allow frontend requests if necessary.

---

## 👥 Contributor

 Vadla Vamsi Krishna (https://github.com/vadla-vamsikrishna)

---

Let me know if you need anything else or any further adjustments!
