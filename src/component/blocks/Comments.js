import React, { useState } from "react";
import Image from "../blocks/Image";
import { getIdea, getUser } from "../../data/entities";

export default function Comments(props) {
    const comments = getIdea(props.ideaId).comments;

    return <ul className="comments">
                {comments.map((comment, i) => {
                 const author = getUser(comment.authorId);
                 return <li key={i} className="comment">
                            <div className="comment-head">
                                <div className="author">
                                    <Image src = {`/img/${author.avatar}`} />
                                    <div className="person">
                                        <h3 className="name">{author.name}</h3>
                                        <p className="job">{author.job}</p>
                                    </div>
                                </div>
                                <div className="date">
                                    {comment.date}
                                </div>
                            </div>
                            <div className="comment-body">
                                <p>{comment.text}</p>
                            </div>
                        </li>
                })}
                
            </ul>
}