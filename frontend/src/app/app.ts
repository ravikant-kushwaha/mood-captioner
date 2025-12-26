import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Caption } from './caption';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');

  status: string[] = [];
  caption = '';
  imageFile?: File;
  mood = 'happy';

  constructor(private captionService: Caption) {}

  onFileSelect(event: any) {
    this.imageFile = event.target.files[0];
  }

  async submit() {
    if (!this.imageFile) return;

    this.status = [];
    this.caption = '';

    await this.captionService.generateCaption(
      this.imageFile,
      this.mood,
      (line) => {
        this.status.push(line);
        if (line.startsWith('Final caption:'))
          this.caption = line.replace('Final caption:', '').trim();
      }
    );
  }
}
