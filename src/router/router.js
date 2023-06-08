import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard'
// import ListPage from '../modules/pokemon/pages/ListPage.vue'
// import AboutPage from '../modules/pokemon/pages/AboutPage.vue'
// import NoPageFound from '../modules/shared/pages/NoPageFound.vue'
// import PokemonPage from '../modules/pokemon/pages/PokemonPage.vue'

const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),
        children: [
            { 
                path: 'home', 
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage')
            },
            { 
                path: 'about', 
                name: 'pokemon-about',
                component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage') 
            },
            { 
                path: 'pokemonid/:id', 
                name: 'pokemon-id',
                component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
                props: ( route ) => {
                    const id = Number( route.params.id )
                    return isNaN( id ) ? { id: 1 } : { id }
                } 
            },
            {
                path: '',
                redirect: { name: 'pokemon-home' }
            }
        ]
    },
    {
        path: '/dbz',
        name: 'dbz',
        beforeEnter: [ isAuthenticatedGuard ],
        component: () => import(/* webpackChunkName: "DBZLayout" */ '@/modules/dbz/layouts/DragonBallLayout'),
        children: [
            { 
                path: 'character', 
                name: 'dbz-characters',
                component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/dbz/pages/Characters')
            },
            { 
                path: 'about', 
                name: 'dbz-about',
                component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/dbz/pages/About')
            },
            {
                path: '',
                redirect: { name: 'dbz-character' }
            }
        ]
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName: "NotFoundPage" */ '@/modules/shared/pages/NoPageFound')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

//*** Guard Global - sync */
// router.beforeEach( (to, from, next) => {
    
// })

// const canAccess = () => {
//     return new Promise( resolve => {
//         const random = Math.random() * 10

//         if ( random > 50 ) {
//             console.log('Authenticated');
//             resolve(true)
//         } else {
//             console.log('Not-Authenticated');
//             resolve(false)
//         }
//     })
// }

// router.beforeEach( async(to, from, next) => {
//     const authorized = await canAccess()

//     authorized ?
//     next()
//     :
//     next({ name: 'pokemon-home' })
// })

export default router