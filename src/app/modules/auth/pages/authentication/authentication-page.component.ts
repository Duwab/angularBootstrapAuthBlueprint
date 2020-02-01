import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.scss']
})
export class AuthenticationPageComponent {
  constructor(private modalService: NgbModal) {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }
}
