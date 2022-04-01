import React, { useState } from "react";
import { Link, matchPath, matchRoutes, useLocation, useMatch, useParams } from "react-router-dom";
import { getTheme, getIdea } from "../../data/entities";

export default function Breadcrumbs(props) {
    let path = useLocation().pathname;

    const getThemeName = (params) => {
        return getTheme(params.themeId).title
    }

    const getIdeaName = (params) => {
        return getIdea(params.ideaId).title
    }

    let routes = [
        {path: 'themes', crumb: 'Тематики'},
        {path: 'themes/new', crumb: 'Новая тематика'},
        {path: 'themes/:themeId', crumb: getThemeName},
        {path: 'themes/:themeId/idea/new', crumb: 'Новая идея'},
        {path: 'themes/:themeId/idea/:ideaId', crumb: getIdeaName},
    ];


    //Processing routes
    let crumbs = routes.map((route) => {
        return matchPath(
            {
                path: route.path,
                end: false
            }, path);
    })
    //Filter not matching routes and conflicts
    .filter((route) => !!route)
    .filter((route, i, others) => !others.some((r, j) => (j<i)&&(r.pathname == route.pathname)))
    //Processing dynamic crumbs
    .map((path, i) => {
        let crumbLabel = routes.find((r) => r.path == path.pattern.path).crumb;
        if(typeof crumbLabel === "function") {
            crumbLabel = crumbLabel(path.params);
        }

        return {
            label: crumbLabel,
            link: path.pathname
        }
    });

    
    return  <section className="breadcrumbs">
                <ul className="crumbs">
                    {crumbs.map((crumb) =>  
                    <Crumb key={crumb.link} link={crumb.link}>{crumb.label}</Crumb>)}
                </ul>
            </section>
}

export const Crumb = (props) => {
    return <li className="crumb"><Link to={props.link}>{props.children}</Link></li>    
}