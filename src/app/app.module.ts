import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LaddaModule } from "angular2-ladda";
import { SudButtonModule } from "sud-button";
import { MyBtnTestModule } from "my-btn-test";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, LaddaModule, SudButtonModule, MyBtnTestModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
