import { Component, Input, OnInit } from '@angular/core';
import { IOptions, IProps, IState } from './bnt-config';

@Component({
  selector: 'tek-test-btn',
  template: `
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
    `,
  styles: [
  ]
})
export class NewBtnComponent implements OnInit {
  classname =
      "rounded-[5px] gap-[4px] px-[12px] flex items-center justify-center text-[12px] font-[500] leading-[150%] transition-all ease-in-out duration-300 ";
  classes: any = {};

  testStyle = {};

  @Input('props') public props: IProps = {
      leftIcon: "",
      rightIcon: "",
      leftIconClass: "",
      rightIconClass: "",
      label: "",
  };
  @Input('options') public options: IOptions = {
      type: "default",
      size: "default",
      class: "",
  };
  @Input('state') public state: IState = {
      loading: false,
      active: true,
  };

  @Input('onClick') public onClick: () => void = () => {};

  ngOnInit(): void {
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
