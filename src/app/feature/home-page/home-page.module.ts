import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { RouterModule } from '@angular/router';
import { homePageRoute } from './home-page.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(homePageRoute)
    ],
    declarations: [HomePageComponent, OurServiceComponent]
})
export class HomePageModule { }
