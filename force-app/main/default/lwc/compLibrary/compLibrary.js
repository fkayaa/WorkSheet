import { LightningElement } from 'lwc';

export default class CompLibrary extends LightningElement {

name;
    handleClick(event){

 this.name=event.target.name;
       


    }
}