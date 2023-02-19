import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {
  @Input() name : string = '';
  @Input() idade : number = 0;
  @Input() dados! : {email: string, role : string};

}
