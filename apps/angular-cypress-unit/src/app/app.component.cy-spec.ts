/// <reference types="cypress" />
import { AppComponent } from './app.component';
import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'core-js/es';
import 'zone.js/dist/zone';
import { BrowserModule } from '@angular/platform-browser';
import { NgElement, WithProperties } from '@angular/elements';
import { async, TestBed } from '@angular/core/testing';
import 'zone.js/dist/async-test.js'
import 'zone.js/dist/proxy.js'
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
})
class MyTestModule {
    app: ApplicationRef;

    ngDoBootstrap(app: ApplicationRef) {
        console.log('ngDoBootstrap');
        this.app = app;
    }
}

describe('AppComponent', () => {
    // let document;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        // expect(app).toBeTruthy();
    });

    // beforeEach(() => {
    //                 const html = `
    //         <!doctype html>
    //         <html lang="en">
    //         <head>
    //           <meta charset="utf-8">
    //           <title>AngularCypressUnit</title>
    //           <base href="/">
    //           <meta name="viewport" content="width=device-width, initial-scale=1">
    //           <link rel="icon" type="image/x-icon" href="favicon.ico">
    //         </head>
    //         <body>
    //           <web-devops-workshop-root></web-devops-workshop-root>
    //         </body>
    //         </html>
    //             `;
    //
    //     document = (cy as any).state('document');
    //     document.write(html);
    //     document.close();
    //     cy.get('web-devops-workshop-root').then(el$ => {
    //         platformBrowserDynamic()
    //             .bootstrapModule(MyTestModule)
    //             .then(function (moduleRef) {
    //                 moduleRef.instance.app.bootstrap(AppComponent, el$.get(0));
    //             });
    //     });
    //
    // });

    it('works', () => {
        // cy.get('web-devops-workshop-root').then(el$ => {
        //     console.log('before platformBrowserDynamic');
        //
        //     platformBrowserDynamic().bootstrapModule(MyTestModule)
        //         .catch(err => console.error(err));
        //
        //     // platformBrowserDynamic()
        //     //   .bootstrapModule(MyTestModule)
        //     //   .then(function (moduleRef) {
        //     //     console.log('modulre ref', moduleRef)
        //     //     // moduleRef.instance.app.bootstrap(AppComponent, el$.get(0));
        //     //   });
        // });

    });
});


