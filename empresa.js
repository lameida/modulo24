
class Empresa {
  constructor(nome) {
    this.nome = nome;
  }
}


class Departamento extends Empresa {
  constructor(nome, responsavel) {
    super(nome);
    this.responsavel = responsavel;
  }

  exibirInfo() {
    return `Departamento: ${this.nome}, Responsável: ${this.responsavel}`;
  }
}


class Funcionario extends Empresa {
  constructor(nome, cargo) {
    super(nome);
    this.cargo = cargo;
  }

  exibirInfo() {
    return `Funcionário: ${this.nome}, Cargo: ${this.cargo}`;
  }
}


const departamento1 = new Departamento("Vendas", "João");
const departamento2 = new Departamento("RH", "Maria");
const funcionario1 = new Funcionario("Pedro", "Gerente de Projetos");
const funcionario2 = new Funcionario("Ana", "Desenvolvedora");


const entidades = [departamento1, departamento2, funcionario1, funcionario2];
entidades.forEach(entidade => {
  console.log(entidade.exibirInfo());
});
