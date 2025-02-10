# Real-Time Collaboration App - Miro Clone

## 📌 Overview
In this video, we learn how to build a **Real-Time Collaboration App** that enables remote teams to collaborate and brainstorm on a project seamlessly. This application is inspired by **Miro** and includes essential real-time features for effective teamwork.

## 🛠️ Tech Stack
The project is built using the following technologies:
- **Vue 3** - Frontend framework for building interactive UI
- **Tailwind CSS** - Utility-first CSS framework for styling
- **TypeScript** - Strongly typed JavaScript for scalable development
- **Laravel Reverb** - Real-time communication layer in Laravel
- **Laravel** - Backend framework for handling API requests
- **Yjs** - CRDT-based framework for real-time collaboration
- **Google Auth** - Authentication via Google

## 🎯 Features
- Project setup with Vue 3 and Tailwind CSS
- Implementing TypeScript for better type safety
- Setting up Laravel and Laravel Reverb for real-time updates
- Integrating Google Authentication
- Introduction to Yjs for state synchronization

## 🏁 Getting Started
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-repo/miro_clone.git
cd miro_clone
```

### 2️⃣ Install Dependencies

- php artisan install:api

- php artisan install:broadcasting.

    - you will be prompted to install == laravel reverb ==
    - This command install ==laravel-echo and pusher-js ==
- publish reverb config file -> php artisan reverb:install

- next type "npm run build" to compile your application's assets

-------------------------------- FRONTED SETUP --------------------------------

- npm i -D @vitejs/plugin-vue

- npm i vue@latest

- npm i vue-router@4

- npm i -D typescript vue-tsc

- create tsconfig.ts file

- tailwind css



### 3️⃣ Run the Project
#### Start Laravel Backend
```bash
php artisan serve
```

#### Start Vue Frontend
```bash
npm run dev
```

## 📌 Next Steps
- Implementing real-time drawing & board interaction
- Enhancing user experience with WebSockets & Yjs
- Adding more authentication methods

Stay tuned for **Part 2!** 🚀

## 📜 License
This project is licensed under the MIT License.
