import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string;
  password: string;
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log("username " + this.username+" password "+this.password);
    this.username = "";
    this.password = "";
    this.router.navigate(['/home']);
  }
}
