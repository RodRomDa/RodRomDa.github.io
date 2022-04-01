import React, { useState } from "react";

export default function DateIntervals(props) {
    const percent = (props.daysSuggest/(props.daysSuggest + props.daysVote))*100;
    const date = Date.parseDate(props.date);

    return <section className="date-intervals">
                <div className="messages">
                    <div className="message" style={{"--position": 0+"%"}}>
                        <span className="stage">{props.stage}</span>
                        <span className="blob">{date.toDateFormat()}</span>
                    </div>
                    <span className="material-icons" style={{"--position":percent/2+"%"}}>
                        assignment
                    </span>
                    <div className="message" style={{"--position":percent+"%"}}>
                        <span className="blob">{date.addDays(props.daysSuggest).toDateFormat()}</span>
                    </div>
                    <span className="material-icons alt" style={{"--position":(percent+100)/2+"%"}}>
                        check_circle
                    </span>
                    <div className="message" style={{"--position":100+"%"}}>
                        <span className="stage">{props.stage+1}</span>
                        <span className="blob">{date.addDays(props.daysSuggest + props.daysVote).toDateFormat()}</span>
                    </div>
                </div>
                <div className="indicators">
                    <div className="indicator" style={{"--position":percent+"%"}}></div>
                </div>
            </section>
}