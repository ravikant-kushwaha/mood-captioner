# 🎨 Mood Captioner — AI Image → Mood-Based Captions (Angular + FastAPI + HF)

Generate **creative, mood-aware captions** from images — in real-time — using
lightweight Hugging Face models.

No accounts.  
No database.  
No image storage.  
Everything runs **ephemerally** and can run locally on a small machine.

---

## 🚀 What it does

1️⃣ Upload an image  
2️⃣ Choose a mood (happy, sad, mysterious, dramatic, etc.)  
3️⃣ The app:

- extracts a base caption from the image  
- rewrites it in the selected mood  
- streams progress live so the UI never “hangs”

---

## 🧠 Models Used (small + local-friendly)

| Task | Model | Why |
|------|-------|-----|
| Image captioning | `OFA-Sys/ofa-mini-image-captioning` | Lightweight + CPU friendly |
| Text rewriting | `google/flan-t5-small` | Small, good at instruction prompts |

---

## 🏗 Architecture (DB-less & Realtime)

<p align="center">
  <img src="docs/architecture.png" width="650">
</p>

## 📂 Repository Structure
mood-captioner/
│
├── backend/
│ ├── app.py
│ ├── requirements.txt
│ └── Dockerfile
│
├── frontend/
│ ├── src/
│ ├── package.json
│ └── Dockerfile
│
├── docker-compose.yml
└── README.md

---

# 🧑‍💻 Development Setup (Local)

### 1️⃣ Backend

cd backend
pip install -r requirements.txt
uvicorn app:app --reload --port 8000

### 2️⃣ Frontend (Angular)

cd frontend
npm install
npm start

### 3️⃣ Build & run both services

docker compose up --build