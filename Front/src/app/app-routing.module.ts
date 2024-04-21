import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_pages/home/home.component';
import { MainInformationsComponent } from './_pages/main-informations/main-informations.component';
import { SocialMediaComponent } from './_pages/social-media/social-media.component';
import { EducationComponent } from './_pages/education/education.component';
import { ExperienceComponent } from './_pages/experience/experience.component';
import { HardSkillsComponent } from './_pages/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './_pages/soft-skills/soft-skills.component';
import { HobbiesComponent } from './_pages/hobbies/hobbies.component';
import { LanguagesComponent } from './_pages/languages/languages.component';

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "main-informations", component : MainInformationsComponent},
  {path : "social-media", component : SocialMediaComponent},
  {path : "education", component : EducationComponent},
  {path : "experience", component : ExperienceComponent},
  {path : "hard-skills", component : HardSkillsComponent},
  {path : "soft-skills", component : SoftSkillsComponent},
  {path : "hobbies", component : HobbiesComponent},
  {path : "languages", component : LanguagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
