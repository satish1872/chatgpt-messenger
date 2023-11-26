# ChatGPT-MessagingHub 

## Overview
ChatGPT-MessagingHub is an innovative chat application that leverages the power of OpenAI's ChatGPT to offer an interactive and dynamic chatting experience. Built using Next.js 13 and TypeScript, this project showcases a full-stack development approach with robust authentication, real-time database management, and an elegant user interface.

## Key Features
- **AI-Powered Chat Functionalities:** Utilizes OpenAI's ChatGPT API for advanced chatting capabilities.
- **Full-Stack Development:** Built with Next.js 13 (React framework) and TypeScript, ensuring a scalable and type-safe architecture.
- **Google OAuth Authentication:** Secure authentication system implemented using NextAuth and Firebase.
- **Real-Time NoSQL Database:** Uses Firebase Firestore for efficient real-time data handling and synchronization.
- **Dynamic User Interface:** Responsive design crafted with Tailwind CSS, featuring server-client components for a seamless user experience.
- **Agile Development:** Project managed using agile methodologies, focusing on efficient delivery and adaptability.

## Project Structure
```
.
├── README.md
├── app
│   ├── chat
│   │   └── [id]
│   │       └── page.tsx
│   ├── head.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── Chat.tsx
│   ├── ChatInput.tsx
│   ├── ChatRow.tsx
│   ├── ClientProvider.tsx
│   ├── Login.tsx
│   ├── Message.tsx
│   ├── ModelSelection.tsx
│   ├── NewChat.tsx
│   ├── SessionProvider.tsx
│   └── SideBar.tsx
├── firebase.ts
├── firebaseAdmin.ts
├── lib
│   ├── chatgpt.ts
│   └── queryApi.ts
├── next-env.d.ts
├── next.config.js
├── package.json
├── pages
│   └── api
│       ├── askQuestion.ts
│       ├── auth
│       │   └── [...nextauth].ts
│       ├── getEngines.ts
│       └── hello.ts
├── postcss.config.js
├── public
│   ├── chatgptLogo.png
│   ├── favicon.ico
│   └── vercel.svg
├── serviceAccountKey.json
├── styles
│   └── globals.css
├── tailwind.config.js
├── tsconfig.json
├── typings.d.ts
└── yarn.lock
```

## Demos and Deployment
- **Video Demo:** [Insert Drive Recording Link]
- **Live Deployment:** [Insert Deployed Demo Link]

## Setup and Installation
To set up this project locally, follow these steps:

1. **Clone the Repository:**
   ```
   git clone [repository URL]
   cd chatgpt-messaginghub
   ```

2. **Install Dependencies:**
   ```
   yarn install
   ```

3. **Setup Environment Variables:**
   - Configure the required environment variables in a `.env.local` file.

4. **Run the Development Server:**
   ```
   yarn dev
   ```
   This will start the development server on `localhost:3000`.
   
## Deploying to Vercel
Prepare for Deployment: Ensure the project is ready for production with optimized build settings.
Connect to Vercel: Use Vercel's seamless integration with GitHub for easy deployment.
Continuous Deployment: Automated builds and deployments with every git push, demonstrating knowledge in CI/CD practices.
## Usage
Instructions on how to use the application, including any setup required for first-time users.

## Contributing
Guidelines for contributing to the project, including coding standards and pull request process.

## License
Details about the project's licensing.
