import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Caption {
  async generateCaption(image: File, mood: string, onChunk: (line: string) => void) {

    const form = new FormData();
    form.append('image', image);
    form.append('mood', mood);

    const response = await fetch('http://localhost:8000/generate_caption', {
      method: 'POST',
      body: form
    });

    if (!response.body) return;

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const text = decoder.decode(value);
      text.split('\n').forEach(line => {
        if (line.trim()) onChunk(line);
      });
    }
  }
}
