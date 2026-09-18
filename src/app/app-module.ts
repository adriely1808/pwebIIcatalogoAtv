import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
<<<<<<< HEAD
import { Header } from './template/header/header';
import { Footer } from './template/footer/footer';
import { Home } from './components/home/home';
import { ListarProdutos } from './components/produtos/listar-produtos/listar-produtos';
import { CadastrarProduto } from './components/produtos/cadastrar-produto/cadastrar-produto';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Home,
    ListarProdutos,
    CadastrarProduto
=======

@NgModule({
  declarations: [
    App
>>>>>>> 88dab3b5427f39059c11a4e3edcbe62f158cd1d4
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
<<<<<<< HEAD
    provideBrowserGlobalErrorListeners()
=======
    provideBrowserGlobalErrorListeners(),
>>>>>>> 88dab3b5427f39059c11a4e3edcbe62f158cd1d4
  ],
  bootstrap: [App]
})
export class AppModule { }
