
import './style.css'

function OpenClub() {
    return (
        <div className="container">
            <h2>ОТПРАВИТЬ ЗАЯВКУ</h2>

            <div className="form-group">
                <label>ВАШЕ ИМЯ</label>
                <input type="text" placeholder="Имя" />
            </div>

            <div className="form-group">
                <label>E-MAIL</label>
                <input type="email" placeholder="E-mail" />
            </div>

            <div className="form-group">
                <label>НОМЕР ТЕЛЕФОНА</label>
                <input type="text" placeholder="+998 (__) ___-__-__" />
            </div>

            <div className="form-group">
                <label>ГОРОД</label>
                <input type="text" placeholder="Город" />
            </div>

            <div className="radio-group">
                <label><b>ХОТИТЕ ОТКРЫТЬ:</b></label>
                <label><input type="radio" name="type" /> Фитнес студию</label>
                <label><input type="radio" name="type" /> Фитнес клуб</label>
                <label><input type="radio" name="type" /> Домашний спортзал</label>
                <label><input type="radio" name="type" /> Тренажерный зал</label>
                <label><input type="radio" name="type" /> Корпоративный спортзал</label>
            </div>

            <div className="radio-group">
                <label><b>ПЛАНИРУЕМЫЙ СРОК:</b></label>
                <label><input type="radio" name="time" /> До 3 месяцев</label>
                <label><input type="radio" name="time" /> 3-6 месяцев</label>
                <label><input type="radio" name="time" /> 6+ месяцев</label>
            </div>

            <div className="checkbox-group">
                <label><b>КАКИЕ УСЛУГИ ВАС ИНТЕРЕСУЮТ:</b></label>
                <label><input type="checkbox" /> Консультация</label>
                <label><input type="checkbox" /> Подбор оборудования</label>
                <label><input type="checkbox" /> Расстановка на плане</label>
                <label><input type="checkbox" /> Дизайн</label>
            </div>

            <div className="file-upload">
                <label><b>ЗАГРУЗИТЬ ПЛАН ПОМЕЩЕНИЯ</b></label><br />
                <button>ADD FILES</button>
            </div>

            <div className="form-group">
                <label>КОММЕНТАРИЙ</label>
                <textarea rows="3"></textarea>
            </div>

            <button className="submit-btn">ОТПРАВИТЬ</button>
        </div>
    );
}

export default OpenClub;