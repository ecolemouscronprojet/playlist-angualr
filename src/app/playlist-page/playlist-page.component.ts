import { CryptoService } from './../services/crypto.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Album, AlbumService } from '../services/album.service';
import { Subscription, firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.css']
})
export class PlaylistPageComponent implements OnInit, OnDestroy {
  public albums?: Album[];
  public cryptos?: any[] = [];
  // private subscription: Subscription;

  constructor(
    private albumService: AlbumService,
    private cryptoService: CryptoService
    ) {}

  async ngOnInit() {
    this.albums = this.albumService.getAll();
    this.cryptos = await firstValueFrom(this.cryptoService.getAll())
    
    // this.subscription = this.cryptoService.getAll().subscribe((data) => {
    //   data.length = 5;
    //   this.cryptos = data;
    // });
  }

  createAnAlbum(): void {
    this.albumService.save({
      id: null,
      name: `album n°${Math.random()}`
    });
  }

  removeAlbum(id: string): void {
    this.albumService.delete(id);
  }


  ngOnDestroy(){
    // this.subscription.unsubscribe();
  }
}
