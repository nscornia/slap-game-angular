import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { NgSelectModule } from '@ng-select/ng-select'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MainViewComponent } from './main-view/main-view.component'
import { HeroComponent } from './models/hero/hero.component'
import { OtherComponent } from './other/other.component'
import { HeroService } from './services/hero.service'
import { VillainComponent } from './villain/villain.component'

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    OtherComponent,
    HeroComponent,
    VillainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgSelectModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {}
