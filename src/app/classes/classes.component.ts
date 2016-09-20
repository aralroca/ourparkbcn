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
                title:"Clases Aral",
                start: '18:00', 
                end: '20:00', 
                dow: [ 1 ],
                backgroundColor: "#FF8A80" 
            },
            {
               title:"Clases Josep",
               start: '18:00', 
               end: '20:00', 
               dow: [ 2, 4 ],
               backgroundColor: "#03A9F4"
            },
            {
               title:"Clases Guillem",
               start: '18:00', 
               end: '20:00', 
               dow: [ 3 ],
               backgroundColor: "#CDDC39" 
            },
             {
               title:"Lliure",
               start: '17:00', 
               end: '21:00', 
               dow: [ 5 ],
               backgroundColor: "#26A69A" 
            }
        ];
  }

}
