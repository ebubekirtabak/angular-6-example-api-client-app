import { Component, OnInit, OnDestroy, ViewChild }   from '@angular/core';
import { ModalServices } from '../../services/modal.services';
import {NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-dialog',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

    modalData: any = {};
    modalRef: NgbModalRef;
    closeResult: string;
    @ViewChild('content') private content;

    constructor(private modalService: ModalServices, private ngmodalService: NgbModal) {
       this.modalService.openModal$.subscribe((result) => {
           this.modalData = JSON.parse(result);
           this.open();
       },
       (error) => console.log("Error happened" + error),
       () => console.log("the subscription is completed"));

       
    }


    ngOnInit(): void {

    }
    
    ngOnDestroy(): void {
    }
     
    open(): void {
        this.modalRef = this.ngmodalService.open(this.content, { centered: true });
        this.modalRef.result.then((result) => {
            this.modalService.eventListener({result:result,id:this.modalData.id});
        }, (reason) => {
            this.modalService.eventListener(reason);
        });
    }
     

}
