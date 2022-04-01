import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getThemes } from "../../data/entities";
import { stringCut } from "../services/helpers";
import Image from "../blocks/Image";

export default function ThemeTable(props) {
    const themes = getThemes();
    
    return <table className="table themes">
                <thead>
                    <tr>
                        <th>Название / Описание</th>
                        <th>Фаза</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {themes.map((theme) => 
                        <tr key={theme.themeId}>
                            <td className="col-img">
                                <Link to ={`${theme.themeId}`} /><Image src={`/img/${theme.mainPhoto}`}/>
                            </td>
                            <td className="col-text">
                                <h3 className="title">{stringCut(theme.title, 30)}</h3>
                                <p className="description">{stringCut(theme.description, 63)}</p>
                            </td>
                            <td className="col-phase">{theme.isVote ? 'Голосование' : 'Приём заявок'}</td>
                            <td className="col-status">{theme.isFinished ? 'Завершено' : 
                                                        !theme.isMultiStage ? 'Активно' :
                                                        'Находится на этапе '+theme.activeStage}</td>
                        </tr>
                    )}
                </tbody>
            </table>
}