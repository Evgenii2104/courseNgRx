import {Component, Input, OnInit} from '@angular/core'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.components.scss']
})
export class BackendErrorMessagesComponent implements OnInit {
  // @ts-ignore
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface | null

  // @ts-ignore
  errorMessages: string[]

  ngOnInit(): void {
    // @ts-ignore
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        // @ts-ignore
        const messages = this.backendErrorsProps[name].join(' ')
        return `${name} ${messages}`
      }
    )
  }
}
