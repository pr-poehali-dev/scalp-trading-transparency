import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: 'TrendingUp',
      title: 'Скальпинг стратегии',
      description: 'Быстрые сделки с минимальными рисками и максимальной эффективностью'
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика рынка',
      description: 'Глубокий анализ рыночных трендов для принятия точных решений'
    },
    {
      icon: 'Zap',
      title: 'Молниеносное исполнение',
      description: 'Торговля на скорости света с минимальными задержками'
    },
    {
      icon: 'Shield',
      title: 'Управление рисками',
      description: 'Продвинутые инструменты для защиты вашего капитала'
    },
    {
      icon: 'Users',
      title: 'P2P торговля',
      description: 'Прямые сделки между трейдерами без посредников'
    },
    {
      icon: 'LineChart',
      title: '24/7 мониторинг',
      description: 'Круглосуточное отслеживание позиций и уведомления'
    }
  ];

  const services = [
    {
      title: 'Обучение трейдингу',
      price: 'от 15 000 ₽',
      features: ['Базовые стратегии', 'Технический анализ', 'Практические кейсы', 'Поддержка 30 дней']
    },
    {
      title: 'Премиум пакет',
      price: 'от 45 000 ₽',
      features: ['Продвинутые стратегии', 'Личный наставник', 'Торговые сигналы', 'Пожизненная поддержка'],
      featured: true
    },
    {
      title: 'Корпоративное решение',
      price: 'по запросу',
      features: ['Индивидуальная программа', 'Команда экспертов', 'Автоматизация торговли', 'Аналитика в реальном времени']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong py-4' : 'py-6'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-2xl font-bold">P</span>
            </div>
            <span className="text-xl font-bold">P2P co.</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            <Button className="glass hover:glass-strong border-primary/50">
              Начать торговать
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Торгуйте <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">быстрее</span> рынка
              </h1>
              <p className="text-xl text-muted-foreground">
                P2P co. — ваш проводник в мире высокочастотного трейдинга и скальпинга. 
                Мы помогаем зарабатывать на микродвижениях цены.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white border-0">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Начать сейчас
                </Button>
                <Button size="lg" variant="outline" className="glass hover:glass-strong border-primary/50">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Демо-режим
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">1500+</div>
                  <div className="text-sm text-muted-foreground">Активных трейдеров</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">98%</div>
                  <div className="text-sm text-muted-foreground">Успешных сделок</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">$5M+</div>
                  <div className="text-sm text-muted-foreground">Объём торгов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"></div>
              <Card className="glass-strong p-8 relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/f9c0d2fe-71e6-488e-b108-98ba6935001e/files/9bec32ac-2b1c-4bce-a5d2-6f8205322035.jpg" 
                  alt="Trading Chart"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="glass p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">BTC/USDT</span>
                      <span className="text-green-400 flex items-center gap-1">
                        <Icon name="TrendingUp" size={16} />
                        +2.45%
                      </span>
                    </div>
                    <div className="text-2xl font-bold">$43,250.00</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">P2P co.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современные технологии и проверенные стратегии для вашего успеха
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="glass hover:glass-strong transition-all duration-300 p-6 group hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                  <Icon name={feature.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий пакет и начните зарабатывать уже сегодня
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`p-8 transition-all duration-300 hover:scale-105 animate-fade-in ${
                  service.featured 
                    ? 'glass-strong border-primary/50 relative overflow-hidden' 
                    : 'glass hover:glass-strong'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {service.featured && (
                  <>
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-secondary text-white px-4 py-1 text-sm font-semibold">
                      Популярный
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 -z-10"></div>
                  </>
                )}
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <div className="text-3xl font-bold text-primary mb-6">{service.price}</div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    service.featured 
                      ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white border-0' 
                      : 'glass hover:glass-strong border-primary/50'
                  }`}
                >
                  Выбрать пакет
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Готовы начать? Оставьте заявку и наш эксперт свяжется с вами
            </p>
          </div>
          <Card className="glass-strong p-8 animate-slide-up">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <Input 
                    placeholder="Иван Петров" 
                    className="glass border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input 
                    type="email" 
                    placeholder="ivan@example.com" 
                    className="glass border-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Телефон</label>
                <Input 
                  type="tel" 
                  placeholder="+7 (999) 123-45-67" 
                  className="glass border-primary/20 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о ваших целях в трейдинге..." 
                  rows={5}
                  className="glass border-primary/20 focus:border-primary resize-none"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white border-0"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </Card>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="glass p-6 text-center hover:glass-strong transition-all">
              <Icon name="Mail" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">info@p2pco.trading</p>
            </Card>
            <Card className="glass p-6 text-center hover:glass-strong transition-all">
              <Icon name="Phone" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-1">Телефон</h3>
              <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
            </Card>
            <Card className="glass p-6 text-center hover:glass-strong transition-all">
              <Icon name="MessageCircle" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-1">Telegram</h3>
              <p className="text-sm text-muted-foreground">@p2pco_support</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-lg font-bold">P</span>
              </div>
              <span className="font-bold">P2P co.</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 P2P co. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="glass hover:glass-strong">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="glass hover:glass-strong">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="glass hover:glass-strong">
                <Icon name="Instagram" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
