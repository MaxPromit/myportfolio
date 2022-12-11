import { createBrowserRouter } from "react-router-dom";
import FoodGalley from "../../Component/FoodGallery/FoodGalley";
import ProductDetails from "../../Component/ProductDetails/ProductDetails";
import QuizMaster from "../../Component/QuizMaster/QuizMaster";
import ResaleBike from "../../Component/ResaleBike/ResaleBike";
import Main from "../../Layout/Main";
import Contact from "../../Pages/Home/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Projects from "../../Pages/Home/Projects/Projects";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/resale-bike',
                element: <ResaleBike></ResaleBike>
            },
            {
                path: '/food-gallery',
                element: <FoodGalley></FoodGalley>
            },
            {
                path: '/quiz-master',
                element: <QuizMaster></QuizMaster>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            // {
            //     path: '/contact',
            //     element: <Contact></Contact>
            // }
        ]
    }
])