import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent  implements OnInit, OnDestroy {
  private _album: object[] = [
    {id: 1, name: 'nevermind'},
    {id: 2, name: 'nevermind 2'},
    {id: 3, name: 'nevermind 3'}
  ];

  public album?: object;


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
