import { AngularFireAuth } from 'angularfire2/auth';
import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

import { LoginComponent } from './shared/components/login/login.component';

class mockAngularFireAuth {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent
      ],
      providers: [
        {provide: AngularFireAuth, useClass: mockAngularFireAuth}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
});
