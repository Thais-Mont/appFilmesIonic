import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilme } from '../models/IFilme.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  titulo = 'Filmes';

  listaFilmes: IFilme[] = [
    {
      nome: 'RRR (2022)',
      lancamento: '25/03/2022',
      duracao: '3h 2m',
      classificacao: 73,
      cartaz: 'https://www.themoviedb.org/t/p/w1280/u9QD9ddSVeYJABMSqBwfqe0NmsJ.jpg',
      generos: ['Ação', 'Drama', 'História'],
    },
    {
      nome: 'RRR (2022)',
      lancamento: '25/03/2022',
      duracao: '3h 2m',
      classificacao: 73,
      cartaz: 'https://www.themoviedb.org/t/p/w1280/u9QD9ddSVeYJABMSqBwfqe0NmsJ.jpg',
      generos: ['Ação', 'Drama', 'História'],
    },
    {
      nome: 'RRR (2022)',
      lancamento: '25/03/2022',
      duracao: '3h 2m',
      classificacao: 73,
      cartaz: 'https://www.themoviedb.org/t/p/w1280/u9QD9ddSVeYJABMSqBwfqe0NmsJ.jpg',
      generos: ['Ação', 'Drama', 'História'],
    }
  ];

  constructor(
    private alertController: AlertController,
    private toastController: ToastController
    ) {}
  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Favoritar',
      message: 'Deseja realmente favoritar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'SIM',
          role: 'confirm',
          handler: () => {
            this.apresentarToast();
          },
        },
      ],
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado com sucesso!',
      duration: 1500,
      color: 'success',
      position: 'bottom',
    });

    await toast.present();
  }

}
