import { CryptoService } from './../service/crypto.service';
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
  public cryptos?: object[];
  // private subscription: Subscription;

  constructor(
    private albumService: AlbumService,
    private cryptoService: CryptoService
    ) {
  }

  async ngOnInit() {
      this.albums = this.albumService.getAll();
      // this.subscription = this.cryptoService.getAll().subscribe( cryptos =>{
      //   console.log('HELLLOOOO', cryptos);
      // });
      this.cryptos = await firstValueFrom(this.cryptoService.getAll());
      console.log(this.cryptos);
  }

  createAnAlbum(): void {
    this.albumService.save({ id: null, name: `album n°${Math.random()}` });
  }

  removeAlbum(id: string): void {
    this.albumService.delete(id);
  }

  clearAll(): void {
    // this._localStorageService.clear();
  }


  private _updateLocalStorage(): void {
    // this._localStorageService.setItem('albums', this.albums);
    // this.albums ? this._localStorageService.setTotalAlbums(this.albums.length) : null;
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
