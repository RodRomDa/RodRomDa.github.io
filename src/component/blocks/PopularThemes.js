import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getPopularThemes } from "../../data/entities";
import { stringCut } from "../services/helpers";
import Image from "../blocks/Image";

export default function PopularThemes(props) {
    const themes = getPopularThemes();
    
    return <ul className="theme-cards">
                {themes.map((theme) => 
                <Link to={`${theme.themeId}`} key={theme.themeId}>
                    <li className="card">
                        <Image className="img" src={`/img/${theme.mainPhoto}`}/>
                        <div className="content">
                            <h3 className="title">{stringCut(theme.title, 30)}</h3>
                            <p className="info">{stringCut(theme.description, 61)}</p>
                        </div>
                    </li>
                </Link>
                )}
           </ul>
}