import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CertificadosService {
  professores = ['Marcelo', 'Junior', 'Lucas', 'Kessia'];
  faixas = [
    'Branca Ponta Cinza', 'Cinza', 'Cinza Ponta Azul', 'Azul',
    'Azul Ponta Amarela', 'Amarela', 'Amarela Ponta Laranja',
    'Laranja', 'Verde', 'Roxa', 'Marrom', 'Preta',
  ];
  projetos = ['SER', 'AMADOM', 'SCTJ', 'SESV'];

  getProfessores() {
    return this.professores;
  }

  getFaixas() {
    return this.faixas;
  }

  getProjetos() {
    return this.projetos;
  }
}
