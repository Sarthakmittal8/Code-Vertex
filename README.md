# ⚡ CodeVertex
### A Modern Full-Stack Coding Platform for Developers and Competitive Programmers

**CodeVertex** is a full-stack coding platform designed for developers to practice programming problems, improve problem-solving skills, and prepare for technical interviews. The platform delivers a seamless coding experience with real-time code execution, curated coding challenges, secure authentication, and progress tracking in a clean and responsive interface.

---

## 🚀 Key Highlights

- Secure signup, login, and session management using Firebase Authentication
- Solve algorithmic and interview-focused coding challenges
- Execute and test code instantly in a real-time environment
- Track accepted and failed submissions dynamically
- Problems categorized into Easy, Medium, and Hard difficulties
- Fully responsive and optimized for desktop, tablet, and mobile devices
- Developer-friendly, modern code editor interface
- Fast navigation and dynamic routing powered by Next.js
- Store user progress and submissions securely with Firebase Cloud Database

---

## 🧩 System Architecture

CodeVertex leverages a modern tech stack to deliver a fast and reliable coding environment.

### 🔹 Frontend

- Next.js
- React.js
- TypeScript
- TailwindCSS

### 🔹 Backend & Services

- Firebase Authentication
- Firebase Firestore
- Firebase Hosting

---

## 📂 Project Structure

```bash
codevertex/
│
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js App Router
│   ├── components/         # Reusable UI components
│   ├── firebase/           # Firebase configuration
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility/helper functions
│   ├── styles/             # Global styles
│   └── types/              # TypeScript type definitions
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Setup & Installation

### Prerequisites

- Node.js (v18+)
- Firebase Project

---

### 1️⃣ Clone Repository

```bash
git clone [https://github.com/your-username/codevertex.git](https://github.com/your-username/codevertex.git)
cd codevertex
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env.local` file in the root directory and add your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

---

### 4️⃣ Start Development Server

```bash
npm run dev
```

---

### 5️⃣ Open in Browser

Go to [http://localhost:3000](http://localhost:3000) to view your local application!

---

## 💻 Platform Capabilities

### 👤 User Experience

- Create an account and securely log in
- Browse and filter a curated list of coding problems
- Run and test code in real time against test cases
- Track historical submissions and overall coding progress
- Practice premium interview-style questions

---

## 📸 Preview

A clean and modern coding platform built for developers, competitive programmers, and interview preparation enthusiasts.

---

## 📜 License

This project is licensed under the MIT License.

---

## 🤝 Contributions

Contributions, suggestions, and improvements are welcome.
Feel free to fork the repository, create a new feature branch, commit your changes, and submit a pull request!
