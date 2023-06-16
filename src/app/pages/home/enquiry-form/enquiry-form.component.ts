import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent {
  ftoggle:boolean=false
  eform:any
  constructor(private fb:FormBuilder,private hs:HomeService){
  this.eform= this.fb.group(
    {
      name:['',[Validators.required,Validators.minLength(3)]],
      description:['',[Validators.required,Validators.minLength(20)]],
      email:['',Validators.email],
      subject:['',[Validators.required,Validators.minLength(5)]],
      supportfile: [null,[]]
    }
  )
 
  }
  postEnquiry():void {

  }


}
