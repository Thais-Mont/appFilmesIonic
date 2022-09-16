import { Component, OnInit } from '@angular/core';
import { DadosService } from './../../services/dados.service';
import { IFilme } from './../../models/IFilme.model';

@Component({
  selector: 'app-rrr',
  templateUrl: './filme.page.html',
  styleUrls: ['./filme.page.scss'],
})
export class FilmePage implements OnInit {

  filme: IFilme;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.pegarDados('filme');
    console.log('Filme Enviado', this.filme);
  }

}
