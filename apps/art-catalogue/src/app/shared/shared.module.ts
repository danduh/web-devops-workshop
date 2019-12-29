import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MATERIAL = [
    MatInputModule,
    MatButtonModule
];

const SHARED_MODULES = [
    FormsModule,
    ReactiveFormsModule
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MATERIAL,
        SHARED_MODULES
    ],
    exports: [
        MATERIAL,
        SHARED_MODULES
    ]
})
export class SharedModule {
}
