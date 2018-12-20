import { LoginPage } from './LoginPage';
import { DashBoardComponent } from './_components/Dashboard/DashboardComponent';
import { QuestionsComponent } from './_components/Questions/QuestionsComponent';
import { ManageQuestionPage } from './_components/Questions/ManageQuestionPage';
import Layout from './_components/Layout';
import { ProjectsComponent } from './_components/Projects/ProjectsComponent';
import { TeamComponent } from './_components/Team/TeamComponent';

const routes = [

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