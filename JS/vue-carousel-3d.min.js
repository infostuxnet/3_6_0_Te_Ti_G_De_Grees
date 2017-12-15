console.clear();

new Vue({

  el: '#app',

  // Give everyone a little eye candy right off the bat.
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.nav(1);
    }, 200);
  },


  methods: {
    nav: function nav(dir) {
      this.dir = dir;
      var len = this.slides.length;
      // Loop around the array so last slide goes to first slide & vice-versa.
      this.current = (this.current + dir % len + len) % len;
    },


    // When transitioning an element out, applying `position: absolute` or `position: fixed` keeps the container from snapping in size dramatically and helps the whole transition run smoother. 
    // You can use CSS on the `-leave-active` class (see commented out CSS in the CSS tab), but that often leads to the element flying out in weird directions or snapping to the edges of the container.
    // Instead, let's apply the positioning in JavaScript with `position: fixed` and the right positioning + sizing to elements that are leaving so they don't snap in odd ways.
    sgBeforeLeave: function sgBeforeLeave(el) {
      var rect = el.getBoundingClientRect();
      el.style.width = rect.right - rect.left + 'px';
      el.style.height = rect.bottom - rect.top + 'px';
      el.style.position = 'fixed';
      el.style.top = rect.top + 'px';
      el.style.left = rect.left + 'px';
    }
  },

  computed: {
    transitionName: function transitionName() {
      return 'sg-' + (this.use3d ? '3d-' : '') + (this.dir > 0 ? 'right' : 'left');
    }
  },

  data: function data() {
    return {
      dir: 0,
      current: 0,
      use3d: true,
      slides: [{
        image: 'https://unsplash.it/800/300/?image=997',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum, lorem vel tincidunt imperdiet, nibh elit laoreet felis, a bibendum nisl tortor non orci. Donec pretium fermentum felis, quis aliquet est rutrum ut. Integer quis massa ut lacus viverra pharetra in eu lacus.</p><p>Aliquam tempus odio adipiscing diam pellentesque rhoncus. Curabitur a bibendum est. Mauris vehicula cursus risus id luctus. Curabitur accumsan venenatis nibh, non egestas ipsum vulputate ac. Vivamus consectetur dolor sit amet enim aliquet eu scelerisque ipsum hendrerit. Donec lobortis suscipit vestibulum. Nullam luctus pellentesque risus in ullamcorper. Nam neque nunc, mattis vitae ornare ut, feugiat a erat. Ut tempus iaculis augue vel pellentesque.</p>'
      }, {
        image: 'https://unsplash.it/800/300/?image=994',
        content: '<p>Vestibulum nunc massa, gravida quis porta nec, feugiat id metus. Nunc ac arcu dolor, quis vestibulum leo. Cras viverra mollis ipsum, non rhoncus lectus aliquam et. Morbi faucibus purus sit amet lacus aliquet elementum. Donec sit amet posuere enim. Cras in eros id tortor fringilla ultricies. Mauris faucibus ullamcorper velit, pulvinar varius odio eleifend eu. </p>'
      }, {
        image: 'https://unsplash.it/800/300/?image=993',
        content: '<p>Donec nunc ligula, vulputate quis mollis eu, interdum quis libero. Donec nulla ante, facilisis sit amet vulputate at, tincidunt a velit. Maecenas vestibulum, nulla sed tincidunt viverra, lorem turpis aliquam urna, ut pretium orci purus consequat augue. Etiam a enim orci, vitae pulvinar odio.</p><p>In elit urna, tincidunt a pellentesque et, scelerisque at nibh. Sed nec est sapien. Aliquam ullamcorper eros eu quam ultrices vel faucibus eros interdum. Etiam mattis eleifend sapien, eu iaculis massa feugiat sed. Aliquam erat volutpat. Vivamus facilisis ultricies eros, a pretium purus mollis id. Sed dapibus elit ut neque rutrum dignissim.Nulla eros nisl, venenatis quis rhoncus sit amet, molestie nec nisl. Pellentesque vel neque sapien, et sagittis nulla. Quisque id odio metus. Morbi adipiscing ultricies posuere. Pellentesque elementum porttitor eros in molestie. Maecenas ut leo quis nisi tempor tincidunt.</p>'
      }, {
        image: 'https://unsplash.it/800/300/?image=991',
        content: '<p>Aliquam eu iaculis mauris. Etiam arcu lectus, imperdiet sit amet volutpat vitae, commodo sed nibh. Fusce faucibus tempor cursus. Donec ut ligula tortor. Maecenas malesuada, diam vitae pharetra dictum, erat ante iaculis risus, sed sollicitudin nisl nisl vel metus. Nulla libero augue, convallis nec luctus id, iaculis nec urna. Cras vitae mi ut augue ultricies tempus.</p>'
      }, {
        image: 'https://unsplash.it/800/300/?image=990',
        content: '<p>Vestibulum euismod vehicula sollicitudin. Duis nibh justo, rhoncus ac ullamcorper nec, rutrum sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum varius posuere nisi sed aliquet. Etiam dolor nisi, placerat vel congue tempus, posuere sed erat.</p><p>Phasellus turpis eros, molestie sed consequat in, pretium at erat. In sed faucibus metus. Vestibulum fermentum libero nec eros fermentum dapibus. Duis nec libero eros. Pellentesque magna ligula, sagittis dictum fringilla at, posuere porttitor sem. Donec aliquam, ipsum quis pulvinar dapibus, augue sem viverra sapien, nec tempus odio nulla ac metus. Nunc ut augue mi, nec consequat urna.</p>'
      }, {
        image: 'https://unsplash.it/800/300/?image=994',
        content: '<p>Maecenas vestibulum, nulla sed tincidunt viverra, lorem turpis aliquam urna, ut pretium orci purus consequat augue. Etiam a enim orci, vitae pulvinar odio.</p>'
      }]
    };
  }
});




