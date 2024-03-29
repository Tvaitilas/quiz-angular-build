import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';

/* Angular Fire Modulio importavimas */
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizCreateComponent } from './components/quiz-create/quiz-create.component';
import { FormsModule } from '@angular/forms';
import { QuizEditComponent } from './components/quiz-edit/quiz-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    QuizCreateComponent,
    QuizEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProgressbarModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
