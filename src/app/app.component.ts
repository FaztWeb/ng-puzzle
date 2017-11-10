import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  switch1Number: number;
  switch2Number: number;
  switch3Number: number;
  switch4Number: number;

  ngOnInit():any {
    this.switch1Number = Math.round(Math.random());
    this.switch2Number = Math.round(Math.random());
    this.switch3Number = Math.round(Math.random());
    this.switch4Number = Math.round(Math.random());

    console.log(
      this.switch1Number,
      this.switch2Number,
      this.switch3Number,
      this.switch4Number
    );
    
  }

}
