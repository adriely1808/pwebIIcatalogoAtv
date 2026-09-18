import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { Home } from './components/home/home';
import { ListarProdutos } from './components/produtos/listar-produtos/listar-produtos';
import { CadastrarProduto } from './components/produtos/cadastrar-produto/cadastrar-produto';

const routes: Routes = [
  {path: '', component:Home},
  {path: 'produtos', component:ListarProdutos},
  {path: 'produtos/cadastrar', component:CadastrarProduto}
];
=======

const routes: Routes = [];
>>>>>>> 88dab3b5427f39059c11a4e3edcbe62f158cd1d4

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
