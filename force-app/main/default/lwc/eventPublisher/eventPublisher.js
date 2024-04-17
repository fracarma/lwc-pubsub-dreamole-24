import { LightningElement, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class EventPublisher extends LightningElement {
    
    //CurrentPageReference is supported on Lightning Experience only
    pageRef = { 'attributes' : { 'url' : window.location.href } };

    @wire(CurrentPageReference)
    wiredPageRef(pageRef) {
        this.pageRef = pageRef;
    }

    handleClick(event) {
        fireEvent(this.pageRef, 'buttonClicked', { 'details' : { 'button' : event.target.value }});
    }
}