import { Component, ViewChild, ElementRef, Renderer, RendererFactory2, Renderer2, Inject} from '@angular/core';
import { AlertServices } from '../../services/alert.services';
import { DOCUMENT } from '@angular/platform-browser';
import { setDOM } from '@angular/platform-browser/src/dom/dom_adapter';

@Component({
    selector: 'alert-component',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
  })
export class AlertComponent {


    /*@Data Example: {
    title:"Alert Title",
    message: "Alert Message",
    duration: 3000,
    delay: 1000,
    alertType:"warning" | "danger" | "success" | "info"
    }*/

    @ViewChild('alertwrapper') private wrapper: ElementRef;
    constructor(private alertService: AlertServices,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document) {
        
        this.alertService.sendAlert$.subscribe((result) => {
            this.pushAlert(result);
        },
        (error) => console.log("Error happened" + error),
        () => console.log("the subscription is completed"));
    }

    pushAlert(data): void {
        let alert_id = "alert-" + Math.floor(Math.random() * 9999) + 1  ;
        let alert = `<div id="${alert_id}" class="alert__notification ${data.alertType}">
        <div class="alert__notification__header">${data.title}</div>
            <div class="alert__notification__body">
                <div class="alert__notification__body-text">
                    ${data.message}
                </div>
            </div>
        </div>`;
        this.wrapper.nativeElement.insertAdjacentHTML('afterbegin', alert);
        this.clearAlert(alert_id, data.duration);
    }

    clearAlert(alert_id, duration) {
        let element = document.getElementById(alert_id);
        let seconds = duration/1000;
        //element.style.transition = "opacity " + seconds + "s ease";
        //element.style.opacity = "0";
        setTimeout(() => {
            element.parentNode.removeChild(element);    
        }, duration);
    }

}