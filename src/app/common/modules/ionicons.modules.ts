import { CommonModule } from "@angular/common";
import { NgModel } from "@angular/forms";
import * as icons from 'ionicons/icons'
import { addIcons } from "ionicons";
import { NgModule } from "@angular/core";





@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})

export class IoniconsModule {
    constructor(){
        this.init();
    }

    init(){
        for (const key in icons) {
            if (Object.prototype.hasOwnProperty.call(icons, key)) {
                const name = key as keyof typeof icons;
                console.log(key, ' ', icons[name]);
            }
        }
    }


}

