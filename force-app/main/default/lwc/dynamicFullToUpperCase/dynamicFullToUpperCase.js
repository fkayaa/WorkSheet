import { LightningElement } from 'lwc';

export default class DynamicFullToUpperCase extends LightningElement {
isim;
soyisim;

    handleFirst(event){
 
         this.isim = event.target.value;

    }

    handleLast(event){

            this.soyisim = event.target.value;
    }

    get fullName(){

        return ( this.isim + ' ' + this.soyisim).toUpperCase();
    }


}