import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalStorageServiceService } from './../../local-storage-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public totalAlbums: number = 0;
  private $_subscription?: Subscription; 

  constructor(
    private localStorageServiceService: LocalStorageServiceService
  ) { }


  ngOnInit() {
    this.$_subscription = this
      .localStorageServiceService
      .getTotalAlbums()
      .subscribe((total: number) => {
        console.log('TEST');
        this.totalAlbums =total;
      });
  }

  ngOnDestroy(): void {
    this.$_subscription?.unsubscribe();
  }
}
