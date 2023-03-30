import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'netflix-app';

  comedyFilms = {
    section: 'Comedia',

    films: [
      {
        title: 'Tiket of Paradise',

        image:
          'https://res.cloudinary.com/dimadmepo/image/upload/v1680118577/ticket_to_paradise-626528836-mmed_mx0z9u.jpg',
      },

      {
        title: 'Minions',

        image:
          'https://res.cloudinary.com/dimadmepo/image/upload/v1680119132/images_qc79x2.jpg',
      },
      {
        title: 'Encanto',

        image:
          'https://res.cloudinary.com/dimadmepo/image/upload/v1680124626/Encanto-246546841-large_wgrfdp.jpg',
      },
      {
        title: 'Forrest Gump',

        image:
          'https://res.cloudinary.com/dimadmepo/image/upload/v1680191661/forrest_gump-212765827-mmed_t5q9eu.jpg',
      },
      {
        title: 'TORRENTE',

        image:
          'https://res.cloudinary.com/dimadmepo/image/upload/v1680191477/torrente_el_brazo_tonto_de_la_ley-769153589-mmed_mt5oeh.jpg',
      },
      {
        title: 'Scary Movie ',

        image:
          'https://res.cloudinary.com/dimadmepo/image/upload/v1680191389/scary_movie-943532513-mmed_d2swrw.jpg',
      },
    ],
  };
  terrorFilms = {
    section: 'Terror',

    films: [
      {
        title: 'El Exorcista',

        image:
          'https://res.cloudinary.com/dimadmepo/image/upload/v1680189859/001_m_aake33.webp',
      },

      {
        title: 'Halloween',

        image:
          'https://res.cloudinary.com/dimadmepo/image/upload/v1680190440/la-noche-de-halloween-2018_s13way.jpg',
      },

      {
        title: 'Psicosis',

        image:
          'https://res.cloudinary.com/dimadmepo/image/upload/v1680190306/psicosis-ha-vuelto-a-las-salas-de-cine-con-13-segundos-restaurados-cortados-por-la-censura_opt2__pfvnji.jpg',
      },

      {
        title: 'MEGAN',

        image:
          'https://res.cloudinary.com/dimadmepo/image/upload/v1680118676/M3GAN-530322652-large_djnyta.jpg',
      },

      {
        title: 'La Monja',

        image:
          'https://res.cloudinary.com/dimadmepo/image/upload/v1680124679/the_nun-167259563-mmed_tdt3tb.jpg',
      },

      {
        title: 'IT',

        image:
          'https://res.cloudinary.com/dimadmepo/image/upload/v1680118966/19961693_hhu0l2.webp',
      },
    ],
  };
}
