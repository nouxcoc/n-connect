import { LoginPage } from './LoginPage';
import { DashBoard } from './_components/dashboard/Dashboard';
import { QuestionsPage } from './_components/Questions/QuestionsPage';
import { ManageQuestionPage } from './_components/Questions/ManageQuestionPage';
import Layout from './_components/Layout';

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
                path: "/",
                component: DashBoard
            },
            {
                path: "/dashboard",
                component: DashBoard
            },
            {
                path: "/questions",
                component: QuestionsPage
            },
            {
                path: "/question/:id?",
                component: ManageQuestionPage
            }
        ]
    }
];

export default routes;