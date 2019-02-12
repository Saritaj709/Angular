import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  // template: `<input [(ngModel)]="firstName" (keyup.enter)="log(x)"/>`,
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  // firstName = "sarita";
  // onKeyUp() {
  //console.log(this.firstName);
  //}
  log(x) { console.log(x); }

}
