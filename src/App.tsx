import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#06060e]/90 backdrop-blur-md border-b border-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded border border-neon-cyan flex items-center justify-center">
              <span className="font-mono text-neon-cyan text-sm font-bold">G</span>
            </div>
            <span className="font-mono text-lg font-bold text-white tracking-wider">
              GOST<span className="text-neon-cyan">ify</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors font-mono">Услуги</a>
            <a href="#how-it-works" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors font-mono">Как работает</a>
            <a href="#calculator" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors font-mono">Калькулятор</a>
            <a href="#why-us" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors font-mono">Почему мы</a>
            <a href="#calculator" className="btn-neon text-xs py-2 px-4">Оставить заявку</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-neon-cyan">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-[#1a1a2e] mt-2 pt-4 flex flex-col gap-3">
            <a href="#services" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors font-mono">Услуги</a>
            <a href="#how-it-works" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors font-mono">Как работает</a>
            <a href="#calculator" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors font-mono">Калькулятор</a>
            <a href="#why-us" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors font-mono">Почему мы</a>
            <a href="#calculator" className="btn-neon text-xs py-2 px-4 text-center">Оставить заявку</a>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center cyber-grid scanlines pt-16">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-neon-cyan/10 rounded-full animate-float opacity-30"></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-neon-magenta/10 rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-neon-cyan rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-neon-magenta rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
      
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-1 border border-neon-cyan/30 rounded-full">
          <span className="font-mono text-xs text-neon-cyan tracking-wider">// СИСТЕМА ОФОРМЛЕНИЯ v2.0</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Твой диплом готов,</span>
          <br />
          <span className="text-white">а оформление съело</span>
          <br />
          <span className="neon-text-cyan">все нервы?</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Превращаем твои черновики и заметки в идеальные работы по ГОСТу и делаем презентации, которые впечатлят комиссию. 
          <span className="text-gray-300"> Ты пишешь смысл — мы делаем безупречную форму.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#calculator" className="btn-neon text-sm py-3 px-8">
            Рассчитать стоимость за 1 минуту
          </a>
          <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors font-mono border-b border-gray-600 hover:border-neon-cyan pb-1">
            Узнать больше →
          </a>
        </div>
        
        <p className="mt-6 text-xs text-gray-600 font-mono">
          * Не пишем работы с нуля. Помогаем оформить то, что ты сделал сам.
        </p>
      </div>
      
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px gradient-border opacity-50"></div>
    </section>
  );
}

function PainSection() {
  const pains = [
    { emoji: '😫', text: 'Методичка на 40 страниц, а шрифт Times New Roman «смотрит» не туда.' },
    { emoji: '😫', text: 'Нормоконтроль завалил работу из-за неправильных отступов в списке литературы.' },
    { emoji: '😫', text: 'Текст написан, но выглядит как «простыня», а презентация — как в 90-х.' },
    { emoji: '😫', text: 'Дедлайн завтра, а ты все еще борешься с автоматическим оглавлением в Word.' },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-neon-magenta tracking-wider">// ПРОБЛЕМА</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Знакомо?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pains.map((pain, index) => (
            <div key={index} className="card-cyber rounded-lg p-6 flex items-start gap-4">
              <span className="text-2xl flex-shrink-0">{pain.emoji}</span>
              <p className="text-gray-300 leading-relaxed">{pain.text}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl text-white font-medium">
            Хватит тратить время на рутину.
            <br />
            <span className="neon-text-cyan">Доверь форматирование профессионалам.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: '📄',
      title: 'Идеальное оформление по ГОСТу',
      description: 'Приведем твою готовую курсовую, диплом или реферат в полное соответствие с требованиями твоего вуза. Выровняем поля, настроим стили, сделаем правильные сноски и автособираемое оглавление.',
      color: 'cyan',
    },
    {
      icon: '🧩',
      title: 'Структурирование из черновиков',
      description: 'У тебя есть разрозненные заметки, голосовые или рукописный текст? Мы превратим это в логичный, грамотный и красиво оформленный документ.',
      color: 'magenta',
    },
    {
      icon: '📊',
      title: 'Дизайн учебных презентаций',
      description: 'Создадим стильную, понятную и академичную презентацию для защиты. С инфографикой, схемами и единым визуальным стилем. Никаких клипартов и перегруженных слайдов.',
      color: 'purple',
    },
    {
      icon: '🎓',
      title: 'Проект под ключ',
      description: 'Комплексная помощь: структурируем материалы, оформим текст по ГОСТу и сделаем презентацию с речью для защиты.',
      color: 'cyan',
    },
  ];

  const borderClass = (color: string) => {
    switch (color) {
      case 'cyan': return 'hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]';
      case 'magenta': return 'hover:border-neon-magenta/50 hover:shadow-[0_0_20px_rgba(255,0,255,0.15)]';
      case 'purple': return 'hover:border-neon-purple/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]';
      default: return '';
    }
  };

  const titleClass = (color: string) => {
    switch (color) {
      case 'cyan': return 'text-neon-cyan';
      case 'magenta': return 'text-neon-magenta';
      case 'purple': return 'text-neon-purple';
      default: return 'text-neon-cyan';
    }
  };

  return (
    <section id="services" className="py-24 relative cyber-grid">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-neon-cyan tracking-wider">// УСЛУГИ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Что мы делаем?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`card-cyber rounded-lg p-8 border transition-all duration-300 ${borderClass(service.color)}`}
            >
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className={`text-xl font-bold mb-3 font-mono ${titleClass(service.color)}`}>
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Оставляешь заявку',
      description: 'Скидываешь нам свой файл, методичку и указываешь дедлайн через бота на сайте.',
    },
    {
      num: '02',
      title: 'Получаешь цену',
      description: 'Мы оцениваем объем и сложность, фиксируем стоимость. Никаких скрытых доплат.',
    },
    {
      num: '03',
      title: 'Оплачиваешь удобно',
      description: 'Карта, СБП или наличные (при личной встрече).',
    },
    {
      num: '04',
      title: 'Забираешь результат',
      description: 'Ты получаешь безупречный файл и презентацию. Если нормоконтролер придерется к оформлению — мы бесплатно исправим.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-neon-magenta tracking-wider">// ПРОЦЕСС</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            4 шага до идеальной работы
          </h2>
        </div>
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6 card-cyber rounded-lg p-6 group hover:border-neon-cyan/30 transition-all duration-300">
              <div className="flex-shrink-0 w-14 h-14 rounded border border-neon-cyan/30 flex items-center justify-center group-hover:border-neon-cyan group-hover:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all">
                <span className="font-mono text-neon-cyan font-bold text-lg">{step.num}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalculatorSection() {
  const [workType, setWorkType] = useState('');
  const [pages, setPages] = useState('');
  const [urgency, setUrgency] = useState('');
  const [serviceType, setServiceType] = useState('');

  const calculatePrice = () => {
    const pagesNum = parseInt(pages) || 0;
    if (!pagesNum || !workType || !urgency || !serviceType) return null;

    let basePrice = 0;
    // Base price per page depending on work type
    switch (workType) {
      case 'coursework': basePrice = pagesNum * 35; break;
      case 'diploma': basePrice = pagesNum * 45; break;
      case 'referat': basePrice = pagesNum * 25; break;
      case 'other': basePrice = pagesNum * 30; break;
    }

    // Service multiplier
    switch (serviceType) {
      case 'gost': break; // x1
      case 'structure': basePrice *= 1.3; break;
      case 'presentation': basePrice = pagesNum * 80; break;
      case 'complex': basePrice *= 1.8; break;
    }

    // Urgency multiplier
    switch (urgency) {
      case 'urgent': basePrice *= 1.5; break;
      case 'standard': break;
      case 'relaxed': basePrice *= 0.9; break;
    }

    return Math.round(basePrice);
  };

  const price = calculatePrice();

  return (
    <section id="calculator" className="py-24 relative cyber-grid">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-neon-cyan tracking-wider">// КАЛЬКУЛЯТОР</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Рассчитай стоимость
          </h2>
          <p className="text-gray-400 mt-4">Узнай примерную цену за 30 секунд</p>
        </div>

        <div className="card-cyber rounded-xl p-6 sm:p-10 border border-[#1a1a2e]">
          {/* Step 1: Work type */}
          <div className="mb-8">
            <label className="font-mono text-sm text-neon-cyan mb-3 block">
              <span className="text-gray-500 mr-2">01.</span>Тип работы
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: 'coursework', label: 'Курсовая' },
                { value: 'diploma', label: 'Диплом (ВКР)' },
                { value: 'referat', label: 'Реферат' },
                { value: 'other', label: 'Другое' },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setWorkType(item.value)}
                  className={`py-3 px-4 rounded border text-sm font-mono transition-all ${
                    workType === item.value
                      ? 'border-neon-cyan bg-neon-cyan/10 text-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                      : 'border-[#1a1a2e] text-gray-400 hover:border-gray-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Service type */}
          <div className="mb-8">
            <label className="font-mono text-sm text-neon-cyan mb-3 block">
              <span className="text-gray-500 mr-2">02.</span>Тип услуги
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { value: 'gost', label: '📄 Оформление по ГОСТу' },
                { value: 'structure', label: '🧩 Структурирование из черновиков' },
                { value: 'presentation', label: '📊 Презентация' },
                { value: 'complex', label: '🎓 Комплекс (всё включено)' },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setServiceType(item.value)}
                  className={`py-3 px-4 rounded border text-sm font-mono transition-all text-left ${
                    serviceType === item.value
                      ? 'border-neon-magenta bg-neon-magenta/10 text-neon-magenta shadow-[0_0_10px_rgba(255,0,255,0.2)]'
                      : 'border-[#1a1a2e] text-gray-400 hover:border-gray-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Volume */}
          <div className="mb-8">
            <label className="font-mono text-sm text-neon-cyan mb-3 block">
              <span className="text-gray-500 mr-2">03.</span>Объём {serviceType === 'presentation' ? '(кол-во слайдов)' : '(кол-во страниц)'}
            </label>
            <input
              type="number"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
              placeholder={serviceType === 'presentation' ? 'Например: 15' : 'Например: 45'}
              className="w-full sm:w-64 py-3 px-4 rounded border border-[#1a1a2e] bg-[#06060e] text-white font-mono text-sm focus:border-neon-cyan focus:outline-none focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all placeholder-gray-600"
            />
          </div>

          {/* Step 4: Urgency */}
          <div className="mb-10">
            <label className="font-mono text-sm text-neon-cyan mb-3 block">
              <span className="text-gray-500 mr-2">04.</span>Срочность
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { value: 'urgent', label: '🔥 Срочно (до 24ч)', sub: '+50%' },
                { value: 'standard', label: '⏳ Стандарт (3-5 дней)', sub: '' },
                { value: 'relaxed', label: '🐢 Не горит (от 7 дней)', sub: '-10%' },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setUrgency(item.value)}
                  className={`py-3 px-4 rounded border text-sm font-mono transition-all ${
                    urgency === item.value
                      ? 'border-neon-purple bg-neon-purple/10 text-neon-purple shadow-[0_0_10px_rgba(139,92,246,0.2)]'
                      : 'border-[#1a1a2e] text-gray-400 hover:border-gray-500'
                  }`}
                >
                  <div>{item.label}</div>
                  {item.sub && <div className="text-xs mt-1 opacity-70">{item.sub}</div>}
                </button>
              ))}
            </div>
          </div>

          {/* Result */}
          {price !== null && (
            <div className="border-t border-[#1a1a2e] pt-8">
              <div className="text-center">
                <p className="font-mono text-sm text-gray-400 mb-2">Предварительная стоимость:</p>
                <p className="text-4xl sm:text-5xl font-bold neon-text-cyan font-mono">
                  {price.toLocaleString('ru-RU')} ₽
                </p>
                <p className="text-xs text-gray-500 mt-3 font-mono">
                  * Точную стоимость менеджер уточнит после проверки файлов
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="btn-neon text-sm py-3 px-8">
                    Оформить заявку
                  </button>
                  <span className="text-xs text-gray-500 font-mono">или напиши в Telegram</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const advantages = [
    {
      icon: '🛡',
      title: '100% этично и безопасно',
      description: 'Мы не нарушаем академическую честность. Мы — твой технический редактор и дизайнер.',
    },
    {
      icon: '⏱',
      title: 'Соблюдаем дедлайны',
      description: 'Понимаем, что такое «сдать вчера». Работаем строго в срок.',
    },
    {
      icon: '🔄',
      title: 'Бесплатные правки',
      description: 'Если преподаватель скажет «поправь отступы», мы сделаем это бесплатно в течение 14 дней.',
    },
    {
      icon: '🤫',
      title: 'Полная конфиденциальность',
      description: 'Твоя работа и факт обращения никуда не утекут.',
    },
  ];

  return (
    <section id="why-us" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-neon-purple tracking-wider">// ПРЕИМУЩЕСТВА</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Почему мы?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {advantages.map((item, index) => (
            <div key={index} className="card-cyber rounded-lg p-8 hover:border-neon-purple/30 transition-all duration-300">
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="py-24 relative cyber-grid">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-neon-magenta tracking-wider">// ПРАЙС</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Тарифы
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic */}
          <div className="card-cyber rounded-xl p-8 border border-[#1a1a2e] hover:border-neon-cyan/30 transition-all duration-300">
            <div className="font-mono text-xs text-neon-cyan mb-2">// БАЗОВЫЙ</div>
            <h3 className="text-xl font-bold text-white mb-1">Оформление</h3>
            <div className="text-3xl font-bold text-white font-mono mb-4">
              от 25₽<span className="text-sm text-gray-400 font-normal">/стр.</span>
            </div>
            <ul className="space-y-3 text-sm text-gray-400 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-neon-cyan">✓</span> Форматирование по ГОСТу
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-cyan">✓</span> Настройка стилей
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-cyan">✓</span> Автособираемое оглавление
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-cyan">✓</span> Оформление списка литературы
              </li>
            </ul>
            <a href="#calculator" className="block text-center btn-neon text-xs py-2 px-4">Рассчитать</a>
          </div>

          {/* Popular */}
          <div className="card-cyber rounded-xl p-8 border border-neon-magenta/50 relative shadow-[0_0_30px_rgba(255,0,255,0.1)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-neon-magenta text-black text-xs font-mono font-bold rounded">
              ПОПУЛЯРНЫЙ
            </div>
            <div className="font-mono text-xs text-neon-magenta mb-2">// КОМПЛЕКС</div>
            <h3 className="text-xl font-bold text-white mb-1">Диплом под ключ</h3>
            <div className="text-3xl font-bold text-white font-mono mb-4">
              от 45₽<span className="text-sm text-gray-400 font-normal">/стр.</span>
            </div>
            <ul className="space-y-3 text-sm text-gray-400 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-neon-magenta">✓</span> Всё из тарифа «Базовый»
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-magenta">✓</span> Структурирование текста
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-magenta">✓</span> Презентация для защиты
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-magenta">✓</span> Речь для защиты
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-magenta">✓</span> Скидка 15% на пакет
              </li>
            </ul>
            <a href="#calculator" className="block text-center py-3 px-4 rounded border border-neon-magenta text-neon-magenta font-mono text-xs uppercase tracking-wider hover:bg-neon-magenta/10 hover:shadow-[0_0_15px_rgba(255,0,255,0.3)] transition-all">Рассчитать</a>
          </div>

          {/* Presentation */}
          <div className="card-cyber rounded-xl p-8 border border-[#1a1a2e] hover:border-neon-purple/30 transition-all duration-300">
            <div className="font-mono text-xs text-neon-purple mb-2">// ПРЕЗЕНТАЦИЯ</div>
            <h3 className="text-xl font-bold text-white mb-1">Дизайн слайдов</h3>
            <div className="text-3xl font-bold text-white font-mono mb-4">
              от 80₽<span className="text-sm text-gray-400 font-normal">/слайд</span>
            </div>
            <ul className="space-y-3 text-sm text-gray-400 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-neon-purple">✓</span> Уникальный дизайн
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-purple">✓</span> Инфографика и схемы
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-purple">✓</span> Единый визуальный стиль
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-purple">✓</span> Анимации переходов
              </li>
            </ul>
            <a href="#calculator" className="block text-center btn-neon text-xs py-2 px-4" style={{ borderColor: '#8b5cf6', color: '#8b5cf6' }}>Рассчитать</a>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 font-mono">
            🔥 Срочные заказы (менее 24 часов) — наценка +50–100%
          </p>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="card-cyber rounded-xl p-10 sm:p-16 border border-neon-cyan/20 relative overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-neon-cyan/30"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-neon-cyan/30"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-neon-cyan/30"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-neon-cyan/30"></div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Осталось 2 недели до сдачи?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Не трать время на отступы!
          </p>
          <a href="#calculator" className="btn-neon text-sm py-4 px-10 inline-block">
            Оформить заявку
          </a>
          <p className="mt-6 text-xs text-gray-500 font-mono">
            Ответим в течение 15 минут
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#1a1a2e] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded border border-neon-cyan flex items-center justify-center">
                <span className="font-mono text-neon-cyan text-sm font-bold">G</span>
              </div>
              <span className="font-mono text-lg font-bold text-white tracking-wider">
                GOST<span className="text-neon-cyan">ify</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Профессиональное оформление учебных работ по ГОСТу. Ты пишешь смысл — мы делаем форму.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-sm text-white mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-sm text-gray-500 hover:text-neon-cyan transition-colors">Услуги</a></li>
              <li><a href="#how-it-works" className="text-sm text-gray-500 hover:text-neon-cyan transition-colors">Как работает</a></li>
              <li><a href="#calculator" className="text-sm text-gray-500 hover:text-neon-cyan transition-colors">Калькулятор</a></li>
              <li><a href="#why-us" className="text-sm text-gray-500 hover:text-neon-cyan transition-colors">Почему мы</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-sm text-white mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-500 flex items-center gap-2">
                <span className="text-neon-cyan">✈</span> Telegram: @gostify_bot
              </li>
              <li className="text-sm text-gray-500 flex items-center gap-2">
                <span className="text-neon-cyan">✉</span> info@gostify.ru
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#1a1a2e] mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 font-mono">
            © 2025 GOSTify. Все права защищены.
          </p>
          <p className="text-xs text-gray-600 font-mono">
            Не пишем работы с нуля. Помогаем оформить.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-gray-200">
      <Navbar />
      <HeroSection />
      <PainSection />
      <ServicesSection />
      <HowItWorksSection />
      <CalculatorSection />
      <PricingSection />
      <WhyUsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
