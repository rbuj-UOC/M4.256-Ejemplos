import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from './components/images/images.component';
import { ImageComponent } from './components/image/image.component';

const routes: Routes = [
  { path: '', component: ImagesComponent },
  { path: 'image/:id', component: ImageComponent },
  { path: '**', component: ImagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
