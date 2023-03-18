import { Component } from '@angular/core';
import { Post } from '@webteam/posts';

@Component({
  selector: 'webteam-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [{ title: 'upisi', description: 'aktivni' }];
  title = 'riteh';
}
