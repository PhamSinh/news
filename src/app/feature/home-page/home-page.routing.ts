import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';


export const homePageRoute: Routes = [
    { path: '', component: HomePageComponent },
    //   {
    //     path: '',
    //     component: UserInfoComponent,
    //     children: [
    //       { path: 'program', component: PersonalProgramComponent },
    //       { path: 'course-fee', component: PriceListComponent },
    //       { path: 'chat', component: ChatingComponent },
    //       { path: 'contract-toolkit', component: ContractToolkitComponent },
    //     ],
    //   },
    //   { path: 'payment', component: ProgramPaymentComponent },
    //   { path: 'my-page', component: MyPageComponent },
    //   { path: 'evaluation', component: EvaluationDemoComponent },
    //   { path: 'project-name', component: ProjectNameComponent },
    //   { path: 'notice', component: NotificationComponent },
];
