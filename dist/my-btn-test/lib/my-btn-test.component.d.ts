import { OnInit } from '@angular/core';
import { IOptions, IProps, IState } from './bnt-config';
import * as i0 from "@angular/core";
export declare class MyBtnTestComponent implements OnInit {
    classname: string;
    classes: any;
    testStyle: {};
    props: IProps;
    options: IOptions;
    state: IState;
    onClick: () => void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyBtnTestComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyBtnTestComponent, "my-btn-test", never, { "props": "props"; "options": "options"; "state": "state"; "onClick": "onClick"; }, {}, never, never, false, never>;
}
