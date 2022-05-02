import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name = '';
  message = '';

  testimonials = [
    {
      name: 'harsha',
      message: 'good and decent rooms',
    },
    {
      name: 'kavya',
      message: 'I will give 5star rating for their service',
    },
  ];

  addTestimonial(name, message) {
    this.testimonials.unshift({ name: name, message: message });
  }
}
