
import './style.css'
import back from '../../assets/bg.jpg'
import dor from '../../assets/dor.png'

function Brand() {
    return (

        <>



            <div className="box1">

                <div className="texts">
                    <p className='text1'>О НАШЕМ БРЕНДЕ</p>

                    <p className='text2'>TRUE - СОВЕРШЕННОE ФИТНЕС-ОБОРУДОВАНИЕ</p>

                </div>

            </div>





            <div className="hero">
                <div className="content">
                    <p className="blue-text">
                        Это совершенство обеспечивается высококачественными, долговечными материалами и технологиями, которые мы используем для производстве наших машин. Но оно также создается и благодаря нашей преданности клиентам и их потребностям.
                    </p>

                    <div className="main-text">
                        <p>
                            Наша опытная команда предлагает комплексное обслуживание, начиная от планирования объекта до технического обслуживания и оснащения ваших залов новейшими технологиями. Являясь вашим надежным партнером, мы делаем все возможное, чтобы ваше предприятие продолжало эффективно работать годы и годы.
                        </p>
                        <p>
                            Вы можете рассчитывать на нас в предоставлении одних из лучших услуг в отрасли. Мы ориентированы на оптимизацию срока службы вашего фитнес-оборудования. Мы всегда ищем способы расширить сферу взаимодействия с нашими клиентами, будь то предоставление учебных материалов для ваших сотрудников и инструкторов, или разработка технологических решений, отвечающих потребностям современных пользователей.
                        </p>
                    </div>

                    <p className="footer-link">
                        Свяжитесь с нами, чтобы узнать, как партнерство с TRUE может помочь вашей компании добиться успеха.
                    </p>
                </div>
            </div>





            <div className="sec3">



<div className="company-wrapper">
    <div className="top-blocks">
        <div className="founder-card">
            <img src="https://truefitness.com/wp-content/uploads/2024/08/Our-Story-HERO-Mobile.jpg" alt="Frank Trulaske" className="founder-img" />
            <div className="founder-label">
                <div className="yellow-dash-sm"></div>
                <h3>FRANK TRULASKE,</h3>
                <p>основатель и президент TRUE Fitness</p>
            </div>
        </div>

        <div className="info-blue-card">
            <h2>О компании TRUE</h2>
            <div className="yellow-dash-lg"></div>
            <p>
                На протяжении всего времени своего существования TRUE придерживается 
                главных принципов: высокого качество продукции и обеспечение 
                первоклассного сервиса, это позволяет бренду удерживать лидирующие 
                позиции и выстраивать с покупателями долгосрочные и доверительные отношения.
            </p>
        </div>
    </div>

    <div className="history-content">
        <h4 className="section-subtitle">ЭТАПЫ РАЗВИТИЯ КОМПАНИИ TRUE FITNESS</h4>
        <h2 className="section-title">ИСТОРИЯ РАЗВИТИЯ, ИСТОРИЯ ВНЕДРЕНИЯ ИННОВАЦИЙ</h2>
        <div className="blue-dash-md"></div>

        <div className="description-text">
            <p>
                С момента своего основания в 1981 году компания true основывалась на двух 
                основных руководящих принципах: создавать продукты высочайшего качества 
                и поддерживать их превосходным обслуживанием. С годами фитнес-индустрия 
                изменилась, появились новые рынки и изменились потребности наших клиентов, 
                но эти принципы остаются неизменными, и мы неустанно продолжаем следить за 
                актуальностью наших технологий.
            </p>
            <p>
                В соответствии с нашими ценностями true всегда стремилась оборудовать 
                наши тренажеры новейшими технологиями и функциями безопасности. мы с 
                самого начала предоставляли нашим клиентам самые лучшие возможности 
                для тренировок, обеспечивая при этом им уверенность в безопасности. Вот 
                некоторые из революционных достижений, которых мы добились в отрасли 
                за нашу более чем 45-летнюю историю.
            </p>
        </div>
    </div>
</div>





<div className="product-showcase">
    {/* Chap tarafdagi rasm va logo qismi */}
    <div className="product-visual">
        <img src={dor} alt="First Treadmill" className="product-img" />
    </div>

    {/* O'ng tarafdagi matn qismi */}
    <div className="product-details">
        <h2 className="cyan-title">
            TRUE SPORTS <br />
            РАЗРАБАТЫВАЕТ СВОЮ <br />
            ПЕРВУЮ БЕГОВУЮ <br />
            ДОРОЖКУ
        </h2>
        <p className="description">
            Компания true sports основанная frank trulaske в 1981 году, 
            разрабатывает свою первую беговую дорожку, являясь одним из 
            пионеров в создании беговых дорожек в мире. примененные 
            технологии повлияли на развитии фитнес индустрии.
        </p>
    </div>
</div>










<div className="innovations-section">
  <h2 className="section-main-title">НАШИ ИННОВАЦИИ</h2>

  <div className="innovations-grid">
    {/* 1-blok */}
    <div className="innovation-item">
      <div className="img-container">
        <img src="https://optim.tildacdn.one/tild3636-3832-4864-b133-316139386631/-/resize/824x/-/format/webp/LF_site_banners_Powe.jpg.webp" alt="Palisade" />
      </div>
      <div className="yellow-line-sm"></div>
      <p className="item-title">ТРЕНАЖЕР ЛЕСТНИЦА TRUE PALISADE</p>
    </div>

    {/* 2-blok */}
    <div className="innovation-item">
      <div className="img-container">
        <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1265193456-1-69654b4c7b22f.jpg?crop=0.66650390625xw:1xh;center,top&resize=640:*" alt="Composite" />
      </div>
      <div className="yellow-line-sm"></div>
      <p className="item-title">ФУНКЦИОНАЛЬНЫЙ ТРЕНИНГ С COMPOSITE STRENGTH</p>
    </div>

    {/* 3-blok */}
    <div className="innovation-item">
      <div className="img-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI_W58EU9aC2dKJV3NjqZlX4YVAZeyvtAH8w&s" alt="Stretch" />
      </div>
      <div className="yellow-line-sm"></div>
      <p className="item-title">РАМЫ ДЛЯ СТРЕЙТЧИНГА TRUE STRETCH</p>
    </div>

    {/* 4-blok */}
    <div className="innovation-item">
      <div className="img-container">
        <img src="https://truefitness.com/wp-content/uploads/2017/06/traverse-globe2883-f-26-jpg-1.jpg" alt="Traverse" />
      </div>
      <div className="yellow-line-sm"></div>
      <p className="item-title">ЛАТЕРАЛЬНЫЙ ТРЕНАЖЕР TRUE TRAVERSE</p>
    </div>

    {/* 5-blok */}
    <div className="innovation-item">
      <div className="img-container">
        <img src="https://truefitness.com/wp-content/uploads/2024/07/8-2.jpg" alt="Alpine" />
      </div>
      <div className="yellow-line-sm"></div>
      <p className="item-title">БЕГОВАЯ ДОРОЖКА TRUE ALPINE RUNNER</p>
    </div>

    {/* 6-blok */}
    <div className="innovation-item">
      <div className="img-container">
        <img src="https://fitnesscolor.ru/products_pictures/ellipticheskiy_trenajer_TRUE_C400_konsol_Emerge-53-B.jpg" alt="Spectrum" />
      </div>
      <div className="yellow-line-sm"></div>
      <p className="item-title">ЭЛЛИПТИЧЕСКИЙ ТРЕНАЖЕР TRUE SPECTRUM</p>
    </div>
  </div>
</div>











<div className="offer-section">
  <div className="offer-overlay">
    <div className="offer-content">
      <span className="yellow-label">TRUE FITNESS</span>
      
      <h2 className="offer-title">
        ПОЛУЧИТЕ <span className="cyan-text">ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ</span> НА ТРЕНАЖЕРЫ <span className="cyan-text">TRUE FITNESS</span>
      </h2>
      
      <p className="offer-subtitle">
        МЫ БУДЕМ РАДЫ ПРОКОНСУЛЬТИРОВАТЬ ВАС И ПОМОЧЬ С ПОДБОРОМ ОБОРУДОВАНИЯ
      </p>

      <form className="offer-form">
        <input type="text" placeholder="ИМЯ" className="form-input" />
        <div className="phone-input-wrapper">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEZc0KMJVFecicNTyhK9GoGCH4fWSMjo5dA&s" alt="uzb" className="flag-icon" />
           <input type="tel" placeholder="+998 (99)-999-99-99" className="form-input" />
        </div>
        <input type="email" placeholder="E-MAIL" className="form-input" />
        <button type="submit" className="submit-btn">ОТПРАВИТЬ</button>
      </form>

      <p className="privacy-policy">
        «НАЖИМАЯ НА КНОПКУ, ВЫ ДАЕТЕ СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ И 
        СОГЛАШАЕТЕСЬ С ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ»
      </p>
    </div>
  </div>
</div>


















            </div>




        </>


    );
}

export default Brand;