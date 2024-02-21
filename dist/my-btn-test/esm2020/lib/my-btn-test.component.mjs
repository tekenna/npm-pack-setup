import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class MyBtnTestComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktYnRuLXRlc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktYnRuLXRlc3Qvc3JjL2xpYi9teS1idG4tdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQXdCekQsTUFBTSxPQUFPLGtCQUFrQjtJQXBCL0I7UUFxQkUsY0FBUyxHQUNMLG1KQUFtSixDQUFDO1FBQ3hKLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFFbEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVRLFVBQUssR0FBVztZQUNuQyxRQUFRLEVBQUUsRUFBRTtZQUNaLFNBQVMsRUFBRSxFQUFFO1lBQ2IsYUFBYSxFQUFFLEVBQUU7WUFDakIsY0FBYyxFQUFFLEVBQUU7WUFDbEIsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBQ3VCLFlBQU8sR0FBYTtZQUN6QyxJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxTQUFTO1lBQ2YsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBQ3FCLFVBQUssR0FBVztZQUNuQyxPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxJQUFJO1NBQ2YsQ0FBQztRQUV1QixZQUFPLEdBQWUsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0tBdUR6RDtJQXJEQyxRQUFRO1FBQ0osUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUN2QixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsOERBQThELENBQUM7Z0JBQ3RGLE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsNkdBQTZHLENBQUM7Z0JBQ3JJLE1BQU07WUFDVixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsaUVBQWlFLENBQUM7Z0JBQ3pGLE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsaUVBQWlFLENBQUM7Z0JBQ3pGLE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsOERBQThELENBQUM7Z0JBQ3RGLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsOERBQThELENBQUM7Z0JBQ3RGLE1BQU07WUFDVjtnQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxpRUFBaUUsQ0FBQztnQkFDekYsTUFBTTtTQUNiO1FBQ0QsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUN2QixLQUFLLGFBQWE7Z0JBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7Z0JBQ2hDLE1BQU07WUFDVixLQUFLLE9BQU87Z0JBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1YsS0FBSyxhQUFhO2dCQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztnQkFDaEMsTUFBTTtZQUNWO2dCQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztnQkFDaEMsTUFBTTtTQUNiO1FBRUQsSUFBSSxDQUFDLFNBQVM7WUFDVixJQUFJLENBQUMsU0FBUztnQkFDZCxHQUFHO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO2dCQUNqQixHQUFHO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzNCLENBQUM7OytHQTlFVSxrQkFBa0I7bUdBQWxCLGtCQUFrQix1SUFsQm5COzs7Ozs7Ozs7Ozs7OztLQWNQOzJGQUlRLGtCQUFrQjtrQkFwQjlCLFNBQVM7K0JBQ0UsYUFBYSxZQUNiOzs7Ozs7Ozs7Ozs7OztLQWNQOzhCQVdvQixLQUFLO3NCQUEzQixLQUFLO3VCQUFDLE9BQU87Z0JBT1csT0FBTztzQkFBL0IsS0FBSzt1QkFBQyxTQUFTO2dCQUtPLEtBQUs7c0JBQTNCLEtBQUs7dUJBQUMsT0FBTztnQkFLVyxPQUFPO3NCQUEvQixLQUFLO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElPcHRpb25zLCBJUHJvcHMsIElTdGF0ZSB9IGZyb20gJy4vYm50LWNvbmZpZyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktYnRuLXRlc3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c3BhbiBjbGFzcz1cInt7IGNsYXNzbmFtZSB9fVwiIChjbGljayk9XCJvbkNsaWNrKClcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAqbmdJZj1cInByb3BzLmxlZnRJY29uICYmIHByb3BzLmxlZnRJY29uICE9PSAnJ1wiXG4gICAgICAgICAgICAgICAgc3JjPVwie3sgcHJvcHMubGVmdEljb24gfX1cIlxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3sgcHJvcHMubGFiZWwgfX1cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAqbmdJZj1cInByb3BzLnJpZ2h0SWNvbiAmJiBwcm9wcy5yaWdodEljb24gIT09ICcnXCJcbiAgICAgICAgICAgICAgICBzcmM9XCJ7eyBwcm9wcy5yaWdodEljb24gfX1cIlxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgYCxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTXlCdG5UZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2xhc3NuYW1lID1cbiAgICAgIFwicm91bmRlZC1bNXB4XSBnYXAtWzRweF0gcHgtWzEycHhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtWzEycHhdIGZvbnQtWzUwMF0gbGVhZGluZy1bMTUwJV0gdHJhbnNpdGlvbi1hbGwgZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwIFwiO1xuICBjbGFzc2VzOiBhbnkgPSB7fTtcblxuICB0ZXN0U3R5bGUgPSB7fTtcblxuICBASW5wdXQoJ3Byb3BzJykgcHVibGljIHByb3BzOiBJUHJvcHMgPSB7XG4gICAgICBsZWZ0SWNvbjogXCJcIixcbiAgICAgIHJpZ2h0SWNvbjogXCJcIixcbiAgICAgIGxlZnRJY29uQ2xhc3M6IFwiXCIsXG4gICAgICByaWdodEljb25DbGFzczogXCJcIixcbiAgICAgIGxhYmVsOiBcIlwiLFxuICB9O1xuICBASW5wdXQoJ29wdGlvbnMnKSBwdWJsaWMgb3B0aW9uczogSU9wdGlvbnMgPSB7XG4gICAgICB0eXBlOiBcImRlZmF1bHRcIixcbiAgICAgIHNpemU6IFwiZGVmYXVsdFwiLFxuICAgICAgY2xhc3M6IFwiXCIsXG4gIH07XG4gIEBJbnB1dCgnc3RhdGUnKSBwdWJsaWMgc3RhdGU6IElTdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgYWN0aXZlOiB0cnVlLFxuICB9O1xuXG4gIEBJbnB1dCgnb25DbGljaycpIHB1YmxpYyBvbkNsaWNrOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy50eXBlKSB7XG4gICAgICAgICAgY2FzZSBcInByaW1hcnlcIjpcbiAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLmRpc3BsYXkgPSBgIGJnLVsjMDgxQTQ2XSBob3ZlcjpiZy1bIzJEMzU2Nl0gY3Vyc29yLXBvaW50ZXIgdGV4dC1bI2ZmZl0gYDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm91dGxpbmVcIjpcbiAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLmRpc3BsYXkgPSBgIGJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLVsjMkQzNTY2XSBib3JkZXIgY3Vyc29yLXBvaW50ZXIgYm9yZGVyLVsjMDgxQTQ2XSB0ZXh0LVsjMDgxQTQ2XSBob3Zlcjp0ZXh0LVsjZmZmXSBgO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiYWx0ZXJuYXRlXCI6XG4gICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5kaXNwbGF5ID0gYCBiZy1bI0VERUVGRl0gaG92ZXI6YmctWyM5NTk3RDFdIGN1cnNvci1wb2ludGVyIHRleHQtWyMwODFBNDZdIGA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJkaXNhYmxlZFwiOlxuICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMuZGlzcGxheSA9IGAgYmctWyNFNUU3RUJdIGhvdmVyOmJnLVsjRDJENkRDXSBjdXJzb3ItcG9pbnRlciB0ZXh0LVsjNkI3MjgwXSBgO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwic3VjY2Vzc1wiOlxuICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMuZGlzcGxheSA9IGAgYmctWyMwNTdBNTVdIGhvdmVyOmJnLVsjMDM1NDNGXSBjdXJzb3ItcG9pbnRlciB0ZXh0LVsjZmZmXSBgO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiZGFuZ2VyXCI6XG4gICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5kaXNwbGF5ID0gYCBiZy1bI0RDMjYyNl0gaG92ZXI6YmctWyM5QjFDMUNdIGN1cnNvci1wb2ludGVyIHRleHQtWyNmZmZdIGA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5kaXNwbGF5ID0gYCBiZy10cmFuc2FwYXJlbnQgdGV4dC1bIzU3NTNDOV0gaG92ZXI6dW5kZXJsaW5lIGN1cnNvci1wb2ludGVyIGA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuc2l6ZSkge1xuICAgICAgICAgIGNhc2UgXCJleHRyYS1zbWFsbFwiOlxuICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMuc2l6ZSA9IGAgaC1bMjRweF1gO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwic21hbGxcIjpcbiAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLnNpemUgPSBgIGgtWzI0cHhdYDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm1lZGl1bVwiOlxuICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMuc2l6ZSA9IGAgaC1bNDFweF1gO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwibGFyZ2VcIjpcbiAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLnNpemUgPSBgIGgtWzQ4cHhdYDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImV4dHJhLWxhcmdlXCI6XG4gICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5zaXplID0gYCBoLVs1MnB4XWA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5zaXplID0gYCBoLVs0MXB4XWA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsYXNzbmFtZSA9XG4gICAgICAgICAgdGhpcy5jbGFzc25hbWUgK1xuICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICB0aGlzLmNsYXNzZXMuZGlzcGxheSArXG4gICAgICAgICAgdGhpcy5jbGFzc2VzLnNpemUgK1xuICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuY2xhc3M7XG4gIH1cbn0iXX0=