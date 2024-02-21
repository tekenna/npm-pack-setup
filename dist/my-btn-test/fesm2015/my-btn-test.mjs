import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class MyBtnTestService {
    constructor() { }
}
MyBtnTestService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: MyBtnTestService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyBtnTestService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: MyBtnTestService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: MyBtnTestService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MyBtnTestComponent {
    constructor() {
        this.classname = "rounded-[5px] gap-[4px] px-[12px] flex items-center justify-center text-[12px] font-[500] leading-[150%] transition-all ease-in-out duration-300 ";
        this.classes = {};
        this.testStyle = {};
        this.props = {
            leftIcon: "",
            rightIcon: "",
            leftIconClass: "",
            rightIconClass: "",
            label: "",
        };
        this.options = {
            type: "default",
            size: "default",
            class: "",
        };
        this.state = {
            loading: false,
            active: true,
        };
        this.onClick = () => { };
    }
    ngOnInit() {
        switch (this.options.type) {
            case "primary":
                this.classes.display = ` bg-[#081A46] hover:bg-[#2D3566] cursor-pointer text-[#fff] `;
                break;
            case "outline":
                this.classes.display = ` bg-transparent hover:bg-[#2D3566] border cursor-pointer border-[#081A46] text-[#081A46] hover:text-[#fff] `;
                break;
            case "alternate":
                this.classes.display = ` bg-[#EDEEFF] hover:bg-[#9597D1] cursor-pointer text-[#081A46] `;
                break;
            case "disabled":
                this.classes.display = ` bg-[#E5E7EB] hover:bg-[#D2D6DC] cursor-pointer text-[#6B7280] `;
                break;
            case "success":
                this.classes.display = ` bg-[#057A55] hover:bg-[#03543F] cursor-pointer text-[#fff] `;
                break;
            case "danger":
                this.classes.display = ` bg-[#DC2626] hover:bg-[#9B1C1C] cursor-pointer text-[#fff] `;
                break;
            default:
                this.classes.display = ` bg-transaparent text-[#5753C9] hover:underline cursor-pointer `;
                break;
        }
        switch (this.options.size) {
            case "extra-small":
                this.classes.size = ` h-[24px]`;
                break;
            case "small":
                this.classes.size = ` h-[24px]`;
                break;
            case "medium":
                this.classes.size = ` h-[41px]`;
                break;
            case "large":
                this.classes.size = ` h-[48px]`;
                break;
            case "extra-large":
                this.classes.size = ` h-[52px]`;
                break;
            default:
                this.classes.size = ` h-[41px]`;
                break;
        }
        this.classname =
            this.classname +
                " " +
                this.classes.display +
                this.classes.size +
                " " +
                this.options.class;
    }
}
MyBtnTestComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: MyBtnTestComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyBtnTestComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: MyBtnTestComponent, selector: "my-btn-test", inputs: { props: "props", options: "options", state: "state", onClick: "onClick" }, ngImport: i0, template: `
        <span class="{{ classname }}" (click)="onClick()">
            <img
                *ngIf="props.leftIcon && props.leftIcon !== ''"
                src="{{ props.leftIcon }}"
                alt=""
            />
            {{ props.label }}
            <img
                *ngIf="props.rightIcon && props.rightIcon !== ''"
                src="{{ props.rightIcon }}"
                alt=""
            />
        </span>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: MyBtnTestComponent, decorators: [{
            type: Component,
            args: [{ selector: 'my-btn-test', template: `
        <span class="{{ classname }}" (click)="onClick()">
            <img
                *ngIf="props.leftIcon && props.leftIcon !== ''"
                src="{{ props.leftIcon }}"
                alt=""
            />
            {{ props.label }}
            <img
                *ngIf="props.rightIcon && props.rightIcon !== ''"
                src="{{ props.rightIcon }}"
                alt=""
            />
        </span>
    ` }]
        }], propDecorators: { props: [{
                type: Input,
                args: ['props']
            }], options: [{
                type: Input,
                args: ['options']
            }], state: [{
                type: Input,
                args: ['state']
            }], onClick: [{
                type: Input,
                args: ['onClick']
            }] } });

class MyBtnTestModule {
}
MyBtnTestModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: MyBtnTestModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyBtnTestModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: MyBtnTestModule, declarations: [MyBtnTestComponent], imports: [CommonModule], exports: [MyBtnTestComponent] });
MyBtnTestModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: MyBtnTestModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: MyBtnTestModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MyBtnTestComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        MyBtnTestComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of my-btn-test
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyBtnTestComponent, MyBtnTestModule, MyBtnTestService };
//# sourceMappingURL=my-btn-test.mjs.map
