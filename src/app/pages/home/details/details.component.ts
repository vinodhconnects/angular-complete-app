import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { details } from 'src/app/models/models';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
    id:number=-1
    image:string=""
    detail:details= {id:-1,title:"",description:[]}

    constructor(private route:ActivatedRoute,private hs:HomeService){
       this.route.params.subscribe((params)=>{
          console.log("parameter is ",params["id"])
       })
    }
}
