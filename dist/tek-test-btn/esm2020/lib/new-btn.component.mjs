import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NewBtnComponent {
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
NewBtnComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NewBtnComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NewBtnComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: NewBtnComponent, selector: "tek-test-btn", inputs: { props: "props", options: "options", state: "state", onClick: "onClick" }, ngImport: i0, template: `
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NewBtnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tek-test-btn', template: `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZXctYnRuL3NyYy9saWIvbmV3LWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQXVCekQsTUFBTSxPQUFPLGVBQWU7SUFwQjVCO1FBcUJFLGNBQVMsR0FDTCxtSkFBbUosQ0FBQztRQUN4SixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBRWxCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFFUSxVQUFLLEdBQVc7WUFDbkMsUUFBUSxFQUFFLEVBQUU7WUFDWixTQUFTLEVBQUUsRUFBRTtZQUNiLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLEtBQUssRUFBRSxFQUFFO1NBQ1osQ0FBQztRQUN1QixZQUFPLEdBQWE7WUFDekMsSUFBSSxFQUFFLFNBQVM7WUFDZixJQUFJLEVBQUUsU0FBUztZQUNmLEtBQUssRUFBRSxFQUFFO1NBQ1osQ0FBQztRQUNxQixVQUFLLEdBQVc7WUFDbkMsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsSUFBSTtTQUNmLENBQUM7UUFFdUIsWUFBTyxHQUFlLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztLQXVEekQ7SUFyREMsUUFBUTtRQUNKLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDdkIsS0FBSyxTQUFTO2dCQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLDhEQUE4RCxDQUFDO2dCQUN0RixNQUFNO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLDZHQUE2RyxDQUFDO2dCQUNySSxNQUFNO1lBQ1YsS0FBSyxXQUFXO2dCQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLGlFQUFpRSxDQUFDO2dCQUN6RixNQUFNO1lBQ1YsS0FBSyxVQUFVO2dCQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLGlFQUFpRSxDQUFDO2dCQUN6RixNQUFNO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLDhEQUE4RCxDQUFDO2dCQUN0RixNQUFNO1lBQ1YsS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLDhEQUE4RCxDQUFDO2dCQUN0RixNQUFNO1lBQ1Y7Z0JBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsaUVBQWlFLENBQUM7Z0JBQ3pGLE1BQU07U0FDYjtRQUNELFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDdkIsS0FBSyxhQUFhO2dCQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7Z0JBQ2hDLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssYUFBYTtnQkFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7Z0JBQ2hDLE1BQU07WUFDVjtnQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7Z0JBQ2hDLE1BQU07U0FDYjtRQUVELElBQUksQ0FBQyxTQUFTO1lBQ1YsSUFBSSxDQUFDLFNBQVM7Z0JBQ2QsR0FBRztnQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtnQkFDakIsR0FBRztnQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDOzs0R0E5RVUsZUFBZTtnR0FBZixlQUFlLHdJQWxCaEI7Ozs7Ozs7Ozs7Ozs7O0tBY1A7MkZBSVEsZUFBZTtrQkFwQjNCLFNBQVM7K0JBQ0UsY0FBYyxZQUNkOzs7Ozs7Ozs7Ozs7OztLQWNQOzhCQVdvQixLQUFLO3NCQUEzQixLQUFLO3VCQUFDLE9BQU87Z0JBT1csT0FBTztzQkFBL0IsS0FBSzt1QkFBQyxTQUFTO2dCQUtPLEtBQUs7c0JBQTNCLEtBQUs7dUJBQUMsT0FBTztnQkFLVyxPQUFPO3NCQUEvQixLQUFLO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElPcHRpb25zLCBJUHJvcHMsIElTdGF0ZSB9IGZyb20gJy4vYm50LWNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rlay10ZXN0LWJ0bicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwie3sgY2xhc3NuYW1lIH19XCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICpuZ0lmPVwicHJvcHMubGVmdEljb24gJiYgcHJvcHMubGVmdEljb24gIT09ICcnXCJcbiAgICAgICAgICAgICAgICBzcmM9XCJ7eyBwcm9wcy5sZWZ0SWNvbiB9fVwiXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7eyBwcm9wcy5sYWJlbCB9fVxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICpuZ0lmPVwicHJvcHMucmlnaHRJY29uICYmIHByb3BzLnJpZ2h0SWNvbiAhPT0gJydcIlxuICAgICAgICAgICAgICAgIHNyYz1cInt7IHByb3BzLnJpZ2h0SWNvbiB9fVwiXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICBgLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZXdCdG5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGFzc25hbWUgPVxuICAgICAgXCJyb3VuZGVkLVs1cHhdIGdhcC1bNHB4XSBweC1bMTJweF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1bMTJweF0gZm9udC1bNTAwXSBsZWFkaW5nLVsxNTAlXSB0cmFuc2l0aW9uLWFsbCBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAgXCI7XG4gIGNsYXNzZXM6IGFueSA9IHt9O1xuXG4gIHRlc3RTdHlsZSA9IHt9O1xuXG4gIEBJbnB1dCgncHJvcHMnKSBwdWJsaWMgcHJvcHM6IElQcm9wcyA9IHtcbiAgICAgIGxlZnRJY29uOiBcIlwiLFxuICAgICAgcmlnaHRJY29uOiBcIlwiLFxuICAgICAgbGVmdEljb25DbGFzczogXCJcIixcbiAgICAgIHJpZ2h0SWNvbkNsYXNzOiBcIlwiLFxuICAgICAgbGFiZWw6IFwiXCIsXG4gIH07XG4gIEBJbnB1dCgnb3B0aW9ucycpIHB1YmxpYyBvcHRpb25zOiBJT3B0aW9ucyA9IHtcbiAgICAgIHR5cGU6IFwiZGVmYXVsdFwiLFxuICAgICAgc2l6ZTogXCJkZWZhdWx0XCIsXG4gICAgICBjbGFzczogXCJcIixcbiAgfTtcbiAgQElucHV0KCdzdGF0ZScpIHB1YmxpYyBzdGF0ZTogSVN0YXRlID0ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBhY3RpdmU6IHRydWUsXG4gIH07XG5cbiAgQElucHV0KCdvbkNsaWNrJykgcHVibGljIG9uQ2xpY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLnR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwicHJpbWFyeVwiOlxuICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMuZGlzcGxheSA9IGAgYmctWyMwODFBNDZdIGhvdmVyOmJnLVsjMkQzNTY2XSBjdXJzb3ItcG9pbnRlciB0ZXh0LVsjZmZmXSBgO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwib3V0bGluZVwiOlxuICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMuZGlzcGxheSA9IGAgYmctdHJhbnNwYXJlbnQgaG92ZXI6YmctWyMyRDM1NjZdIGJvcmRlciBjdXJzb3ItcG9pbnRlciBib3JkZXItWyMwODFBNDZdIHRleHQtWyMwODFBNDZdIGhvdmVyOnRleHQtWyNmZmZdIGA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJhbHRlcm5hdGVcIjpcbiAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLmRpc3BsYXkgPSBgIGJnLVsjRURFRUZGXSBob3ZlcjpiZy1bIzk1OTdEMV0gY3Vyc29yLXBvaW50ZXIgdGV4dC1bIzA4MUE0Nl0gYDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImRpc2FibGVkXCI6XG4gICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5kaXNwbGF5ID0gYCBiZy1bI0U1RTdFQl0gaG92ZXI6YmctWyNEMkQ2RENdIGN1cnNvci1wb2ludGVyIHRleHQtWyM2QjcyODBdIGA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJzdWNjZXNzXCI6XG4gICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5kaXNwbGF5ID0gYCBiZy1bIzA1N0E1NV0gaG92ZXI6YmctWyMwMzU0M0ZdIGN1cnNvci1wb2ludGVyIHRleHQtWyNmZmZdIGA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJkYW5nZXJcIjpcbiAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLmRpc3BsYXkgPSBgIGJnLVsjREMyNjI2XSBob3ZlcjpiZy1bIzlCMUMxQ10gY3Vyc29yLXBvaW50ZXIgdGV4dC1bI2ZmZl0gYDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLmRpc3BsYXkgPSBgIGJnLXRyYW5zYXBhcmVudCB0ZXh0LVsjNTc1M0M5XSBob3Zlcjp1bmRlcmxpbmUgY3Vyc29yLXBvaW50ZXIgYDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5zaXplKSB7XG4gICAgICAgICAgY2FzZSBcImV4dHJhLXNtYWxsXCI6XG4gICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5zaXplID0gYCBoLVsyNHB4XWA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJzbWFsbFwiOlxuICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMuc2l6ZSA9IGAgaC1bMjRweF1gO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5zaXplID0gYCBoLVs0MXB4XWA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJsYXJnZVwiOlxuICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMuc2l6ZSA9IGAgaC1bNDhweF1gO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiZXh0cmEtbGFyZ2VcIjpcbiAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLnNpemUgPSBgIGgtWzUycHhdYDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLnNpemUgPSBgIGgtWzQxcHhdYDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xhc3NuYW1lID1cbiAgICAgICAgICB0aGlzLmNsYXNzbmFtZSArXG4gICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgIHRoaXMuY2xhc3Nlcy5kaXNwbGF5ICtcbiAgICAgICAgICB0aGlzLmNsYXNzZXMuc2l6ZSArXG4gICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5jbGFzcztcbiAgfVxufVxuIl19