import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {LoginService} from '../login.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
// import {ReactiveFormsModule} from '@angular/forms';
import { Developer } from 'src/Developer';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  result: Developer;

  // indeterminate = false;
  // labelPosition = 'after';
  // disabled = false;

  
  title = 'Spring Mvc Angular Tutorial';
  
  id : number;
  password : string;
  developer : Developer;
  role : string;
    
  constructor(private service : LoginService,private formBuilder: FormBuilder)
    {

    }

    LoginForm: FormGroup;
    ngOnInit() {
      this.LoginForm = this.formBuilder.group({
        'id' : [''],
        'password' :[]
        
      });
    }
    onLogin()
    {
      console.log('I  m here ');
      console.log(this.LoginForm.value);
    let i=this.LoginForm.value;

  
      
      this.service.onLogin(i.id,i.password).subscribe((res)=> {
        console.log('Here');
        console.log(res);
        this.result= res

        if(this.result.name.length>0)
        
        {
          alert(this.result.applicationRole);
          alert("Yu are a valid User");
          this.role = this.result.applicationRole;
          
        }
        else
        {
          alert("You are not a valid User")
        }
        
        
        
        }
    );
    // console.log(value.F_Name);
    // alert(value);
  }

        
      
        
        

      
        

}
