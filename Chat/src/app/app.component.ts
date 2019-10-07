import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chat';
  model: any;
  q=[];
  i=0;
  j=0;
  p:any;
  todos: string[] = [];
  todo: string;
  todop: string;
  inp: string;
  inps: string[]=[];



  constructor( public http: HttpClient)
  {
    this.http.get('Question.json').toPromise().then(data =>
      {
        for(let e in data)
          this.q.push(data[e]);
      });

  }

  ngOnInit(){
    this.model=
      [{question:'What would the teacher start doing improve the course?'},
        {question:'what would the teacher stop doing to improve the course?'},
        {question:'What is working with the course and continue the same'},
        {question:'What is the overall experience with the course'},
        {question:'Do you have any other comments'},

      ]
  }

  Click(){
    this.inps.push(this.todo);
   this.inp=this.model[this.i].question;
   this.i=this.i+1;
   this.inps.push(this.inp);
this.todo="";
this.inp="";

  }

}
