import { Link } from "react-router-dom";
import PopularThemes from "../blocks/PopularThemes";
import ThemeTable from "../blocks/ThemeTable";
import Button from "../controls/Button";
import ButtonLink from "../controls/ButtonLink";
import Dropdown from "../controls/Dropdown";
import Form from "../controls/Form";
import FormGroup from "../controls/FormGroup";

export default function Themes(props) {
    
    return  <main>
                <div className="container">
                    <section className="separate popular-themes">
                        <h1 className="section-title">Популярные направения</h1>
                        <PopularThemes/>
                    </section>
                    <section className="separate themes">
                        <Form className="search-bar">
                            <FormGroup>
                                <Dropdown name = "drop" title="Фаза"
                                        options={
                                            [
                                                { value: "1", label: "Предложение" },
                                                { value: "2", label: "Оценивание" },
                                            ]
                                        } 
                                        />
                            </FormGroup>
                            <div className="bar">
                                <input placeholder="Найти ..."/>
                            </div>
                            <Button variant = "outline">Найти</Button>
                        </Form>

                        <div className="table-top">
                            <h1 className="section-title">Тематики</h1>
                            <ButtonLink link ="new"><span className="material-icons">add</span>Создать</ButtonLink>
                        </div>

                        <ThemeTable />

                        <div className="paging">
                            <ul>
                                <li className="page-btn">&lt;</li>
                                <li className="page-btn">2</li>
                                <li className="page-btn active">3</li>
                                <li className="page-btn">4</li>
                                <li className="page-btn">&gt;</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
}