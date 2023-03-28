import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit, OnDestroy {
  private _albums: { id: number, name: string }[] = [
    { id: 1, name: 'nevermind' },
    { id: 2, name: 'nevermind 2' },
    { id: 3, name: 'nevermind 3' }
  ];

  public album?: { id: number, name: string };


  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {
    const id = this.activatedroute.snapshot.paramMap.get("id");

    if (id != null) {
      this.album = this._albums.find((a: any) => a.id == id);
      if(!this.album){
        alert('L\'album n\'existe pas !');
        this.router.navigate(['/playlist'])
      }
    }
  }

  ngOnDestroy(): void {
    console.log('DESTROYEDDDD');
  }

}
