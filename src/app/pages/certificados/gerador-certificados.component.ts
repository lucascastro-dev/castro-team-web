import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CertificadosService } from './CertificadosService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-gerador-certificados',
  templateUrl: './gerador-certificados.component.html',
  styleUrls: ['./gerador-certificados.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class GeradorCertificadosComponent {
  professores: string[] = [];
  faixas: string[] = [];
  projetos: string[] = [];

  alunos: { nome: string; faixa: string }[] = [];
  novoAluno = { nome: '', faixa: '' };
  certificado = {
    professor: '',
    dataEvento: '',
    personalizado: false,
    projeto: ''
  };

  constructor(private http: HttpClient, private certificadosService: CertificadosService) { }

  ngOnInit(): void {
    this.professores = this.certificadosService.getProfessores();
    this.faixas = this.certificadosService.getFaixas();
    this.projetos = this.certificadosService.getProjetos();
  }

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

    this.http.post('./salvar_certificado.php', dados, { responseType: 'text' })
      .subscribe(
        (msg: string) => {
          alert(msg);
          this.limparFormulario();
        },
        (error) => {
          console.error(error);
          alert('Erro ao salvar certificado.');
        }
      );
  }

  limparFormulario() {
    this.certificado.dataEvento = '';
    this.professores = [];
    this.alunos = [];
  }
}
