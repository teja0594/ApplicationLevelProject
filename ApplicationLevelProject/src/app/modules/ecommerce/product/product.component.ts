import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  funnel:any="a-z"
  filter:any="all"
products:any=[];
isLoggedIn:any
  constructor(private service:ProductService,private authenication:AuthService,private router:Router) {
    this.authenication.log.subscribe(data=> this.isLoggedIn=data)
    }
  ngOnInit(): void {
    if(!this.isLoggedIn)
       this.router.navigate([''])

    this.getProducts();
  }
  getProducts():any{
    this. service.getAllProducts().subscribe(
      data => {this.products = data
      console.log(data)},
      error => console.log(error));
  }

}
