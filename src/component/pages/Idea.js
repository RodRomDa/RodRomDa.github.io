import Image from "../blocks/Image";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Vote from "../blocks/Vote";
import { useParams } from "react-router-dom";
import { getIdea } from "../../data/entities";
import Form from "../controls/Form";
import FormGroup from "../controls/FormGroup";
import Button from "../controls/Button";
import { TextArea } from "../controls/Input";
import Comments from "../blocks/Comments";

export default function Idea(props) {
    const params = useParams();
    const idea = getIdea(params.ideaId);
    
    return  <main>
                <div className="container">
                    <section className="content-header idea">
                            <h1>{idea.title}</h1>
                            <div className="main-content">
                                <div className="content-left">
                                    <div className="author">
                                        <Image src = {`/img/users/image1.jpg`}/> Бобров Пётр Николаевич
                                    </div>
                                    <div className="date">
                                        Предложено: <span>12.02.2021</span>
                                    </div>
                                </div>
                                <div className="content-right">
                                    <Vote likes={12} />
                                </div>
                            </div>
                            <div className="add">
                                Основывается на: <span>Улучшить освещённость в кабинете</span>
                            </div>
                    </section>
                    <div className="content-body idea">
                            <section className="idea description">
                                <h1 className="content-title">Описание</h1>
                                <p>{idea.description}</p>
                            </section>
                            {(idea.photos.length != 0)&&<section className="idea photos">
                                <h1 className="content-title">Фото к проблеме</h1>
                                <div className="gallery">
                                    <OwlCarousel className="owl-theme" margin={57} dots autoWidth>
                                        {idea.photos.map((photo, i) => 
                                            <div key = {i} href={`/img/${photo}`} className="item"><Image src={`/img/${photo}`} /></div> 
                                        )}
                                    </OwlCarousel>
                                </div>
                            </section>}
                            <section className="idea resources">
                                <h1>Прилагаемые ресурсы</h1>
                                <ul className="resource-links">
                                    <li className="link"><a href="#">Влияние освещения на работоспособность сотрудников</a></li>
                                    <li className="link"><a href="#">Освещение в офисе: считаем и делаем выводы</a></li>
                                    <li className="link"><a href="#">Расчётный план затрат на электроэнергию</a></li>
                                </ul>
                            </section>
                            <section className="idea add-comment">
                                <Form>
                                    <FormGroup>
                                        <h1>Комментарии</h1>
                                        <Button variant="solid" type="submit"><i className="far fa-paper-plane"></i>Отправить</Button>
                                    </FormGroup>
                                    <TextArea label="Ваше предложение"/>
                                </Form>
                            </section>
                    </div>
                    <section className="idea comments">
                        <Comments ideaId = {idea.ideaId}/>
                    </section>
                </div>
            </main>
}