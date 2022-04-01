import IdeaForm from "../forms/IdeaFrom";

export default function NewIdea(props) {
    
    return  <main>
                <div className="container">
                    <div className="content-body form idea">
                        <h1 className="form-title">Создайте свою идею</h1>
                        <IdeaForm />
                    </div>
                </div>
            </main>
}