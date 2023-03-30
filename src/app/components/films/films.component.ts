import { Component, Input } from '@angular/core';
import { FilmsGalleryI } from '../../models/filmsGallery.interfaces';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent {
  @Input() filmsGallery!: FilmsGalleryI;
}
