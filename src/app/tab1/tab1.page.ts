import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilme } from '../models/IFilme.model';
import { DadosService } from './../services/dados.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  titulo = 'Filmes';

  listaFilmes: IFilme[] = [
    {
      nome: 'A Queda (2022)',
      lancamento: '29/09/2022 (BR)',
      duracao: '1h 47m',
      classificacao: 74,
      cartaz: 'https://www.themoviedb.org/t/p/w1280/sjnijtgU3Khzou1S9412V30pP7L.jpg',
      generos: ['Thriller'],
      // eslint-disable-next-line max-len
      descricao: 'Becky e Hunter são duas amigas que buscam aventura e enfrentam grande alturas em suas escaladas. Depois de um grande drama vivido por elas, as duas decidem escalar uma remota torre de rádio abandonada com mais de 2000 pés de altura. Parecia a aventura perfeita para desligar a mente do trágico acontecimento que vivenciaram com o namorado de uma delas. Elas não contavam que ficariam presas e isoladas naquele lugar sem sinal de celular, sem energia e sem pessoas por perto.',
      classificacaoIndicativa: 12,
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
    private toastController: ToastController,
    public dadosService: DadosService,
    public route: Router,
    ) {}

  exibirFilme(filme: IFilme) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/filme');
  }



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
