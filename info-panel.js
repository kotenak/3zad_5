/* global AFRAME */
AFRAME.registerComponent('info-panel', {
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');

    this.movieTitleEl = document.querySelector('#movieTitle');
    this.movieDescriptionEl = document.querySelector('#movieDescription');

    this.movieInfo = {
      karigurashiButton: {
        title: 'Soichi (2002) ',
        imgEl: document.querySelector('#karigurashiMovieImage'),
        description: 'I'll remember you... I'll make your life a living nightmare!" Souichi, the youngest child of the Tsujii family, loves to walk around with nails in his mouth and cast terrible curses on people, which is why amazing and inexplicable events constantly happen around him. Welcome to the sinister and darkly humorous world of Souichi.'
      },
      kazetachinuButton: {
        title: 'Tomie (1987)) ',
        imgEl: document.querySelector('#kazetachinuMovieImage'),
        description: 'She subjugates men, luring them into the nets of mad love. Her name is Tomie. And her lives are countless. No matter how many times you kill her, the beautiful Tomie always returns. Ah, Tomie! The time will come when the whole world will bow before you.'
      },
      ponyoButton: {
        title: 'Dead Man's Love (2011) ',
        imgEl: document.querySelector('#ponyoMovieImage'),
        description: 'A mysterious handsome man wanders around the city, suddenly appearing before girls telling fortunes at crossroads and destroying their most cherished dreams with cruel predictions. All those who are unlucky enough to meet him, for some unknown reason, commit suicide in the most cruel way. The evening city, shrouded in thick fog, is permeated with the smell of imminent death. Join the unusual madness of this story, flavored with drops of fresh blood!'
      }
    };

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.backgroundEl = document.querySelector('#background');
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('click', this.onMenuButtonClick);
    }
    this.backgroundEl.addEventListener('click', this.onBackgroundClick);
    this.el.object3D.renderOrder = 9999999;
    this.el.object3D.depthTest = false;
    fadeBackgroundEl.object3D.renderOrder = 9;
    fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
  },

  onMenuButtonClick: function (evt) {
    var movieInfo = this.movieInfo[evt.currentTarget.id];

    this.backgroundEl.object3D.scale.set(1, 1, 1);

    this.el.object3D.scale.set(1, 1, 1);
    if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
    this.el.object3D.visible = true;
    this.fadeBackgroundEl.object3D.visible = true;

    if (this.movieImageEl) { this.movieImageEl.object3D.visible = false; }
    this.movieImageEl = movieInfo.imgEl;
    this.movieImageEl.object3D.visible = true;

    this.movieTitleEl.setAttribute('text', 'value', movieInfo.title);
    this.movieDescriptionEl.setAttribute('text', 'value', movieInfo.description);
  },

  onBackgroundClick: function (evt) {
    this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    this.fadeBackgroundEl.object3D.visible = false;
  }
});
