import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as fr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {registerLocaleData} from "@angular/common";
import { HomeComponent } from './pages/home/home.component';
import { MainInformationsComponent } from './pages/main-informations/main-informations.component';
import { SocialMediaComponent } from './pages/social-media/social-media.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HardSkillsComponent } from './pages/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './pages/soft-skills/soft-skills.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { LanguagesComponent } from './pages/languages/languages.component';
import { SectionComponent } from './components/section/section.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RadioComponent } from './components/radio/radio.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainInformationsComponent,
    SocialMediaComponent,
    EducationComponent,
    ExperienceComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    HobbiesComponent,
    LanguagesComponent,
    SectionComponent,
    HeaderComponent,
    FooterComponent,
    RadioComponent,
    TextAreaComponent,
    InputComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide :LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
