import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from '../http-services.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit  {
  
  data: any;
  dataList: any;
  hits:any=[];
  model: any;
  constructor(private httpService:HttpServicesService){

  }
  ngOnInit(){
    this.httpService.getMethod().subscribe(Response=>{
   this.data=Response;
  this.dataList=this.data.hits;
  console.log(this.data)

   })
  }

  edit(id){
    console.log(id)
   this.model=id;
  }
}