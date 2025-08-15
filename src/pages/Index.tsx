import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanDays, setLoanDays] = useState(30);

  const calculateLoan = () => {
    const dailyRate = 0.8; // 0.8% в день
    const totalInterest = Math.floor(loanAmount * (dailyRate / 100) * loanDays);
    const totalAmount = loanAmount + totalInterest;
    return { totalInterest, totalAmount };
  };

  const { totalInterest, totalAmount } = calculateLoan();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-xl items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <Icon name="Gem" className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">МАКСИМУМ</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#calculator" className="text-sm font-medium hover:text-primary transition-colors">Калькулятор</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
            <a href="#jobs" className="text-sm font-medium hover:text-primary transition-colors">Вакансии</a>
            <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Блог</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              8-800-555-00-11
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              Заявка онлайн
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container relative z-10 max-w-screen-xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="w-fit bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30">
                  Займы под залог ювелирных изделий
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight lg:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Быстрые займы от <span className="text-primary">0.8%</span> в день
                </h1>
                <p className="max-w-[600px] text-muted-foreground text-lg">
                  Получите деньги за 15 минут под залог золота, серебра и драгоценных камней. 
                  Без справок и поручителей.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg">
                  <Icon name="Calculator" className="mr-2 h-5 w-5" />
                  Рассчитать займ
                </Button>
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5">
                  <Icon name="MapPin" className="mr-2 h-5 w-5" />
                  Найти офис
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Минут на оформление</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>

            {/* Loan Calculator */}
            <Card id="calculator" className="shadow-3d card-3d shadow-2xl border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm animate-fade-in perspective">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="Calculator" className="mr-3 h-6 w-6 text-primary" />
                  Калькулятор займа
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-sm font-medium">
                    Сумма займа: {loanAmount.toLocaleString()} ₽
                  </Label>
                  <Input
                    id="amount"
                    type="range"
                    min="10000"
                    max="500000"
                    step="5000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>10 000 ₽</span>
                    <span>500 000 ₽</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="days" className="text-sm font-medium">
                    Срок займа: {loanDays} дней
                  </Label>
                  <Input
                    id="days"
                    type="range"
                    min="7"
                    max="180"
                    step="1"
                    value={loanDays}
                    onChange={(e) => setLoanDays(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>7 дней</span>
                    <span>180 дней</span>
                  </div>
                </div>

                <div className="space-y-3 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                  <div className="flex justify-between">
                    <span className="text-sm">Проценты:</span>
                    <span className="font-medium">{totalInterest.toLocaleString()} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">К возврату:</span>
                    <span className="text-lg font-bold text-primary">{totalAmount.toLocaleString()} ₽</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground">
                  <Icon name="CreditCard" className="mr-2 h-4 w-4" />
                  Оформить займ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-r from-accent/20 to-secondary/20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container max-w-screen-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">О компании МАКСИМУМ</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы — надежная сеть ломбардов с многолетним опытом работы на финансовом рынке России
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-3d-hover transition-all duration-300 animate-scale-in card-3d">
              <CardContent className="pt-6">
                <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <Icon name="Shield" className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
                <p className="text-muted-foreground">Лицензированная деятельность с полным соблюдением законодательства РФ</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-6">
                <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-accent to-secondary flex items-center justify-center">
                  <Icon name="Clock" className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Скорость</h3>
                <p className="text-muted-foreground">Оформление займа за 15 минут без лишних документов и проверок</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6">
                <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center">
                  <Icon name="Users" className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Доверие</h3>
                <p className="text-muted-foreground">Более 500 довольных клиентов и положительные отзывы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20">
        <div className="container max-w-screen-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Специальные предложения</h2>
            <p className="text-muted-foreground">Выгодные условия для наших клиентов</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-0 bg-gradient-to-br from-primary/10 to-accent/10 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white">АКЦИЯ</Badge>
                  <Icon name="Star" className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Первый займ 0.5%</h3>
                <p className="text-muted-foreground mb-4">
                  Специальная ставка для новых клиентов на первые 30 дней
                </p>
                <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                  Воспользоваться
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 bg-gradient-to-br from-accent/10 to-secondary/10 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-gradient-to-r from-accent to-secondary text-white">VIP</Badge>
                  <Icon name="Crown" className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">VIP клиентам</h3>
                <p className="text-muted-foreground mb-4">
                  Льготные условия и приоритетное обслуживание для постоянных клиентов
                </p>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-screen-xl">
          <Tabs defaultValue="jobs" className="w-full">
            <TabsList className="grid w-full grid-cols-4 h-12">
              <TabsTrigger value="jobs" className="font-medium">Вакансии</TabsTrigger>
              <TabsTrigger value="blog" className="font-medium">Блог</TabsTrigger>
              <TabsTrigger value="documents" className="font-medium">Документы</TabsTrigger>
              <TabsTrigger value="faq" className="font-medium">Вопросы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="jobs" className="mt-8">
              <div className="grid gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Оценщик драгоценностей</h3>
                        <p className="text-muted-foreground mb-4">Полная занятость • Опыт от 2 лет • Москва</p>
                        <div className="space-y-2">
                          <p>• Оценка ювелирных изделий и драгоценных металлов</p>
                          <p>• Работа с клиентами</p>
                          <p>• Ведение документации</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary mb-2">от 80 000 ₽</div>
                        <Button size="sm">Откликнуться</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Кассир-консультант</h3>
                        <p className="text-muted-foreground mb-4">Полная занятость • Без опыта • СПб</p>
                        <div className="space-y-2">
                          <p>• Обслуживание клиентов</p>
                          <p>• Оформление займов</p>
                          <p>• Работа с кассой</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary mb-2">от 50 000 ₽</div>
                        <Button size="sm">Откликнуться</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="blog" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge className="mb-3">Новости</Badge>
                    <h3 className="text-xl font-semibold mb-2">Открытие нового офиса</h3>
                    <p className="text-muted-foreground mb-4">
                      С радостью сообщаем об открытии нового офиса в центре города...
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">15 декабря 2024</span>
                      <Button variant="ghost" size="sm">Читать далее</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge className="mb-3" variant="secondary">Статья</Badge>
                    <h3 className="text-xl font-semibold mb-2">Как правильно оценить золото</h3>
                    <p className="text-muted-foreground mb-4">
                      Полезные советы по оценке драгоценных металлов от наших экспертов...
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">10 декабря 2024</span>
                      <Button variant="ghost" size="sm">Читать далее</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="documents" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon name="FileText" className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">Лицензия</h3>
                    <p className="text-sm text-muted-foreground mb-4">Лицензия на осуществление деятельности ломбарда</p>
                    <Button variant="outline" size="sm">Скачать PDF</Button>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon name="Building" className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">Устав</h3>
                    <p className="text-sm text-muted-foreground mb-4">Устав организации</p>
                    <Button variant="outline" size="sm">Скачать PDF</Button>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon name="Award" className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">Сертификаты</h3>
                    <p className="text-sm text-muted-foreground mb-4">Сертификаты соответствия</p>
                    <Button variant="outline" size="sm">Скачать PDF</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    Правда ли, что в ломбарде можно потерять вещи?
                  </AccordionTrigger>
                  <AccordionContent>
                    Это миф. Все вещи застрахованы и хранятся в специальных сейфах с видеонаблюдением. 
                    При соблюдении условий договора ваши вещи будут возвращены в том же состоянии.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Какие документы нужны для оформления займа?
                  </AccordionTrigger>
                  <AccordionContent>
                    Достаточно паспорта гражданина РФ. Никаких справок о доходах, поручителей или дополнительных документов не требуется.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Можно ли продлить срок займа?
                  </AccordionTrigger>
                  <AccordionContent>
                    Да, срок займа можно продлить, доплатив проценты за следующий период. Это можно делать неограниченное количество раз.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Что произойдет, если не выкупить вещь вовремя?
                  </AccordionTrigger>
                  <AccordionContent>
                    После истечения льготного периода (5 дней) вещь выставляется на продажу. 
                    Если она продается дороже суммы долга, разница возвращается клиенту.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container max-w-screen-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши офисы</h2>
            <p className="text-muted-foreground">Найдите ближайший офис ломбарда МАКСИМУМ</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Центральный офис</h3>
                      <p className="text-muted-foreground mb-2">ул. Тверская, 15, стр. 1</p>
                      <p className="text-sm mb-2">
                        <Icon name="Phone" className="h-4 w-4 inline mr-1" />
                        +7 (495) 123-45-67
                      </p>
                      <p className="text-sm text-primary">Пн-Вс: 9:00-21:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-accent to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Офис на Арбате</h3>
                      <p className="text-muted-foreground mb-2">ул. Арбат, 42</p>
                      <p className="text-sm mb-2">
                        <Icon name="Phone" className="h-4 w-4 inline mr-1" />
                        +7 (495) 123-45-68
                      </p>
                      <p className="text-sm text-primary">Пн-Сб: 10:00-20:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Офис в Сокольниках</h3>
                      <p className="text-muted-foreground mb-2">ул. Сокольнический Вал, 1А</p>
                      <p className="text-sm mb-2">
                        <Icon name="Phone" className="h-4 w-4 inline mr-1" />
                        +7 (495) 123-45-69
                      </p>
                      <p className="text-sm text-primary">Пн-Вс: 9:00-21:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="h-fit">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Интерактивная карта</h3>
                <div className="h-80 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Map" className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Карта с офисами</p>
                    <Button variant="outline" className="mt-4">
                      Открыть в Яндекс.Картах
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container max-w-screen-xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                  <Icon name="Gem" className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">МАКСИМУМ</span>
              </div>
              <p className="text-sm text-secondary-foreground/70">
                Надежный партнер в мире финансовых услуг. Быстрые займы под залог драгоценностей.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-secondary-foreground/70 hover:text-secondary-foreground">
                  <Icon name="Facebook" className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-secondary-foreground/70 hover:text-secondary-foreground">
                  <Icon name="Instagram" className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-secondary-foreground/70 hover:text-secondary-foreground">
                  <span className="font-bold text-sm">ВК</span>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li><a href="#" className="hover:text-secondary-foreground transition-colors">Займы под залог золота</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors">Займы под залог серебра</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors">Оценка драгоценностей</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors">Продажа изделий</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li><a href="#about" className="hover:text-secondary-foreground transition-colors">О нас</a></li>
                <li><a href="#jobs" className="hover:text-secondary-foreground transition-colors">Вакансии</a></li>
                <li><a href="#blog" className="hover:text-secondary-foreground transition-colors">Блог</a></li>
                <li><a href="#contacts" className="hover:text-secondary-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-sm text-secondary-foreground/70">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  <span>8-800-555-00-11</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  <span>info@maksimum-lombard.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  <span>Москва, ул. Тверская, 15</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/70">
            <p>&copy; 2024 Ломбард МАКСИМУМ. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Floating Payment Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="rounded-full shadow-2xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground animate-float"
        >
          <Icon name="CreditCard" className="mr-2 h-5 w-5" />
          Оплата процентов
        </Button>
      </div>
    </div>
  );
}