import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as fr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {registerLocaleData} from "@angular/common";
import { HomeComponent } from './_pages/home/home.component';
import { MainInformationsComponent } from './_pages/main-informations/main-informations.component';
import { SocialMediaComponent } from './_pages/social-media/social-media.component';
import { EducationComponent } from './_pages/education/education.component';
import { ExperienceComponent } from './_pages/experience/experience.component';
import { HardSkillsComponent } from './_pages/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './_pages/soft-skills/soft-skills.component';
import { HobbiesComponent } from './_pages/hobbies/hobbies.component';
import { LanguagesComponent } from './_pages/languages/languages.component';
import { SectionComponent } from './_components/section/section.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { RadioComponent } from './_components/radio/radio.component';
import { TextAreaComponent } from './_components/text-area/text-area.component';
import { InputComponent } from './_components/input/input.component';
import { ButtonComponent } from './_components/button/button.component';

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
