import { LightningElement } from 'lwc';

export default class Car extends LightningElement {

    model;

motor(event){

        this.model = event.target.value;  

}


}