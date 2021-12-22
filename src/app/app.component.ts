import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-tests';
  labelFirst = "Vers la page place";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  functionCall(event: MouseEvent | undefined, path: string = '') {
    this.router.navigateByUrl(path);
    console.log('functionCall', event);
  }
}
