import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
nomeProduto:string= " curso  de  Angular";
//anuncio:string="O"+this.nomeProduto+ "está  em  promoção";
anuncio:string=`O ${this.nomeProduto}está em promoção`
idProduto:number =124;
precoProduto: number =2.59;
promocao: boolean =true;

testeVariaveis(): void {
  console.log("Nome do Produto : " , this.nomeProduto);
  console.log("Anuncio:",this.anuncio);
  console.log("ID:", this.idProduto);
  console.log("Preço: ", this.precoProduto);
  console.log("Promoção" , this.promocao);

  //escope de variaveis dentro do codigo

  var variaveel1;
  let variavel2;
  const contante3=3;
  
  var idade = 10;

  function imprimeIdade(){
    var idade = 50;
    console.log("minha idade é:",idade);
  }
  imprimeIdade();

  var idade = 10;

  function imprimeIdade2(){
  for (let idade=30; idade <=40; idade++)
    console.log("minha idade é:",idade);
    console.log("idade fora do for:", idade);
  }
  imprimeIdade2(); 
  
  var variavel = 0;
  var variavel = 10;
  console.log(`variavel`,variavel);
  function funcao() {
    var outra_variavel =20;
    var outra_variavel =30;
    console.log(`outra variavel:`, outra_variavel);
  }
  funcao();
  
  var a= 10;
  var b= 20;
  function bar(){
    var a=30;
    let b = 40;
    if(true){
      var a= 50;
      let b= 60;
      console.log(`variável a dentro do if`, a);
      console.log(`variavel b dentro do if`, b); 
    }
    console.log(`variável a dentro da função`, a);
    console.log(`variável b dentro da função`, b);
  }
  bar();
  console.log (`variavel a fora da função`, a);
  console.log (`variável b fora da função`, b);
 }
}

let a=1;
function bar(){
  console.log(`variavel a: `, a);
  let b= 2;
  if(true){
    let c=3;
    let a=4;
    console.log (`variavel a dentro do if: `, a)
    console.log(`variavel b dentro do if:`, b)
    console.log(`variavel c dentro do if:`,c)
  }
}console.log (`variavel a fora do if:`, a);
console.log  (`variavel b fora do if:`, b);
//console.log(c);
bar();
