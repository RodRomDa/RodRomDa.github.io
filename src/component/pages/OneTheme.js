import DateIntervals from "../blocks/DateIntervals";
import ButtonLink from "../controls/ButtonLink";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import IdeasTable from "../blocks/IdeaTable";
import { Link, useParams } from "react-router-dom";
import { getTheme, getThemeIdeasPage, getUser } from "../../data/entities";
import Image from "../blocks/Image";

export default function OneTheme(props) {
    const params = useParams();
    const theme = getTheme(params.themeId);
    const author = getUser(theme.authorId);

    const daysSuggest = theme.stages[theme.activeStage].suggestDays;
    const daysVote = theme.stages[theme.activeStage].voteDays;
    const finishDate = Date.parseDate(theme?.stageDate).addDays(daysSuggest+daysVote).toDateFormat();
    
    return  <main>
                <div className="container">
                    <DateIntervals date={theme.stageDate} stage={theme.activeStage+1} daysSuggest = {daysSuggest} daysVote = {daysVote}/>
                    <section className="content-header theme">
                        <div className="content-left">
                            <div className="author">
                                <Image src = {`/img/${author.avatar}`}/> {author.name}
                            </div>
                            <div className="phase">
                                Находится в фазе: <span>{theme.isVote ? 'Голосования' : 'Предложения'}</span>
                            </div>
                        </div>
                        <div className="content-right">
                            <div className="date">
                                Предложение идей до: <span>{finishDate}</span>
                            </div>
                            <ButtonLink link ="idea/new"><span className="material-icons">add</span>Предложить</ButtonLink>
                        </div>
                    </section>
                    <div className="content-body theme">
                        <div className="pad-container">
                            <section className="theme description">
                                <h1 className="content-title">{theme.title}</h1>
                                <p>{theme.description}</p>
                            </section>
                            <section className="theme iters">
                                <ol className="stages">
                                    {theme.stages.map((stage, i) =>
                                    <li key = {i} className={"stage " + (i === theme.activeStage ? "active" : "")}>
                                        <h2>{stage.title}</h2>
                                        <p>{stage.description}</p>
                                    </li>)}
                                </ol>
                            </section>
                            {(theme.photos.length != 0)&&<section className="theme photos">
                                <h1 className="content-title">Фото к проблеме</h1>
                                <div className="gallery">
                                    <OwlCarousel className="owl-theme" margin={57} dots autoWidth>
                                        {theme.photos.map((photo, i) => 
                                            <div key = {i} href={`/img/${photo}`} className="item"><Image src={`/img/${photo}`} /></div> 
                                        )}
                                    </OwlCarousel>
                                </div>
                            </section>}
                        </div>
                        <section className="theme ideas">
                            <div className="table-top">
                                <h1 className="section-title">Предложенные идеи</h1>
                                <ButtonLink link ="idea/new"><span className="material-icons">add</span>Предложить</ButtonLink>
                            </div>

                            <IdeasTable themeId = {theme.themeId}/>

                            {getThemeIdeasPage(theme.themeId, 0).length != 0 &&
                            <div className="paging">
                                <ul>
                                    <li className="page-btn">&lt;</li>
                                    <li className="page-btn">2</li>
                                    <li className="page-btn active">3</li>
                                    <li className="page-btn">4</li>
                                    <li className="page-btn">&gt;</li>
                                </ul>
                            </div>}
                        </section>
                    </div>
                </div>
            </main>
}