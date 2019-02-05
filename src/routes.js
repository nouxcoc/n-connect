import { LoginPage } from './LoginPage';
import { DashBoardComponent } from './_components/Dashboard/DashboardComponent';
import { QuestionsComponent } from './_components/Questions/QuestionsComponent';
import { ManageQuestionPage } from './_components/Questions/ManageQuestionPage';
import Layout from './_components/Layout';
import { ProjectsComponent } from './_components/Projects/ProjectsComponent';
import { TeamComponent } from './_components/Team/TeamComponent';
import { GuestPage } from './GuestPage';
import { GuestPageAgain } from './GuestPage2/GuestPage';

const routes = [

    {
        path: "/guest",
        component: GuestPage
    },
    {
        path: "/guest-2",
        component: GuestPageAgain
    },
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/",
        component: Layout,
        routes: [
            {
                path: "/dashboard",
                component: DashBoardComponent
            },
            {
                path: "/questions",
                component: QuestionsComponent
            },
            {
                path: "/question/:id?",
                component: ManageQuestionPage
            },
            {
                path: "/projects",
                component: ProjectsComponent
            },
            {
                path: "/team",
                component: TeamComponent
            },
        ]
    }
];

export default routes;