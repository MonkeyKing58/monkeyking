new Vue({
  el: "#video_poly",
  data: function() {

    var defaultStars = 750;
    var animationSpeed = 35;
    var currentPath = 0;

    var Titles = [
      'Уникальность',
      'Делай бизнес',
      'Адаптивность',
      'SEO',
      'Поддержка'
    ];

    var Texts = [
      'Одна из наших сильенйших сторон - мы делаем сайт с нуля, индивидуально для каждого. Мы не используем CMS, в отличии от многих других компаний, что позволяет избежать ШАБЛОННОСТИ - непреодолимой преграды на пути к уникальности. ',
      'Как говорил Билл Гейтс: «Если тебя нет в интернете, значит у тебя нет бизнеса». В современном мире сайт - неотемлимая часть цепочки коммуникации с потребителем. Если у ваших конкурентов есть сайт - вперед лишать их этого преимущества! Если сайта нет - отлично! Воспользуйтей этим шансом, ведь в подавляющем большинстве случаев, люди ищут информацию о необходимых товарах и услугах в интернете.',
      'ОТСУТСТВИЕ АДАПТИВНОСТИ - гиганский камень, который будет тянуть вас на дно интернет-маркетинга. Отсутствие мобильной версии может негативно сказаться на позиции сайта в поиске. Ваш сайт должен привлекать пользователей своим видом. Компьютер или смартфон - не важно. С нами сайт сохранит свой футкционал на любой платформе. Удобство на любом устройстве - в современном мире по-другому никак.',
      'SEO-процессы и грамотная настройка рекламы - запутанная и непонятная для многих среда. Мы можем помочь вам выбрать и реализовать правильную стратегию для привлечения интернет-пользователей.',
      'Мы можем помочь Вам настроить рекламу сайта в ЯндексДирект и Google AdWords. Время идет и Ваш сайт нуждается в переменах? Вы всегда можете к нам обратьться за помощью. Добавим, исправим, перекрасим - все что угодно!'
    ];

    var paths = [
      'm 49 39 q -5 3 -8 -2 q 3 -7 5 -10 q 0 0 3 -3 q 4 -4 4 -4 q 0 0 3 -3 q 0 0 0 0 q 3 -2 6 -2 q 4 0 5 1 q 7 2 9 8 q 3 15 -1 29 q -2 13 -1 19 q 1 8 2 12 q 4 12 0 14 q -8 0 -15 0 q -8 1 -9 -7 q 1 -7 4 -12 q 3 -10 4 -17 q 1 -4 1 -6 q 0 -3 1 -7 q 0 -2 1 -9 q 1 2 -1 -5 q -4 -3 -7 1 z',
      'm 45 31 q -3 3 -6 1 q -3 -2 -2 -6 q 0 -1 0 -1 q 0 -2 2 -4 q 1 -1 4 -2 q 0 0 2 -1 q 2 -1 5 -2 q 7 -2 18 0 q 9 2 12 9 q 6 17 -6 25 q -8 8 -16 21 q -8 11 5 13 q 28 -2 22 10 q -3 5 -29 4 q -23 -1 -23 -8 q -2 -8 7 -15 q 4 -3 6 -6 q 7 -6 11 -11 q 4 -6 4 -7 q 2 -4 3 -6 q 2 -3 2 -9 q 1 -8 -15 -8 z',
      'm 45 31 q -3 3 -6 1 q -3 -2 -2 -6 q 0 -1 0 -1 q 0 -2 2 -4 q 1 -1 4 -2 q 0 0 2 -1 q 2 -1 5 -2 q 3 -1 6 -1 q 6 0 11 2 q 10 3 11 17 q 1 8 -4 13 q -4 4 1 10 q 13 26 -4 42 q -5 4 -27 -3 q -10 -5 -10 -14 q 1 -7 8 -4 q 17 15 22 9 q 9 -17 -6 -30 q -7 -3 -9 -6 q -2 -4 10 -8 q 3 -2 3 -2 q 5 -13 -11 -13 z',
      'm 33 33 q 0 -7 0 -9 q 0 -3 0 -5 q 0 -4 3 -4 q 10 -1 10 3 q 1 3 1 5 q 0 3 0 7 q -1 11 1 14 q 20 1 25 -2 q 0 -20 2 -26 q 2 -5 12 0 q 2 2 1 5 q 1 68 0 72 q -1 8 -5 8 q -11 1 -10 -7 q 0 -4 1 -9 q 1 -5 1 -12 q 1 -5 0 -12 q -6 -8 -23 -5 q -10 1 -16 -3 q -2 -3 -2 -8 q 0 0 0 0 q -1 -6 -1 -12 z',
      'm 33 33 q 0 -17 7 -17 q 9 -1 18 -1 q 12 0 24 3 q 7 3 4 9 q -3 7 -17 3 q -11 -4 -20 -1 q -1 6 0 14 q 10 -3 20 -2 q 10 1 17 7 q 10 10 7 24 q -1 9 -9 20 q -4 4 -10 6 q -14 5 -34 -1 q -6 -6 -3 -12 q 6 -5 14 1 q 7 5 19 1 q 13 -13 5 -26 q -5 -10 -23 -8 q -11 5 -16 4 q -2 -6 -2 -12 q 0 0 0 0 q -1 -6 -1 -12 z'
    ]

    var circles = Array.apply(null, { length: defaultStars }).map(
      function(el,index) {
        var color = '#ffffff';
        switch(Math.ceil(Math.random()*5)) {
          case 1:  { color = 'orange'; break; }
          case 2:  { color = '#14b587'; break; }
          case 3:  { color = '#ffd900'; break; }
          case 4:  { color = '#14807c'; break; }
          case 5:  { color = '#5967ff'; break; }
          case 6:  { color = '#f2b7aa'; break; }
          case 7:  { color = '#a4f5ab'; break; }
          case 8:  { color = '#f59ac3'; break; }
          case 9:  { color = '#b0b5f5'; break; }
          default: { color = 'tomato'; break; }
        }
        return {
          dx: Math.ceil(Math.random()*4)-12,
          dy: Math.ceil(Math.random()*4)-12,
          id:'circle-'+index,
          idd:'#circle-'+index,
          r: Math.ceil(Math.random()*100+25)/100,
          fill: color,
          delay: Math.ceil(Math.random()*100*animationSpeed)/100 + 's',
          speed: Math.ceil(Math.random()*animationSpeed + 15) + 's'
        }
      }
    );

    var path = { d: paths[currentPath] };

    return {
      Titles: Titles,
      Texts: Texts,
      defaultStars: defaultStars,
      animationSpeed, animationSpeed,
      circles: circles,
      paths: paths,
      currentPath: currentPath,
      path: path,
      currentTitle: Titles[currentPath],
      currentText: Texts[currentPath]
    }
  },
  watch: {
    currentPath: function(newPath) {
      var vm = this;

      TweenLite.to(vm.path, 1, {
        d: vm.paths[newPath]
      });
    }
  },
  methods: {
    changeImage: function(item) {
      if(item) {
        this.currentPath = ( this.currentPath == 4 ) ? this.currentPath = 0 : this.currentPath += 1;
      }
      else{
        this.currentPath = ( this.currentPath == 0 ) ? this.currentPath = 4 : this.currentPath -= 1;
      }
      this.currentTitle = this.Titles[this.currentPath];
      this.currentText  = this.Texts[this.currentPath];
    }
  }
});