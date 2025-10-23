import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Monument {
  name: string;
  year: string;
  location: string;
  description: string;
  style: string;
  image: string;
}

const monuments: Monument[] = [
  {
    name: 'Триумфальная арка',
    year: '1806-1836',
    location: 'Париж, Франция',
    description: 'Величественная арка в стиле ампир, построенная по приказу Наполеона в честь побед Великой армии.',
    style: 'Ампир',
    image: 'https://cdn.poehali.dev/projects/7d0a93c9-1b0e-4251-9e26-fa8b0926f2a1/files/251b4914-ad00-4c38-9c5f-e1eab6c8c10d.jpg'
  },
  {
    name: 'Вандомская колонна',
    year: '1806-1810',
    location: 'Париж, Франция',
    description: 'Колонна высотой 44 метра, воздвигнутая в честь победы при Аустерлице.',
    style: 'Ампир',
    image: 'https://cdn.poehali.dev/projects/7d0a93c9-1b0e-4251-9e26-fa8b0926f2a1/files/518ef1ec-4a5b-467e-90e9-05d8ef609fde.jpg'
  },
  {
    name: 'Церковь Мадлен',
    year: '1764-1842',
    location: 'Париж, Франция',
    description: 'Католическая церковь в неоклассическом стиле, напоминающая античный храм.',
    style: 'Ампир',
    image: 'https://cdn.poehali.dev/projects/7d0a93c9-1b0e-4251-9e26-fa8b0926f2a1/files/df32f4a3-0ae0-437f-a814-3b37c47dfecc.jpg'
  },
  {
    name: 'Хрустальный дворец',
    year: '1851',
    location: 'Лондон, Великобритания',
    description: 'Революционное здание из стекла и чугуна для Всемирной выставки, символ промышленной эры.',
    style: 'Индустриальная архитектура',
    image: 'https://cdn.poehali.dev/projects/7d0a93c9-1b0e-4251-9e26-fa8b0926f2a1/files/5bdb749f-74e5-474f-81b0-cda1a31d7efd.jpg'
  },
  {
    name: 'Первые небоскрёбы',
    year: '1885',
    location: 'Чикаго, США',
    description: 'Home Insurance Building - первый небоскрёб с металлическим каркасом, открывший новую эру в строительстве.',
    style: 'Чикагская школа',
    image: 'https://cdn.poehali.dev/projects/7d0a93c9-1b0e-4251-9e26-fa8b0926f2a1/files/08afae84-b0b9-4b07-9c46-5df3324a1eaa.jpg'
  },
  {
    name: 'Эйфелева башня',
    year: '1887-1889',
    location: 'Париж, Франция',
    description: 'Железная башня высотой 300 метров, ставшая символом технического прогресса XIX века.',
    style: 'Индустриальная архитектура',
    image: 'https://cdn.poehali.dev/projects/7d0a93c9-1b0e-4251-9e26-fa8b0926f2a1/files/eda0e25f-327d-4702-b38a-a5800433f80b.jpg'
  },
  {
    name: 'Храм Святого Семейства',
    year: '1882-настоящее время',
    location: 'Барселона, Испания',
    description: 'Грандиозный проект Антонио Гауди, объединивший готику с органическими формами модерна.',
    style: 'Модерн',
    image: 'https://cdn.poehali.dev/projects/7d0a93c9-1b0e-4251-9e26-fa8b0926f2a1/files/6e845304-98c3-4b76-8aae-31a5994f048c.jpg'
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-secondary/20 bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <Icon name="Columns3" size={32} className="text-accent" />
            <h1 className="text-4xl font-bold text-primary">Архитектура XIX века</h1>
          </div>
          <p className="text-muted-foreground text-lg">Академические исследования исторической архитектуры</p>
        </div>
      </header>

      <nav className="border-b border-secondary/20 bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex gap-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Обзор', icon: 'Home' },
              { id: 'styles', label: 'Жанры', icon: 'Palette' },
              { id: 'monuments', label: 'Сооружения', icon: 'Building2' },
              { id: 'timeline', label: 'Хронология', icon: 'Clock' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-accent text-primary'
                    : 'border-transparent text-muted-foreground hover:text-primary'
                }`}
              >
                <Icon name={tab.icon as any} size={18} />
                <span className="font-medium whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeTab === 'overview' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Эпоха архитектурных преобразований</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                XIX век стал периодом радикальных изменений в архитектуре. Промышленная революция принесла новые материалы
                и технологии, позволившие создавать небывалые по масштабу и смелости сооружения.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-accent transition-colors">
                <CardHeader>
                  <Icon name="Crown" size={32} className="text-accent mb-2" />
                  <CardTitle>Ампир</CardTitle>
                  <CardDescription>1800-1830-е</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Имперский стиль Наполеона, величественность античных форм</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors">
                <CardHeader>
                  <Icon name="Factory" size={32} className="text-accent mb-2" />
                  <CardTitle>Индустриализация</CardTitle>
                  <CardDescription>1850-1890-е</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Железо, стекло, бетон - новые материалы меняют облик городов</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors">
                <CardHeader>
                  <Icon name="Flower2" size={32} className="text-accent mb-2" />
                  <CardTitle>Модерн</CardTitle>
                  <CardDescription>1890-1910-е</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Органические формы, отказ от прямых линий, новая эстетика</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'styles' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold mb-8">Основные архитектурные стили</h2>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">Ампир (Empire Style)</CardTitle>
                    <Badge variant="secondary" className="mb-4">1800-1840</Badge>
                  </div>
                  <Icon name="Crown" size={48} className="text-accent" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Ампир — монументальный стиль эпохи Наполеона I, развившийся на основе классицизма.
                  Характеризуется строгими симметричными формами, массивностью и торжественностью.
                </p>
                
                <div className="bg-muted/50 p-4 rounded">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="CheckCircle2" size={18} />
                    Характерные черты:
                  </h4>
                  <ul className="space-y-2 ml-6">
                    <li className="text-muted-foreground">Триумфальная военная символика (орлы, лавровые венки, военные трофеи)</li>
                    <li className="text-muted-foreground">Монументальные колоннады коринфского и дорического ордеров</li>
                    <li className="text-muted-foreground">Строгая симметрия и геометрия форм</li>
                    <li className="text-muted-foreground">Обращение к образам Древнего Рима и императорской власти</li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-4 rounded">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="MapPin" size={18} />
                    Примеры:
                  </h4>
                  <p className="text-muted-foreground">
                    Триумфальная арка на площади Звезды, Вандомская колонна, церковь Мадлен в Париже
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">Начало модерна (Art Nouveau)</CardTitle>
                    <Badge variant="secondary" className="mb-4">1890-1910</Badge>
                  </div>
                  <Icon name="Flower2" size={48} className="text-accent" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Модерн стал революцией в архитектуре конца XIX века, отказавшись от исторических стилей
                  в пользу новых органических форм, вдохновлённых природой.
                </p>
                
                <div className="bg-muted/50 p-4 rounded">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="CheckCircle2" size={18} />
                    Характерные черты:
                  </h4>
                  <ul className="space-y-2 ml-6">
                    <li className="text-muted-foreground">Плавные изогнутые линии, отказ от прямых углов</li>
                    <li className="text-muted-foreground">Природные мотивы: растения, цветы, животные</li>
                    <li className="text-muted-foreground">Использование новых материалов: металл, стекло, керамика</li>
                    <li className="text-muted-foreground">Асимметрия и индивидуальность каждого здания</li>
                    <li className="text-muted-foreground">Единство архитектуры и декоративного искусства</li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-4 rounded">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="MapPin" size={18} />
                    Примеры:
                  </h4>
                  <p className="text-muted-foreground">
                    Храм Святого Семейства Антонио Гауди, особняки Виктора Орта в Брюсселе
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'monuments' && (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Знаменитые архитектурные сооружения</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {monuments.map((monument, index) => (
                <Card key={index} className="border-2 hover:border-accent transition-all hover:shadow-lg overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden bg-muted">
                    <img 
                      src={monument.image} 
                      alt={monument.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="mb-2">{monument.style}</Badge>
                      <Icon name="Building2" size={24} className="text-accent" />
                    </div>
                    <CardTitle className="text-xl">{monument.name}</CardTitle>
                    <CardDescription className="flex items-center gap-4 text-base">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={16} />
                        {monument.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="MapPin" size={16} />
                        {monument.location}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{monument.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'timeline' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Хронология строительства</h2>
            
            <div className="relative border-l-2 border-accent ml-6 space-y-8">
              {monuments.sort((a, b) => {
                const yearA = parseInt(a.year.split('-')[0]);
                const yearB = parseInt(b.year.split('-')[0]);
                return yearA - yearB;
              }).map((monument, index) => (
                <div key={index} className="relative pl-8 pb-8">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent border-4 border-background"></div>
                  
                  <div className="bg-card border-2 rounded p-6 hover:border-accent transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <Badge className="mb-2">{monument.year}</Badge>
                        <h3 className="text-xl font-bold">{monument.name}</h3>
                      </div>
                      <Icon name="MapPin" size={24} className="text-accent" />
                    </div>
                    
                    <p className="text-muted-foreground mb-2 flex items-center gap-2">
                      <Icon name="Globe" size={16} />
                      {monument.location}
                    </p>
                    
                    <p className="text-sm text-muted-foreground mb-3">{monument.description}</p>
                    
                    <Badge variant="secondary">{monument.style}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-secondary/20 bg-card mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Columns3" size={24} className="text-accent" />
              <span className="font-semibold">Архитектура XIX века</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Образовательный портал по истории архитектуры
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;