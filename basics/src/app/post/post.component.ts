import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  OnInit, 
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postImage = ''
  @Output() imageSelected = new EventEmitter<string>()

  constructor() {

  }

  ngOnInit() {

  }

}
