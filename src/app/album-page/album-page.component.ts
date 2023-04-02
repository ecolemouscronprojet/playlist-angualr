import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageServiceService } from '../local-storage-service.service';
import { Album } from '../playlist-page/playlist-page.component';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit, OnDestroy {
  public albums?: Album[];
  private _albums: { id: number, name: string }[] = [
    { id: 1, name: 'nevermind' },
    { id: 2, name: 'nevermind 2' },
    { id: 3, name: 'nevermind 3' }
  ];

  public album?: { id: number, name: string };


  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private _localStorageService: LocalStorageServiceService
  ) { }


  ngOnInit() {
    this.albums = this._localStorageService.hasKey('albums') ? this._localStorageService.getItem('albums') : [];
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
