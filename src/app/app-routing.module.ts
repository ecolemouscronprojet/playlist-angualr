import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistPageComponent } from './playlist-page/playlist-page.component';
import { AlbumPageComponent } from './album-page/album-page.component';
import { ClasseComponent } from './classe/classe.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserConnectedGuard } from './user-connected.guard';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'registration', component: RegistrationComponent},

    { path: 'playlist', component: PlaylistPageComponent, canActivate: [UserConnectedGuard] },
    { path: 'album', component: AlbumPageComponent , canActivate: [UserConnectedGuard]},
    { path: 'album/:id', component: AlbumPageComponent , canActivate: [UserConnectedGuard]},
    { path: 'album/:id/edit', component: AlbumPageComponent, canActivate: [UserConnectedGuard] },
    { path: 'album/:id/show', component: AlbumPageComponent , canActivate: [UserConnectedGuard]},
    { path: 'classe/:id', component: ClasseComponent , canActivate: [UserConnectedGuard]},
];

@NgModule({
    // TODO A CHECK
    declarations:[
        PlaylistPageComponent,
        AlbumPageComponent,
        LoginComponent,
        RegistrationComponent,
        HeaderComponent
    ],
    imports: [
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        CommonModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }