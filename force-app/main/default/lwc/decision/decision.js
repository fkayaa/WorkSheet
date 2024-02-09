import { LightningElement } from 'lwc';

export default class Decision extends LightningElement {

    display=false;


    handleCheck(event){

       this.display=event.target.checked;
    }



}