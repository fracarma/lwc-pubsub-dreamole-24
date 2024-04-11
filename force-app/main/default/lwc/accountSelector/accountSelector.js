import { LightningElement, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation'; 

export default class AccountSelector extends LightningElement {
    pageRef = { 'attributes' : { 'url' : window.location.href } };
    @wire(CurrentPageReference) 
    wiredPageRef(pageRef) {
        this.pageRef = pageRef;
    }

    handleClick(event) {
        console.log('Clicked!');
        console.log('event.target: ', event.target);
        console.log('event.target.id: ', event.target.id);
        console.log('event.target.value: ', event.target.value);
        console.log('event.target.dataset.id: ', event.target.value);
        fireEvent(this.pageRef, 'accountSelected', event.target.value); 
    }
}