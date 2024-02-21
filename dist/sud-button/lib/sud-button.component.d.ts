import { OnInit } from "@angular/core";
import { IOptions, IProps, IState } from "./sud-button-config";
import * as i0 from "@angular/core";
export declare class SudButtonComponent implements OnInit {
    classname: string;
    classes: any;
    testStyle: {};
    props: IProps;
    options: IOptions;
    state: IState;
    onClick: () => void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SudButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SudButtonComponent, "sud-button", never, { "props": "props"; "options": "options"; "state": "state"; "onClick": "onClick"; }, {}, never, never, false, never>;
}
