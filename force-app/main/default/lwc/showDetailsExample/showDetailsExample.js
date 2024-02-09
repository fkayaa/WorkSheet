import { LightningElement } from 'lwc';

export default class ShowDetailsExample extends LightningElement {

display=false;

handleCheck(event){

this.display = event.target.checked;

}


}