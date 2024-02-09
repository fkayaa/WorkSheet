import { LightningElement } from 'lwc';

export default class SumExample extends LightningElement {


    num1;
    num2;


    Num1(event){
       
         this.num1 = event.target.value;      
    }

    Num2(event){

           this.num2 = event.target.value;
    }

get sum(){

return Number(this.num1) + Number(this.num2);

}

}