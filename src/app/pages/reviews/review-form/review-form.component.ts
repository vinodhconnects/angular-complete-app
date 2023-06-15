import { Component } from '@angular/core';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {
  name:string=""
  email:string=""
  type:string=""
  message:string=""
  types:string[]=["Branding and Communication","Inbound &  Content Marketing",
  "Film &  Webinar","Digital Marketing","ECommerce & Websites","Market Analysis"]
}
