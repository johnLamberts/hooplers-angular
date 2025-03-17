import { NgModule, Optional, SkipSelf } from "@angular/core";
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';

@NgModule({
    imports: [],
    providers: [
        {
            // Disabled 'theme' sanity check
            provide: MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme: false,
                version: true,
            }
        }

    ],
})
export class HooplerModule {
    constructor(@Optional() @SkipSelf() parentModule?: HooplerModule) {
        if(parentModule) {
            throw new Error('HooplerModule has already been loaded. Import this module in the AppModule only!');
        }
    }
}
