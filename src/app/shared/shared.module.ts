import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUpdateProductoComponent } from './components/add-update-producto/add-update-producto.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddUpdateProductoComponent
  ],
  exports: [
    AddUpdateProductoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
