import { Component, Input } from '@angular/core';
import { Post } from '../models/posts';

@Component({
  selector: 'webteam-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  @Input() posts: Post[] = [];
}
