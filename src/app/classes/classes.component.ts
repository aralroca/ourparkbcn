import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  public classes:any;

  constructor() { }

  ngOnInit() {
    this.classes = [
            {
                title:"Clases Niños",
                start: '18:00', 
                end: '20:00', 
                dow: [ 1, 2, 3, 4 ],
                backgroundColor: "#AED581" 
            },
             {
                title:"Clases Adultos",
                start: '20:00', 
                end: '22:00', 
                dow: [ 1, 2, 3, 4 ],
                backgroundColor: "#7CB342" 
            },
            {
               title:"Claror",
               start: '19:00', 
               end: '21:00', 
               dow: [ 1, 3 ],
               backgroundColor: "#E1F5FE" 
            },
             {
               title:"Open park",
               start: '18:00', 
               end: '22:00', 
               dow: [ 5 ],
               backgroundColor: "#D4E157" 
            }
        ];
  }

}
