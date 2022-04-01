import ThemeForm from "../forms/ThemeForm";

export default function NewTheme(props) {
    
    return  <main>
                <div className="container">
                    <div className="content-body form idea">
                        <h1 className="form-title">Создание тематики</h1>
                        <ThemeForm />
                    </div>
                </div>
            </main>
}