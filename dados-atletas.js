class Atleta {
    constructor(nome,idade,peso,altura,notas){
        this.nome = nome;
        this.idade  = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calcularCategoria(){
        if(this.idade >= 9 && this.idade < 12){
            return "infantil";
        }else if(this.idade > 11 && this.idade < 14){
            return "Juvenil";
        }else if(this.idade > 13 && this.idade < 16){
            return "Intemediário";
        }else if(this.idade > 15 && this.idade <= 30){
            return "Adulto";
        }else{
            return "Sem categoria";
        }

    }

    calcularIMC(){
        return this.peso / (this.altura * this.altura);
    }

    calculaMediaValida(){
        let notasGerais = this.notas;
        let notasOrganizadas = notasGerais.sort(function comparaNumeros(a, b) {
            if (a == b){
                return 0;
            } else if (a < b){
                return -1;
            }else if (a > b){
                return 1;
            }
        });


        let notasComputadas = notasOrganizadas.slice(1, 4)

        let somaNotasComputadas = notasComputadas.reduce(function (total, atual) {
            return total + atual
        }, 0)

        let media = (somaNotasComputadas / notasComputadas.length);

        return media;
    }
    

    obtemNomeAtleta(){
        return this.nome;
    }

    obtemIdadeAtleta(){
        return this.idade;
    }

    obtemPesoAtleta(){
        return this.peso;
    }

    obtemNotasAtleta(){
        return this.notas;
    }

    obtemCategoria(){
        return this.calcularCategoria();
    }

    obtemIMC(){
        return this.calcularIMC();
    }

    obtemMediaValida(){
        return this.calculaMediaValida();
    }
}


const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);


console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.obtemCategoria());
console.log("IMC: " + atleta.obtemIMC());
console.log("Média válida: " + atleta.obtemMediaValida());   
