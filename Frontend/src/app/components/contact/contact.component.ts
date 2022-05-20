import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

import { ContactUser } from 'src/app/models/contact.user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  public title: string
  public contactUser: ContactUser

  constructor() {
    this.title = 'Contacto'
    this.contactUser = new ContactUser('','','','')
   }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(this.contactUser)
  }

}
