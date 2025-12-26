from fastapi import FastAPI, UploadFile, File, Form
from fastapi.responses import StreamingResponse
from transformers import pipeline

app = FastAPI()

image_captioner = pipeline("image-to-text", model="OFA-Sys/ofa-mini")
mood_model = pipeline("text2text-generation", model="google/flan-t5-small")

@app.post("/generate_caption")
async def generate_caption(
    image: UploadFile = File(...),
    mood: str = Form(...)
):

    async def stream():
        yield "Processing image...\n"

        raw_caption = image_captioner(image.file)[0]["generated_text"]
        yield f"Base caption: {raw_caption}\n"

        prompt = f"Rewrite this caption in a {mood} tone: {raw_caption}"
        mood_caption = mood_model(prompt)[0]["generated_text"]

        yield f"Final caption: {mood_caption}\n"

    return StreamingResponse(stream(), media_type="text/plain")
