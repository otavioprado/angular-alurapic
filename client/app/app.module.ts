import { routing } from './app.routes';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PainelModule } from './painel/painel.module';
import { FotoModule } from './foto/foto.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import 'rxjs/add/operator/map';

@NgModule({
    imports: [ 
        BrowserModule, 
        FotoModule, 
        HttpModule, 
        PainelModule,
        routing,
        FormsModule
    ],
    declarations: [ 
        AppComponent, 
        CadastroComponent, 
        ListagemComponent 
    ],
    bootstrap: [ 
        AppComponent 
    ]
})
export class AppModule {

}