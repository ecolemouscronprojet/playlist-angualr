import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  public id?: string | null;

  constructor(
    private activatedroute: ActivatedRoute,
  ) { }


  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get("id");
  }
}
