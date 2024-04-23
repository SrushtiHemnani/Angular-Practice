import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent

  ],
  styleUrl: './app.component.css',
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="https://imgs.search.brave.com/Yggcisif7ktOrAwJ3RvTATdEDtwg0lCi-l5Eo1Gvbjk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjk1/NTMxMzU4L3ZlY3Rv/ci9sZXR0ZXItcy1w/aG90b2dyYXBoeS1h/bmQtY2FtZXJhLXZl/Y3Rvci1pY29ucy1i/YWNrZ3JvdW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1F/ZnhfVU1yVF9UbU10/TTZlWlpxRHlJeEJN/TlNQSHJMejh5elha/a19qck5VPQ" alt="logo" aria-hidden="true" width="40"
     height="50">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
})
export class AppComponent {
  title = 'homes';
}
