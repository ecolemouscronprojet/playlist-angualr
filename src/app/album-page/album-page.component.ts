import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent  implements OnInit, OnDestroy {

  constructor(
    private activatedroute: ActivatedRoute
  ) { }


  ngOnInit() {
    const id = this.activatedroute.snapshot.paramMap.get("id");
    console.log('DONE');
    console.log('id', id);
  }

  ngOnDestroy(): void {
    console.log('DESTROYEDDDD');
  }

}
