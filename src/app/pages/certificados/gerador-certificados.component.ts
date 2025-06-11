import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gerador-certificados',
  templateUrl: './gerador-certificados.component.html',
  styleUrls: ['./gerador-certificados.component.css']
})
export class GeradorCertificadosComponent {
  professores = ['Marcelo', 'Junior', 'Lucas', 'Kessia'];
  faixas = [
    'Branca Ponta Cinza', 'Cinza', 'Cinza Ponta Azul', 'Azul',
    'Azul Ponta Amarela', 'Amarela', 'Amarela Ponta Laranja',
    'Laranja', 'Verde', 'Roxa', 'Marrom', 'Preta'
  ];
  projetos = ['SER', 'AMADOM', 'SCTJ', 'SESV'];

  alunos: { nome: string; faixa: string }[] = [];
  novoAluno = { nome: '', faixa: '' };
  certificado = {
    professor: 'Marcelo',
    dataEvento: '',
    personalizado: false,
    projeto: ''
  };

  constructor(private http: HttpClient) {}

  adicionarAluno() {
    if (this.novoAluno.nome && this.novoAluno.faixa) {
      this.alunos.push({ ...this.novoAluno });
      this.novoAluno = { nome: '', faixa: '' };
    }
  }

  removerAluno(index: number) {
    this.alunos.splice(index, 1);
  }

  removerTodosAlunos() {
    this.alunos = [];
  }

  editarAluno(index: number) {
    const aluno = this.alunos[index];
    this.novoAluno = { ...aluno };
    this.alunos.splice(index, 1);
  }

  toggleProjetos() {
    if (!this.certificado.personalizado) {
      this.certificado.projeto = '';
    }
  }

  gerarCertificados() {
    if (!this.certificado.dataEvento) {
      alert('Por favor, selecione a data do evento.');
      return;
    }

    const dados = {
      ...this.certificado,
      alunos: this.alunos
    };

    this.http.post('http://localhost:3000/salvar_certificado.php', dados)
      .subscribe(
        response => alert('Certificados gerados com sucesso!'),
        error => alert('Erro ao gerar certificados.')
      );
  }
}
