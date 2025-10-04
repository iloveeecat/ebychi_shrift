function About() {
  return (
    <>
      <section className="bg-purple-200 py-16 text-center">
        <h1 className="text-4xl font-bold text-purple-800 mb-4">О нас</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Мы — магазин-приют для животных, где каждая покупка помогает нашим пушистым друзьям найти дом 🐶🐱
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="/about-shelter.jpg"
            alt="Наш приют"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Наша история</h2>
          <p className="mb-4 leading-relaxed">
            PetShop начался с маленькой инициативы в 2015 году — помочь бездомным животным найти свой дом.
            Со временем мы выросли в полноценный магазин-приют: продаём корма, игрушки и аксессуары, а часть средств
            идёт на содержание животных и организацию мероприятий по их пристройству.
          </p>
          <p className="leading-relaxed">
            Сегодня мы помогаем сотням питомцев каждый год и создаём сообщество людей, которым не всё равно 🫶
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-purple-800 text-center mb-10">Наши ценности</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-purple-100 rounded-2xl shadow">
              <img src="/icons/heart.svg" alt="Забота" className="mx-auto mb-4 w-12" />
              <h3 className="text-xl font-bold mb-2">Забота</h3>
              <p>Каждое животное заслуживает любви и внимания. Мы поддерживаем их на пути к новому дому.</p>
            </div>
            <div className="text-center p-6 bg-purple-100 rounded-2xl shadow">
              <img src="/icons/community.svg" alt="Сообщество" className="mx-auto mb-4 w-12" />
              <h3 className="text-xl font-bold mb-2">Сообщество</h3>
              <p>Мы объединяем людей, которым небезразлична судьба животных, и вместе создаём добро.</p>
            </div>
            <div className="text-center p-6 bg-purple-100 rounded-2xl shadow">
              <img src="/icons/paw.svg" alt="Ответственность" className="mx-auto mb-4 w-12" />
              <h3 className="text-xl font-bold mb-2">Ответственность</h3>
              <p>Часть прибыли идёт на содержание приюта, медицинскую помощь и просветительские программы.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-purple-800 text-center mb-10">Наша команда</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="/team/person1.jpg"
              alt="Сотрудник"
              className="w-32 h-32 rounded-full mx-auto mb-3 object-cover"
            />
            <h3 className="font-bold">Анна</h3>
            <p className="text-sm text-gray-600">Основательница</p>
          </div>
          <div className="text-center">
            <img
              src="/team/person2.jpg"
              alt="Сотрудник"
              className="w-32 h-32 rounded-full mx-auto mb-3 object-cover"
            />
            <h3 className="font-bold">Максим</h3>
            <p className="text-sm text-gray-600">Ветеринар</p>
          </div>
          <div className="text-center">
            <img
              src="/team/person3.jpg"
              alt="Сотрудник"
              className="w-32 h-32 rounded-full mx-auto mb-3 object-cover"
            />
            <h3 className="font-bold">Екатерина</h3>
            <p className="text-sm text-gray-600">Менеджер приюта</p>
          </div>
        </div>
      </section>

      <section className="bg-purple-200 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">Присоединяйтесь к нашей миссии</h2>
        <p className="mb-6 text-lg">
          Покупайте с добром или станьте волонтёром — вместе мы можем больше 🐾
        </p>
        <a
          href="/catalog"
          className="inline-block bg-purple-700 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-800 transition"
        >
          Перейти в каталог
        </a>
      </section>
    </>
  );
}

export default About;
