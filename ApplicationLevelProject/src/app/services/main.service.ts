import { Injectable } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { ProductService } from './product.service';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient ,private Calculator:CalculatorService,private Product:ProductService) { }

  CalciOperation(a:any,b:any,op:any,opGroup:any):any{

    return this.Calculator.evaluate(a,b,op,opGroup);

  }
}
