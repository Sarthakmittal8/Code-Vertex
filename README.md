⚡ CodeVertex

A Modern Full-Stack Coding Platform for Developers and Competitive Programmers

CodeVertex is a full-stack coding platform designed for developers to practice programming problems, improve problem-solving skills, and prepare for technical interviews. The platform delivers a seamless coding experience with real-time code execution, curated coding challenges, secure authentication, and progress tracking in a clean and responsive interface.

✨ Features

User Authentication - Secure signup, login, and session management using Firebase Authentication

Coding Problems - Solve algorithmic and interview-focused coding challenges

Real-Time Code Execution - Execute and test code instantly

Submission Tracking - Track accepted and failed submissions

Difficulty Levels - Problems categorized into Easy, Medium, and Hard

Responsive Design - Optimized for desktop, tablet, and mobile devices

Modern Code Editor - Developer-friendly coding environment

Fast Navigation - Dynamic routing powered by Next.js

Cloud Database Integration - Store user progress and submissions securely with Firebase

🛠️ Technologies Used

Frontend

Next.js

TypeScript

React.js

TailwindCSS

Backend & Services

Firebase Authentication

Firebase Firestore

Firebase Hosting

🏗️ Project Structure

codevertex/
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js App Router
│   ├── components/         # Reusable UI components
│   ├── firebase/           # Firebase configuration
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility/helper functions
│   ├── styles/             # Global styles
│   └── types/              # TypeScript type definitions
├── package.json
├── tsconfig.json
└── README.md


🚀 Installation

Prerequisites

Node.js (v18+)

Firebase Project

⚙️ Setup

1. Clone the repository

git clone [https://github.com/your-username/codevertex.git](https://github.com/your-username/codevertex.git)
cd codevertex


2. Install dependencies

npm install


3. Configure Environment Variables

Create a .env.local file in the root directory and add your Firebase credentials:

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id


4. Start the development server

npm run dev


5. Open in browser

Go to http://localhost:3000 to view your local application!

🔍 Usage

User Features

Create an account and securely log in

Browse and solve coding problems

Run and test code in real time

Track submissions and coding progress

Practice interview-style questions

📸 Preview

A clean and modern coding platform built for developers, competitive programmers, and interview preparation enthusiasts.

📝 License

This project is licensed under the MIT License.

🤝 Contributing

Fork the repository

Create a new feature branch

Commit your changes

Push the branch

Open a Pull Request

⭐ Support

If you found this project useful, consider giving it a star on GitHub!