import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ProjetDetail {
  id: number;
  name: string;
  mainPict: string;
  langageOne: string;
  langageTwo: string;
  langageThree: string;
  hrefGithub: string;
  hrefSite: string;
  help: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projetId!: number;
  projetData: ProjetDetail | undefined;

  projetDetails: ProjetDetail[] = [
    {
      id: 1,
      name: "SPIRIT'S GAMER",
      mainPict: '/assets/pict/projets/SpiritsGamerSite.png',
      langageOne: 'ANGULAR',
      langageTwo: 'TYPESCRIPT',
      langageThree: 'MYSQL/PHPMYADMIN',
      hrefGithub: 'https://spirits-gamer.vercel.app/main',
      hrefSite: 'https://spirits-gamer.vercel.app/main',
      help: "Entrer Dishonored dans search pour montrer mes capacités de connexion à distance avec le database crée sur Hostinger",
    },
    {
      id: 2,
      name: "SOUL'S HEROES",
      mainPict: '/assets/pict/projets/soulsHeroesSite.png',
      langageOne: 'ANGULAR',
      langageTwo: 'TYPESCRIPT',
      langageThree: 'API/CRUD OPERATIONS',
      hrefGithub: 'https://github.com/Matfen2/Soul-s-Heroes',
      hrefSite: 'https://souls-heroes-2.vercel.app/main',
      help: "Entrer Batman dans search pour montrer mes capacités de connexion à distance avec le database crée sur Hostinger",
    },
    {
      id: 3,
      name: 'THE LAST OF US',
      mainPict: '/assets/pict/projets/tlouSite.png',
      langageOne: 'ANGULAR',
      langageTwo: 'TYPESCRIPT',
      langageThree: 'SCSS',
      hrefGithub: 'https://github.com/Matfen2/The-Last-Of-Us',
      hrefSite: 'https://the-last-of-us-orcin.vercel.app/main',
      help: ""
    },
  ];

  constructor(private routes: ActivatedRoute) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.projetId = +params['id'];
      try {
        this.projetData = this.projetDetails.find(
          (projet) => projet.id === this.projetId
        );
      } catch (error) {
        console.error(
          'Erreur lors de la récupération des données du projet :',
          error
        );
      }
    });
  }
}
