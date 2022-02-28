import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-lista-v',
  templateUrl: './lista-v.component.html',
  styleUrls: ['./lista-v.component.css']
})
export class ListaVComponent implements OnInit {

  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas(){
    this._vagasService.getVagas()
      .subscribe(
        retornaVaga =>{
          this.vagas = retornaVaga.map(
            item=>{
              return new Vaga(
                item.id,
                item.nome,
                item.foto,
                item.descricao,
                item.salario
              );
            }
          )
        }
      )
  }

}
