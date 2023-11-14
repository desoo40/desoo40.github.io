import "./YandexPracticumPage.css"

function YandexPracticumPage() {
  return <>
    <header className="header">  
      <div className="overlay">
        <h1 className="header-title">Четыре правила вёрстки</h1>
      </div>      
    </header>
    <section className="content">
      <div className="card">
        <img className="card-image"
        src="https://code.s3.yandex.net/web-code/images/freetrack/04/card-1.jpg"
        alt="Неоновые лампочки в виде символов светятся красным" />        
        <h3 className="card-title">Пустота</h3>
        <p className="card-text">Простое правило, которое часто нарушают: ставить рядом элементы с похожим смыслом и окружать их пустым пространством. Пустота — мощное средство воздействия.</p>        
      </div>
      <div className="card no-right-margin">
        <img className="card-image"
        src="https://code.s3.yandex.net/web-code/images/freetrack/04/card-2.jpg"
        alt="Разметка тенисного корта крупным планом" />        
        <h3 className="card-title">Сетка</h3>
        <p className="card-text">Размеры элементов и расстояния между ними укладываются в гармоничную схему — её называют сеткой. Если элемент выпадает, зритель может это заметить.</p>        
      </div>
      <div className="card">
        <img className="card-image"
        src="https://code.s3.yandex.net/web-code/images/freetrack/04/card-3.jpg"
        />        
        <h3 className="card-title">Шрифты</h3>
        <p className="card-text">Не больше трёх шрифтов на сайт. Один для заголовков, второй — для всех остальных текстов, третий — для выделения важных слов. Должно хватить.</p>        
      </div>
      <div className="card no-right-margin">
        <img className="card-image"
        src="https://code.s3.yandex.net/web-code/images/freetrack/04/card-4.jpg"
        />        
        <h3 className="card-title">Цвета</h3>
        <p className="card-text">Обычно на сайте два цвета: ведущий и акцентный. Подобрать удачную цветовую пару можно за счёт насмотренности или специальных инструментов.</p>        
      </div>      
    </section>
    <footer className="footer">
      <h4 className="footer-author">Я х Практикум</h4>
    </footer>
  </>
}

export default YandexPracticumPage;