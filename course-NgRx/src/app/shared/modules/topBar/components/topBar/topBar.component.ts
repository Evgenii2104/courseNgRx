import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {Store, select} from '@ngrx/store'

import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {
  isLoggedInSelector,
  isAnonymousSelector,
  currentUserSelector
} from 'src/app/auth/store/selectors'

@Component({
  selector: 'mc-topBar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss']
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean | null>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<CurrentUserInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    // @ts-ignore
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    // @ts-ignore
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    // @ts-ignore
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }
}
