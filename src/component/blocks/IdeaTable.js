import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getThemeIdeasPage } from "../../data/entities";
import { stringCut } from "../services/helpers";
import Image from "./Image";
import Vote from "./Vote";

export default function IdeasTable(props) {
    const ideas = getThemeIdeasPage(props.themeId, 0);
    
    return <table className="table ideas">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Название / Описание</th>
                        <th>Рейтинг</th>
                    </tr>
                </thead>
                <tbody>
                    {(ideas.length  == 0) ?
                      <h1 className="message">Ещё не предложено ни одной идеи</h1> :
                    ideas.map((idea, i) => 
                        <tr key={idea.ideaId}>
                            <td className="col-num">
                                <Link to ={`idea/${idea.ideaId}`} />{i+1}
                            </td>
                            <td className="col-img">
                                <Image src={`/img/${idea.mainPhoto}`}/>
                            </td>
                            <td className="col-text">
                                <h3 className="title">{stringCut(idea.title, 30)}</h3>
                                <p className="description">{stringCut(idea.description, 63)}</p>
                            </td>
                            <td className="col-actions">
                                <Vote likes={idea.likes}/>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
}