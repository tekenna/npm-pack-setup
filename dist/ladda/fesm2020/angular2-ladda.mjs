import * as i0 from '@angular/core';
import { Injectable, PLATFORM_ID, Directive, Inject, Optional, Input, NgModule } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { create } from 'ladda';

class LaddaConfigArgs {
}
class LaddaConfig {
    constructor(config = {}) {
        Object.assign(this, config);
    }
}
LaddaConfig.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: LaddaConfig, deps: [{ token: LaddaConfigArgs }], target: i0.ɵɵFactoryTarget.Injectable });
LaddaConfig.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: LaddaConfig });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: LaddaConfig, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: LaddaConfigArgs }]; } });

class LaddaDirective {
    constructor(el, config, platformId) {
        this.platformId = platformId;
        this.ladda = undefined;
        this.disabled = false;
        this.el = el.nativeElement;
        if (!config) {
            return;
        }
        if (config.style && !this.el.getAttribute('data-style')) {
            this.el.setAttribute('data-style', config.style);
        }
        if (config.spinnerSize && !this.el.getAttribute('data-spinner-size')) {
            this.el.setAttribute('data-spinner-size', config.spinnerSize.toString());
        }
        if (config.spinnerColor && !this.el.getAttribute('data-spinner-color')) {
            this.el.setAttribute('data-spinner-color', config.spinnerColor);
        }
        if (config.spinnerLines && !this.el.getAttribute('data-spinner-lines')) {
            this.el.setAttribute('data-spinner-lines', config.spinnerLines.toString());
        }
    }
    ngOnChanges(changes) {
        if (!this.ladda) {
            return; // needed since ngOnChanges is called before ngOnInit
        }
        if (changes.loading) {
            this.updateLadda(changes.loading.previousValue);
        }
        if (changes.disabled) {
            this.updateDisabled();
        }
    }
    ngOnInit() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.ladda = create(this.el);
        // if the initial loading value isn't false, a timeout of 0 ms
        // is necessary for the calculated spinner size to be correct.
        setTimeout(() => { this.updateLadda(false); }, 0);
    }
    ngOnDestroy() {
        if (this.ladda) {
            this.ladda.remove();
        }
    }
    updateLadda(previousValue) {
        if (!this.ladda) {
            return;
        }
        let loading = typeof this.loading === 'number' || !!this.loading;
        let wasLoading = typeof previousValue === 'number' || !!previousValue;
        if (!loading) {
            if (wasLoading) {
                this.ladda.stop();
            }
            return this.updateDisabled();
        }
        if (!wasLoading) {
            this.ladda.start();
        }
        if (typeof this.loading === 'number') {
            this.ladda.setProgress(this.loading);
        }
    }
    updateDisabled() {
        this.el.disabled = this.disabled;
    }
}
LaddaDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: LaddaDirective, deps: [{ token: i0.ElementRef }, { token: LaddaConfig, optional: true }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
LaddaDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.4", type: LaddaDirective, selector: "[ladda]", inputs: { loading: ["ladda", "loading"], disabled: "disabled" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: LaddaDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ladda]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: LaddaConfigArgs, decorators: [{
                    type: Inject,
                    args: [LaddaConfig]
                }, {
                    type: Optional
                }] }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { loading: [{
                type: Input,
                args: ['ladda']
            }], disabled: [{
                type: Input
            }] } });

class LaddaModule {
    static forRoot(config) {
        return {
            ngModule: LaddaModule,
            providers: [
                { provide: LaddaConfig, useValue: config },
            ],
        };
    }
}
LaddaModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: LaddaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LaddaModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: LaddaModule, declarations: [LaddaDirective], exports: [LaddaDirective] });
LaddaModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: LaddaModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: LaddaModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [LaddaDirective],
                    exports: [LaddaDirective],
                }]
        }] });

/*
 * Public API Surface of ladda
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LaddaConfig, LaddaConfigArgs, LaddaDirective, LaddaModule };
//# sourceMappingURL=angular2-ladda.mjs.map
//# sourceMappingURL=angular2-ladda.mjs.map
