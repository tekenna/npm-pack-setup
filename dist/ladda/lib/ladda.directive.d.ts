import { ElementRef, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { LaddaConfigArgs } from './ladda-config';
import * as i0 from "@angular/core";
export declare type LaddaValue = boolean | number | undefined | null;
export declare class LaddaDirective implements OnInit, OnDestroy, OnChanges {
    private platformId;
    private el;
    private ladda;
    loading: LaddaValue;
    disabled: boolean;
    constructor(el: ElementRef, config: LaddaConfigArgs, platformId: Object);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private updateLadda;
    private updateDisabled;
    static ɵfac: i0.ɵɵFactoryDeclaration<LaddaDirective, [null, { optional: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LaddaDirective, "[ladda]", never, { "loading": "ladda"; "disabled": "disabled"; }, {}, never, never, false, never>;
}
