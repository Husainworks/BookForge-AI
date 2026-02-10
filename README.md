# BookForge‑AI ✍️📘

**BookForge‑AI** is an **AI‑powered book writing and editing platform** built using the **MERN stack**, integrated with **Gemini AI** to assist authors in writing, editing, and refining books end‑to‑end. The platform allows users to write chapters manually or leverage AI to generate chapters or even entire books while controlling the **tone and writing style**.

This project blends real‑world full‑stack engineering with practical AI integration for creative workflows.

---

## 🧠 Features

### 👤 User Features

* Secure signup & login using **JWT authentication**.
* Create and manage books with multiple chapters.
* Write chapters manually using a rich editor.
* Upload and manage **custom book cover images**.
* Export completed books as **PDF** or **DOCX** for offline sharing and publishing.
* Select desired **writing tone**.

---

### 🤖 AI‑Powered Writing (Gemini AI)

* Edit or rewrite **specific sections** of a chapter using AI
* Generate **entire chapters** with a single prompt
* Generate a **complete book** using AI assistance
* Tone‑controlled AI output for consistent writing style

---

## 🔐 Authentication & Security

* JWT‑based authentication for secure session management
* Protected routes ensuring user‑specific book access
* Token‑based authorization for all AI and book operations

---

## 🧱 Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* HTML5, CSS3

### Backend

* Node.js
* Express.js
* JWT Authentication

### Database

* MongoDB
* Mongoose ODM

### AI Integration

* Gemini AI for content generation and editing

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Husainworks/BookForge-AI.git

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

---

### Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
GEMINI_API_KEY=your_gemini_api_key
```

---

## ▶️ Run the Application

```bash
# Start backend server
npm run dev

# Start frontend
npm start
```

---

## 🧪 AI Writing Flow

* User selects book or chapter
* Chooses tone and AI action (edit / generate)
* Request sent to Gemini AI
* Generated content returned and saved securely

