import { NgModule } from '@angular/core';
import { LaddaDirective } from './ladda.directive';
import { LaddaConfig } from './ladda-config';
import * as i0 from "@angular/core";
export class LaddaModule {
    static forRoot(config) {
        return {
            ngModule: LaddaModule,
            providers: [
                { provide: LaddaConfig, useValue: config },
            ],
        };
    }
}
LaddaModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: LaddaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LaddaModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: LaddaModule, declarations: [LaddaDirective], exports: [LaddaDirective] });
LaddaModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: LaddaModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: LaddaModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [LaddaDirective],
                    exports: [LaddaDirective],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFkZGEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbGFkZGEvc3JjL2xpYi9sYWRkYS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBa0IsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0FBTTVELE1BQU0sT0FBTyxXQUFXO0lBQ2IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUF1QjtRQUN6QyxPQUFPO1lBQ0gsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNQLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO2FBQzNDO1NBQ0osQ0FBQztJQUNOLENBQUM7O3dHQVJRLFdBQVc7eUdBQVgsV0FBVyxpQkFITCxjQUFjLGFBQ25CLGNBQWM7eUdBRWYsV0FBVzsyRkFBWCxXQUFXO2tCQUp2QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDOUIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2lCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMYWRkYURpcmVjdGl2ZX0gZnJvbSAnLi9sYWRkYS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtMYWRkYUNvbmZpZ0FyZ3MsIExhZGRhQ29uZmlnfSBmcm9tICcuL2xhZGRhLWNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbTGFkZGFEaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtMYWRkYURpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIExhZGRhTW9kdWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnOiBMYWRkYUNvbmZpZ0FyZ3MpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPExhZGRhTW9kdWxlPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogTGFkZGFNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7cHJvdmlkZTogTGFkZGFDb25maWcsIHVzZVZhbHVlOiBjb25maWd9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=