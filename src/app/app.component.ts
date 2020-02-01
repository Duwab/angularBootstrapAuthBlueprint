import { AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, NavigationError, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ready = false;
  navigationError = false;
  snackBarDurationInSeconds = 3.5;

  constructor(private router: Router, private snackBar: MatSnackBar) {
  }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(e => this.ready = true);
    this.router.events
      .pipe(filter(e => e instanceof NavigationError))
      .subscribe(e => {
        console.log("navigation error", e);
        this.navigationError = true;
        if (this.ready) {
          this.openSnackBar();
        }
      });
  }

  openSnackBar() {
    this.snackBar.open('Navigation error', 'close', {
      duration: this.snackBarDurationInSeconds * 1000,
    });
  }
}
