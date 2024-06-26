import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBar } from './shared/components/topBar/topBar.component';
import { Store } from '@ngrx/store';
import { authActions } from './auth/store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, TopBar],
})
export class AppComponent implements OnInit {

  constructor(private store: Store){}
  ngOnInit(): void {
    this.store.dispatch(authActions.getCurrentUser())
  }
}
