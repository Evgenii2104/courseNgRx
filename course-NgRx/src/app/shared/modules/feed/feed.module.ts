import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EffectsModule} from '@ngrx/effects'

import {FeedComponent} from 'src/app/shared/modules/feed/components/feed/feed.component'
import {FeedService} from 'src/app/shared/modules/feed/services/feed.service'
import {GetFeedEffect} from 'src/app/shared/modules/feed/store/effects/getFeed.effect'
import {StoreModule} from '@ngrx/store'
import {reducers} from 'src/app/shared/modules/feed/store/reducers'
import {RouterModule} from "@angular/router";
import {ErrorMessageModule} from "../errorMessage/errorMessage.module";
import {LoadingModule} from "../loading/loading.module";
import {PaginationModule} from "../pagination/pagination.module";

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule {}
