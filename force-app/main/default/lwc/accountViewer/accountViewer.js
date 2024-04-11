import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation'; 

export default class AccountViewer extends LightningElement {
    pageRef = { 'attributes' : { 'url' : window.location.href } };
    @wire(CurrentPageReference) 
    wiredPageRef(pageRef) {
        console.log('wiredPageRef: ', pageRef);
        this.pageRef = pageRef;
    }
    
    details = '';

    connectedCallback() { 
        registerListener('accountSelected', this.handleAccountSelected, this);
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }

    handleAccountSelected(event){
        console.log('Account Selected: ' + event);
        this.details = event;
    } 
}