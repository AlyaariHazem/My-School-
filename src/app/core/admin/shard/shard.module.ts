import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// const components=[]

const modules = [
  CommonModule

]
@NgModule({
  // declarations:components,
  imports: modules,
  exports: [
    ...modules
    //  ...components,...modules
  ]
})
export class ShardModule { }
