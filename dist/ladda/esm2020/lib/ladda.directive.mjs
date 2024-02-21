import { isPlatformBrowser } from '@angular/common';
import { Directive, Input, Optional, Inject, PLATFORM_ID } from '@angular/core';
import { create as createLadda } from 'ladda';
import { LaddaConfig } from './ladda-config';
import * as i0 from "@angular/core";
import * as i1 from "./ladda-config";
export class LaddaDirective {
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
        this.ladda = createLadda(this.el);
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
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.LaddaConfigArgs, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFkZGEuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbGFkZGEvc3JjL2xpYi9sYWRkYS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBYyxLQUFLLEVBQStDLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZJLE9BQU8sRUFBQyxNQUFNLElBQUksV0FBVyxFQUFjLE1BQU0sT0FBTyxDQUFDO0FBQ3pELE9BQU8sRUFBQyxXQUFXLEVBQWtCLE1BQU0sZ0JBQWdCLENBQUM7OztBQU81RCxNQUFNLE9BQU8sY0FBYztJQU92QixZQUNJLEVBQWMsRUFDbUIsTUFBdUIsRUFDM0IsVUFBa0I7UUFBbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQVIzQyxVQUFLLEdBQTRCLFNBQVMsQ0FBQztRQUcxQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBT3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUUzQixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1QsT0FBTztTQUNWO1FBRUQsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDckQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwRDtRQUVELElBQUksTUFBTSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDbEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLFdBQVcs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QUFPO3NCQUF0QixLQUFLO3VCQUFDLE9BQU87Z0JBQ0wsUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE9wdGlvbmFsLCBJbmplY3QsIFBMQVRGT1JNX0lEfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y3JlYXRlIGFzIGNyZWF0ZUxhZGRhLCBMYWRkYUJ1dHRvbn0gZnJvbSAnbGFkZGEnO1xuaW1wb3J0IHtMYWRkYUNvbmZpZywgTGFkZGFDb25maWdBcmdzfSBmcm9tICcuL2xhZGRhLWNvbmZpZyc7XG5cbmV4cG9ydCB0eXBlIExhZGRhVmFsdWUgPSBib29sZWFuIHwgbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbGFkZGFdJyxcbn0pXG5leHBvcnQgY2xhc3MgTGFkZGFEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgICBwcml2YXRlIGVsOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBwcml2YXRlIGxhZGRhOiBMYWRkYUJ1dHRvbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgnbGFkZGEnKSBsb2FkaW5nOiBMYWRkYVZhbHVlO1xuICAgIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBJbmplY3QoTGFkZGFDb25maWcpIEBPcHRpb25hbCgpIGNvbmZpZzogTGFkZGFDb25maWdBcmdzLFxuICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICApIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCFjb25maWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcuc3R5bGUgJiYgIXRoaXMuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN0eWxlJykpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdkYXRhLXN0eWxlJywgY29uZmlnLnN0eWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcuc3Bpbm5lclNpemUgJiYgIXRoaXMuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNwaW5uZXItc2l6ZScpKSB7XG4gICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zcGlubmVyLXNpemUnLCBjb25maWcuc3Bpbm5lclNpemUudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLnNwaW5uZXJDb2xvciAmJiAhdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3Bpbm5lci1jb2xvcicpKSB7XG4gICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zcGlubmVyLWNvbG9yJywgY29uZmlnLnNwaW5uZXJDb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLnNwaW5uZXJMaW5lcyAmJiAhdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3Bpbm5lci1saW5lcycpKSB7XG4gICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zcGlubmVyLWxpbmVzJywgY29uZmlnLnNwaW5uZXJMaW5lcy50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxhZGRhKSB7XG4gICAgICAgICAgICByZXR1cm47IC8vIG5lZWRlZCBzaW5jZSBuZ09uQ2hhbmdlcyBpcyBjYWxsZWQgYmVmb3JlIG5nT25Jbml0XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxhZGRhKGNoYW5nZXMubG9hZGluZy5wcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURpc2FibGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhZGRhID0gY3JlYXRlTGFkZGEodGhpcy5lbCk7XG5cbiAgICAgICAgLy8gaWYgdGhlIGluaXRpYWwgbG9hZGluZyB2YWx1ZSBpc24ndCBmYWxzZSwgYSB0aW1lb3V0IG9mIDAgbXNcbiAgICAgICAgLy8gaXMgbmVjZXNzYXJ5IGZvciB0aGUgY2FsY3VsYXRlZCBzcGlubmVyIHNpemUgdG8gYmUgY29ycmVjdC5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7dGhpcy51cGRhdGVMYWRkYShmYWxzZSk7fSwgMCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmxhZGRhKSB7XG4gICAgICAgICAgICB0aGlzLmxhZGRhLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVMYWRkYShwcmV2aW91c1ZhbHVlOiBMYWRkYVZhbHVlKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5sYWRkYSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxvYWRpbmc6IGJvb2xlYW4gPSB0eXBlb2YgdGhpcy5sb2FkaW5nID09PSAnbnVtYmVyJyB8fCAhIXRoaXMubG9hZGluZztcbiAgICAgICAgbGV0IHdhc0xvYWRpbmc6IGJvb2xlYW4gPSB0eXBlb2YgcHJldmlvdXNWYWx1ZSA9PT0gJ251bWJlcicgfHwgISFwcmV2aW91c1ZhbHVlO1xuXG4gICAgICAgIGlmICghbG9hZGluZykge1xuICAgICAgICAgICAgaWYgKHdhc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhZGRhLnN0b3AoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlRGlzYWJsZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghd2FzTG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5sYWRkYS5zdGFydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmxvYWRpbmcgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLmxhZGRhLnNldFByb2dyZXNzKHRoaXMubG9hZGluZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZURpc2FibGVkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcbiAgICB9XG59XG4iXX0=