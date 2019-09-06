import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ProjectConfig } from 'src/project-config';

@Component({
  selector: 'app-project-config',
  templateUrl: './project-config.component.html',
  styleUrls: ['./project-config.component.css']
})
export class ProjectConfigComponent implements OnInit {

  ProjectConfigForm:FormGroup;
  // projectconfig: ProjectConfig[];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
      this.ProjectConfigForm = this.fb.group({

    'configid': [],
    'projectid':[],
    'role':[],
    'location':[],
    'perhourbilling':[]

      }) ;
    }

    onProjectConfig()
    {
      console.log(this.ProjectConfigForm.value);
    }

  }