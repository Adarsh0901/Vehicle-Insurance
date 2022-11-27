import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  personName = '';
  personEmail = '';
  personMessage = '';

  onResetHandler(data:NgForm){
    this.personName = ''
    this.personEmail = ''
    this.personMessage = ''
  }

  onSubmitHandler(data:NgForm){
    alert(`We received your message will contact as soon as possible`);
  }

}
