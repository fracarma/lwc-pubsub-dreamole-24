import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListener } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class EventSubscriber extends LightningElement {
    
    //CurrentPageReference is supported on Lightning Experience only
    pageRef = { 'attributes' : { 'url' : window.location.href } };

    @wire(CurrentPageReference)
    wiredPageRef(pageRef) {
        this.pageRef = pageRef;
    }

    clickedButton = '';

    connectedCallback() {
        registerListener('buttonClicked', this.handleEventReceived, this);
    }

    disconnectedCallback() {
        unregisterAllListener(this);
    }

    handleEventReceived(event) {
        console.log('Event received: ', JSON.stringify(event));
        this.clickedButton = event.details.button;
    }
}