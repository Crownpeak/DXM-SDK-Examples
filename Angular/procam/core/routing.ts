import {Routes} from "@angular/router";
import {HomePage} from "../pages/homePage";
import {BlogPage} from "../pages/blogPage";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

export class Routing {
    static routes: Routes = [];

    static Load(routeFile, coreModule)
    {
        const componentRegistry = {
            HomePage,
            BlogPage
        };

        fetch(routeFile)
            .then(res => res.json())
            .then((routeData) => {
                Object.keys(routeData).forEach(function(key) {
                    const route = {
                        path: routeData[key].path,
                        component: componentRegistry[routeData[key].component],
                        data: {
                            cmsassetid: routeData[key].data.cmsassetid
                        }
                    };
                    Routing.routes.push(route);
                });
                platformBrowserDynamic().bootstrapModule(coreModule)
                    .catch(err => console.error(err));
            })
            .catch(console.log);
    }
}
