import { Routes } from '@angular/router'
import { HomeComponent } from '../components/home/home.component'

// NOTE: Use loadChildren() for lazy loading child components that are a "sub" group of the route.

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'blog',
        loadComponent: () =>
            import('../components/blog/blog.component').then(
                (m) => m.BlogComponent
            ),
    },
    {
        path: 'blog/:postId',
        loadComponent: () => import('../components/blog/blog.component').then(
            (m) => m.BlogComponent
        )
    },
    {
        path:'demos',
        loadComponent: () => import('../components/demos/demo/demo.component').then(
            (m) => m.DemoComponent
        )
    },
    {
        path: 'portfolio',
        loadComponent: () => import('../components/portfolio/portfolio.component').then(
            (m) => m.PortfolioComponent
        )
    },
    {
        path: 'contact',
        loadComponent: () => import('../components/contact/contact.component').then(
            (m) => m.ContactComponent
        )
    },
    {
        path: '**',
        loadComponent: () => import('../components/page-not-found/page-not-found.component').then(
            (m) => m.PageNotFoundComponent
        )
    }
]
