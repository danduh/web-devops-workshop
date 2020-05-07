/// <reference types="cypress" />
// This file is required by karma.conf.js and loads recursively all the .spec and framework files
// import 'core-js/es7/reflect';
import 'zone.js/dist/zone';  // Included with Angular CLI.
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /spec\.ts$/);
// And load the modules.
context.keys().map(context);

import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

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


