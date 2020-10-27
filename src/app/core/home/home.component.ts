import { Component, OnInit } from '@angular/core';
import { ApiRandomusersService } from 'src/app/shared/services/api-randomusers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any;
  num:number = 50;
  time:number[] = [];


  constructor(private randomUsers: ApiRandomusersService) { }

  ngOnInit(): void {

    for (let i = 0; i < this.num; i++) {
      let nu = Math.round((Math.random()*100));
      this.time.push(nu);
    }
    this.randomUsers.callApi(`${this.num}`).subscribe((data: any) => {
      this.users = data.results;
      console.log(this.users);
      
    }, (error:any) => { console.log(error); });
    
    
  }

}
