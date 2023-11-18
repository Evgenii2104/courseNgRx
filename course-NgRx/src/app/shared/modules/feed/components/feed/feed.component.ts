import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {select, Store} from "@ngrx/store";
import {getFeedAction} from "../../store/actions/getFeed.action";
import {Observable, Subscription} from "rxjs";
import {GetFeedResponseInterface} from "../../types/getFeedResponse.interface";
import {errorSelector, feedSelector, isLoadingSelector} from "../../store/selectors";
import {environment} from "../../../../../../environments/environment";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy{
  @Input('apiUrl') apiUrlProps: string

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<GetFeedResponseInterface | null>
  limit = environment.limit
  baseUrl: string
  queryParamsSubscription: Subscription
  currentPage: number

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initializeValues()
    this.fetchData()
    this.initializeListeners()
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        // @ts-ignore
        this.currentPage = Number(params.page || '1')
      }
    )
  }

  fetchData() {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}))
  }
  initializeValues() {
    // @ts-ignore
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    // @ts-ignore
    this.error$ = this.store.pipe(select(errorSelector))
    // @ts-ignore
    this.feed$ = this.store.pipe(select(feedSelector))
    this.baseUrl = this.router.url.split('?')[0]
  }
}
