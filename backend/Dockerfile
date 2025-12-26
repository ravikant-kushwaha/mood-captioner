FROM python:3.11-slim

WORKDIR /app

# Install system deps (Pillow, PyTorch sometimes need libs)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libjpeg62-turbo-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Copy app
COPY . .

EXPOSE 8000

# Start FastAPI (production server)
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
