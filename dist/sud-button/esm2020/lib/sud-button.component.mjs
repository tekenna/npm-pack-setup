import { Component, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SudButtonComponent {
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
SudButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: SudButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SudButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: SudButtonComponent, selector: "sud-button", inputs: { props: "props", options: "options", state: "state", onClick: "onClick" }, ngImport: i0, template: `
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: SudButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: "sud-button", template: `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zdWQtYnV0dG9uL3NyYy9saWIvc3VkLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQXNCekQsTUFBTSxPQUFPLGtCQUFrQjtJQW5CL0I7UUFvQkksY0FBUyxHQUNMLG1KQUFtSixDQUFDO1FBQ3hKLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFFbEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVRLFVBQUssR0FBVztZQUNuQyxRQUFRLEVBQUUsRUFBRTtZQUNaLFNBQVMsRUFBRSxFQUFFO1lBQ2IsYUFBYSxFQUFFLEVBQUU7WUFDakIsY0FBYyxFQUFFLEVBQUU7WUFDbEIsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBQ3VCLFlBQU8sR0FBYTtZQUN6QyxJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxTQUFTO1lBQ2YsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBQ3FCLFVBQUssR0FBVztZQUNuQyxPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxJQUFJO1NBQ2YsQ0FBQztRQUV1QixZQUFPLEdBQWUsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0tBdUQzRDtJQXJERyxRQUFRO1FBQ0osUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUN2QixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsOERBQThELENBQUM7Z0JBQ3RGLE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsNkdBQTZHLENBQUM7Z0JBQ3JJLE1BQU07WUFDVixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsaUVBQWlFLENBQUM7Z0JBQ3pGLE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsaUVBQWlFLENBQUM7Z0JBQ3pGLE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsOERBQThELENBQUM7Z0JBQ3RGLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsOERBQThELENBQUM7Z0JBQ3RGLE1BQU07WUFDVjtnQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxpRUFBaUUsQ0FBQztnQkFDekYsTUFBTTtTQUNiO1FBQ0QsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUN2QixLQUFLLGFBQWE7Z0JBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7Z0JBQ2hDLE1BQU07WUFDVixLQUFLLE9BQU87Z0JBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1YsS0FBSyxhQUFhO2dCQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztnQkFDaEMsTUFBTTtZQUNWO2dCQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztnQkFDaEMsTUFBTTtTQUNiO1FBRUQsSUFBSSxDQUFDLFNBQVM7WUFDVixJQUFJLENBQUMsU0FBUztnQkFDZCxHQUFHO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO2dCQUNqQixHQUFHO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzNCLENBQUM7OytHQTlFUSxrQkFBa0I7bUdBQWxCLGtCQUFrQixzSUFqQmpCOzs7Ozs7Ozs7Ozs7OztLQWNUOzJGQUdRLGtCQUFrQjtrQkFuQjlCLFNBQVM7K0JBQ0ksWUFBWSxZQUNaOzs7Ozs7Ozs7Ozs7OztLQWNUOzhCQVVzQixLQUFLO3NCQUEzQixLQUFLO3VCQUFDLE9BQU87Z0JBT1csT0FBTztzQkFBL0IsS0FBSzt1QkFBQyxTQUFTO2dCQUtPLEtBQUs7c0JBQTNCLEtBQUs7dUJBQUMsT0FBTztnQkFLVyxPQUFPO3NCQUEvQixLQUFLO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSU9wdGlvbnMsIElQcm9wcywgSVN0YXRlIH0gZnJvbSBcIi4vc3VkLWJ1dHRvbi1jb25maWdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VkLWJ1dHRvblwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwie3sgY2xhc3NuYW1lIH19XCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICpuZ0lmPVwicHJvcHMubGVmdEljb24gJiYgcHJvcHMubGVmdEljb24gIT09ICcnXCJcbiAgICAgICAgICAgICAgICBzcmM9XCJ7eyBwcm9wcy5sZWZ0SWNvbiB9fVwiXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7eyBwcm9wcy5sYWJlbCB9fVxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICpuZ0lmPVwicHJvcHMucmlnaHRJY29uICYmIHByb3BzLnJpZ2h0SWNvbiAhPT0gJydcIlxuICAgICAgICAgICAgICAgIHNyYz1cInt7IHByb3BzLnJpZ2h0SWNvbiB9fVwiXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICBgLFxuICAgIHN0eWxlczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFN1ZEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY2xhc3NuYW1lID1cbiAgICAgICAgXCJyb3VuZGVkLVs1cHhdIGdhcC1bNHB4XSBweC1bMTJweF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1bMTJweF0gZm9udC1bNTAwXSBsZWFkaW5nLVsxNTAlXSB0cmFuc2l0aW9uLWFsbCBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAgXCI7XG4gICAgY2xhc3NlczogYW55ID0ge307XG5cbiAgICB0ZXN0U3R5bGUgPSB7fTtcblxuICAgIEBJbnB1dCgncHJvcHMnKSBwdWJsaWMgcHJvcHM6IElQcm9wcyA9IHtcbiAgICAgICAgbGVmdEljb246IFwiXCIsXG4gICAgICAgIHJpZ2h0SWNvbjogXCJcIixcbiAgICAgICAgbGVmdEljb25DbGFzczogXCJcIixcbiAgICAgICAgcmlnaHRJY29uQ2xhc3M6IFwiXCIsXG4gICAgICAgIGxhYmVsOiBcIlwiLFxuICAgIH07XG4gICAgQElucHV0KCdvcHRpb25zJykgcHVibGljIG9wdGlvbnM6IElPcHRpb25zID0ge1xuICAgICAgICB0eXBlOiBcImRlZmF1bHRcIixcbiAgICAgICAgc2l6ZTogXCJkZWZhdWx0XCIsXG4gICAgICAgIGNsYXNzOiBcIlwiLFxuICAgIH07XG4gICAgQElucHV0KCdzdGF0ZScpIHB1YmxpYyBzdGF0ZTogSVN0YXRlID0ge1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgIH07XG5cbiAgICBASW5wdXQoJ29uQ2xpY2snKSBwdWJsaWMgb25DbGljazogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJwcmltYXJ5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLmRpc3BsYXkgPSBgIGJnLVsjMDgxQTQ2XSBob3ZlcjpiZy1bIzJEMzU2Nl0gY3Vyc29yLXBvaW50ZXIgdGV4dC1bI2ZmZl0gYDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJvdXRsaW5lXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLmRpc3BsYXkgPSBgIGJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLVsjMkQzNTY2XSBib3JkZXIgY3Vyc29yLXBvaW50ZXIgYm9yZGVyLVsjMDgxQTQ2XSB0ZXh0LVsjMDgxQTQ2XSBob3Zlcjp0ZXh0LVsjZmZmXSBgO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFsdGVybmF0ZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5kaXNwbGF5ID0gYCBiZy1bI0VERUVGRl0gaG92ZXI6YmctWyM5NTk3RDFdIGN1cnNvci1wb2ludGVyIHRleHQtWyMwODFBNDZdIGA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZGlzYWJsZWRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMuZGlzcGxheSA9IGAgYmctWyNFNUU3RUJdIGhvdmVyOmJnLVsjRDJENkRDXSBjdXJzb3ItcG9pbnRlciB0ZXh0LVsjNkI3MjgwXSBgO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInN1Y2Nlc3NcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMuZGlzcGxheSA9IGAgYmctWyMwNTdBNTVdIGhvdmVyOmJnLVsjMDM1NDNGXSBjdXJzb3ItcG9pbnRlciB0ZXh0LVsjZmZmXSBgO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRhbmdlclwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5kaXNwbGF5ID0gYCBiZy1bI0RDMjYyNl0gaG92ZXI6YmctWyM5QjFDMUNdIGN1cnNvci1wb2ludGVyIHRleHQtWyNmZmZdIGA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5kaXNwbGF5ID0gYCBiZy10cmFuc2FwYXJlbnQgdGV4dC1bIzU3NTNDOV0gaG92ZXI6dW5kZXJsaW5lIGN1cnNvci1wb2ludGVyIGA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuc2l6ZSkge1xuICAgICAgICAgICAgY2FzZSBcImV4dHJhLXNtYWxsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLnNpemUgPSBgIGgtWzI0cHhdYDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzbWFsbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5zaXplID0gYCBoLVsyNHB4XWA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzLnNpemUgPSBgIGgtWzQxcHhdYDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsYXJnZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5zaXplID0gYCBoLVs0OHB4XWA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZXh0cmEtbGFyZ2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMuc2l6ZSA9IGAgaC1bNTJweF1gO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzZXMuc2l6ZSA9IGAgaC1bNDFweF1gO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbGFzc25hbWUgPVxuICAgICAgICAgICAgdGhpcy5jbGFzc25hbWUgK1xuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgdGhpcy5jbGFzc2VzLmRpc3BsYXkgK1xuICAgICAgICAgICAgdGhpcy5jbGFzc2VzLnNpemUgK1xuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNsYXNzO1xuICAgIH1cbn1cbiJdfQ==