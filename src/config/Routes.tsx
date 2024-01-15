import { ReactElement, lazy, LazyExoticComponent } from 'react';
import Auth from '../Pages/Auth/Page';
import Page from '../Pages/Home/Page';

const Page404 = lazy(() => import('../Layout/Ui/NotFoundPage'));

interface Route {
  path: string;
  header: string;
  element: ReactElement | LazyExoticComponent<any>;
  withLayout?: boolean;
}

export const routes: Route[] = [
  { path: "*", header: "Error Page", element: <Page404 /> },
  { path: "/auth", header: "Sign In", element: <Auth /> },
  { path: "/", header: "Home Page", element: <Page />, withLayout: true }
];

export const AppRoutes: Record<string, string> = Object.fromEntries(
  routes.map((route) => [route.path, route.header])
);
