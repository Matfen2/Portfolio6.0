import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, state, style, transition ,animate} from '@angular/animations'
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrl: './present.component.css',
  animations: [
    trigger('positionPresent', [
      state(
        'center',
        style({
        })
      ),
      state(
        'noCenter',
        style({
          paddingTop: "230px"
        })
      ),
      transition('open => close', [animate('0.2s')]),
      transition('close => open', [animate('0.4s')]),
    ]),
    trigger('openAnimate', [
      state(
        'open',
        style({
          margin: "30px auto",
          width: "100%",
          maxWidth: "1200px",
          borderRadius: "40px",
          backgroundColor: "black",
          border: "2px solid azure"
        })
      ),
      state(
        'close',
        style({
          visibility: 'hidden'
        })
      ),
      transition('open => close', [animate('0.2s')]),
      transition('close => open', [animate('0.4s')]),
    ]),
    trigger('pseudoMove', [
      state(
        'move',
        style({

        })
      ),
      state(
        'stop',
        style({
          width: '70px'
        })
      ),
      transition('move => stop', [animate('0.2s')]),
      transition('stop => move', [animate('0.4s')]),
    ]),
  ],
})
export class PresentComponent implements OnInit {
  constructor(private authService: AuthService) { }

  // PRESENT
  show: boolean = false;

  showAnimate() {
    this.show = !this.show;
  }

  // MES PROJETS
  projets = [
    {
      id: 1,
      pict: '/assets/pict/projets/tlouLogo.png',
    },
    {
      id: 2,
      pict: '/assets/pict/projets/soulsHeroesLogo.png',
    },
    {
      id: 3,
      pict: '/assets/pict/projets/massEffectLogo.png',
    },
  ];

  // CONTACT
  successmsg: any = 'Message envoyé avec succès';
  errormsg: any = "Echec de l'envoie du message";

  answer = new FormGroup({
    adress: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  contact() {
    this.authService.sendMessage(this.answer.value).subscribe(
      (res) => {
        alert(this.successmsg);
      },
      (error) => {
        this.successmsg = false;
        this.errormsg = true;
        alert(this.errormsg);
      }
    );
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '/assets/pict/CV Mathieu FENOUIL.jpg';
    link.download = 'CV_Mathieu_FENOUIL.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  ngOnInit(): void {}
}
