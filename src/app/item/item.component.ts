import { Component, OnInit } from '@angular/core';
import { Hobby } from '../Hobby';
import{Hobbies} from '../Mock-Hobby';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  ngOnInit(): void {}
  hobbies=Hobbies;

  constructor(){};

}
