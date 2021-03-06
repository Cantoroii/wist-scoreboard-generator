import { MaterialModule } from './Modules/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScoreBoardComponent } from './Pages/score-board/score-board.component';
import { GameSettingsPageComponent } from './Pages/game-settings-page/game-settings-page.component';
import { environment } from 'src/environments/environment';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { GameSettingsQuery, GameSettingsStore } from './store';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ScoreBoardComponent,
    GameSettingsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    environment.production ? [] : AkitaNgDevtools.forRoot({}),
  ],
  providers: [GameSettingsQuery, GameSettingsStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
