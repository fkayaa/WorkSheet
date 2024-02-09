import { LightningElement } from 'lwc';

export default class FullToUpperCase extends LightningElement {


firstName ="fatma";
lastName = "kaya";


get fullUpperCaseName(){

      return (this.firstName + " " + this.lastName).toUpperCase();


}







}