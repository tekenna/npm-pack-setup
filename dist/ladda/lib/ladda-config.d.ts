import * as i0 from "@angular/core";
export declare type LaddaStyle = "expand-left" | "expand-right" | "expand-up" | "expand-down" | "contract" | "contract-overlay" | "zoom-in" | "zoom-out" | "slide-left" | "slide-right" | "slide-up" | "slide-down";
export declare abstract class LaddaConfigArgs {
    style?: LaddaStyle;
    spinnerSize?: number;
    spinnerColor?: string;
    spinnerLines?: number;
}
export declare class LaddaConfig implements LaddaConfigArgs {
    constructor(config?: LaddaConfigArgs);
    static ɵfac: i0.ɵɵFactoryDeclaration<LaddaConfig, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LaddaConfig>;
}
