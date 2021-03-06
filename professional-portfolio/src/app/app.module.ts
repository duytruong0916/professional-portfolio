import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.mudule';
import { OfferComponent } from './offer/offer.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { PictureComponent } from './picture/picture.component';
import { ArticleComponent } from './article/article.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppService } from './app.service';
import { StoringAppComponent } from './projects/storing-app/storing-app.component';
import { BudgetAppComponent } from './projects/budget-app/budget-app.component';
import { AngubettaComponent } from './projects/angubetta/angubetta.component';
import { TimefoxwatchComponent } from './projects/timefoxwatch/timefoxwatch.component';
import { PortfolioSiteComponent } from './projects/portfolio-site/portfolio-site.component';
import { AuthenticationComponent } from './projects/authentication/authentication.component';
import { AlephComponent } from './projects/aleph/aleph.component';
import { ScrumstubsComponent } from './projects/scrumstubs/scrumstubs.component';
import { EpicsTeamBuilderComponent } from './projects/epics-team-builder/epics-team-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    PortfolioComponent,
    OfferComponent,
    ContactComponent,
    ResumeComponent,
    PictureComponent,
    ArticleComponent,
    PagenotfoundComponent,
    StoringAppComponent,
    BudgetAppComponent,
    AngubettaComponent,
    TimefoxwatchComponent,
    PortfolioSiteComponent,
    AuthenticationComponent,
    AlephComponent,
    ScrumstubsComponent,
    EpicsTeamBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
