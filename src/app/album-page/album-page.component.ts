import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album, AlbumService } from './../services/album.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit, OnDestroy {
  public albums?: Album[];
  public album: Album | undefined;



  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private readonly albumService: AlbumService
  ) { }


  ngOnInit() {
    this.albums = this.albumService.getAll();
    const id = this.activatedroute.snapshot.paramMap.get("id");

    if (id != null) {
      this.album = this.albums.find((a: any) => a.id == id);
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
