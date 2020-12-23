import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, tap} from "rxjs/operators";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.sass']
})
export class MainHeaderComponent implements OnInit {
  pageTitle: string;

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.subscribeToRouteChangeEvents();
  }

  private subscribeToRouteChangeEvents() {
    // subscribe to route change events
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
      , tap(event => console.log('mainheader::pipe-filter::event', event)))
      .subscribe(() => {
        const rt = this.getChild(this.activatedRoute);
        console.log('mainheader::subscribe::getChild', rt);
        rt.data.subscribe(data => {
          console.log('mainheader::router event::', data)
          this.pageTitle = data.title;
          this.titleService = data.title;
        })
      });
  }

  private getChild(activatedRoute: ActivatedRoute) {
    console.log('mainheader::getChild::activatedRoute::', activatedRoute)
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild)
    } else {
      return activatedRoute;
    }
  }
}
