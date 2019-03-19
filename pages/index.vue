<template>
<no-ssr>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">

      <!-- Particles -->
      <div id="ses_particles">
        <particles />
      </div>

      <!-- Splash -->
      <div class="section ses_splash ses_coverhome">
        <v-container>
          <h1 class="ses_headline">Enginering the Future, Today</h1>
          <h2 class="ses_subheadline">We Are Synergy Efficiency Solutions</h2>
        </v-container>
        <div id="ses_more">
          <div class="ses_headline-more">
            <span class="hidden-sm-and-down"><i class="fas fa-3x fa-chevron-down"></i><br>SCROLL DOWN</span>
            <span class="hidden-sm-and-up"><i class="fas fa-3x fa-chevron-up"></i><br>SWIPE UP</span>
          </div>
        </div>
      </div>

      <!-- About -->
      <div class="section">
        <div class="slide ses_coverabout text-xs-center">
          <v-container>
            <h1 class="ses_headline">About</h1>
            <h2 class="ses_subheadline">More</h2>
          </v-container>
        </div>
        <div class="slide ses_coverpage">


        </div>
      </div>

      <!-- Services -->
      <div class="section">
        <div class="slide ses_coverservices text-xs-center">
          <v-container>
            <h1 class="ses_headline">Services</h1>
            <h2 class="ses_subheadline">More</h2>
          </v-container>
        </div>
        <div class="slide ses_coverpage text-xs-center">
          <v-layout column justify-center align-center>
            <img src="/img/favicon.png" width="100px" />
            <h1>About SES</h1>
          </v-layout>
          <v-container id="scroll-target" style="max-height: 400px" class="scroll-y ses_scrollable">
            <v-layout v-scroll:#scroll-target="onScroll" column align-center justify-center style="height: 1000px" pa-3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus nisi in dolor fermentum consectetur. Proin lobortis, ligula ut vehicula tincidunt, nibh sem ultricies velit, laoreet hendrerit magna augue nec ex. Pellentesque
                cursus consequat porta. Fusce et nisi ornare, euismod urna et, ultrices mauris. Etiam aliquet nisi diam, sed sollicitudin nunc facilisis sit amet. Aliquam erat volutpat. Proin ac volutpat erat. Nullam fermentum pellentesque auctor.
                Etiam ac ex quis dolor molestie blandit. Cras tincidunt tortor a libero congue, eu pretium tellus gravida. Nulla facilisi. Nunc tempor commodo sem, non ultrices tellus aliquet eu. Nam vulputate quam nec est suscipit ornare. Mauris sit
                amet justo felis.</p>
              <p>Nam sed accumsan nulla, eget iaculis risus. Pellentesque maximus diam sit amet vulputate bibendum. Pellentesque justo metus, sollicitudin id laoreet nec, auctor a urna. Nulla risus augue, porta tempus placerat non, rutrum sed erat.
                Nam
                luctus eros quis nulla dignissim, et molestie massa fermentum. Cras aliquam lectus a dapibus ornare. Etiam viverra luctus iaculis.</p>
              <p>Nulla semper nec elit id ullamcorper. Donec finibus leo eget eros interdum, sed tincidunt lorem sagittis. Mauris a pharetra orci. Mauris arcu tellus, sagittis quis sodales at, auctor in nunc. Sed tristique dapibus magna, nec
                ullamcorper nibh condimentum vel. Phasellus pellentesque interdum velit accumsan ullamcorper. In ullamcorper, diam vitae convallis sodales, ex augue egestas odio, in posuere ligula velit sed turpis.</p>
              <p>Etiam commodo a diam a congue. Sed ullamcorper tortor rhoncus, congue urna a, dapibus mi. Donec in arcu tincidunt, sagittis lectus non, pellentesque ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos
                himenaeos. Proin at nisi vitae urna elementum pretium. Vestibulum a mattis ipsum, scelerisque pharetra nunc. Etiam convallis quis neque ac auctor. Aliquam pulvinar velit efficitur tempus mattis. Phasellus luctus ac augue nec
                elementum.
                Aliquam mattis quam non aliquet egestas. Suspendisse potenti. Sed eu dui ut tortor volutpat placerat mattis vel ligula.</p>
              <p>Donec sollicitudin dolor sapien, sit amet viverra lectus laoreet ac. In auctor sodales sem sit amet sagittis. Nullam quis metus diam. Nam vitae pretium ante. Aliquam interdum justo sed vehicula malesuada. Morbi justo lacus, vulputate
                nec dignissim sit amet, posuere nec arcu. Suspendisse potenti. Mauris pellentesque elementum dapibus. Integer ut nisl volutpat ante blandit vestibulum et ac sem. Etiam elementum posuere urna, at euismod massa dapibus interdum.
                Phasellus
                tincidunt eget urna ut bibendum. Cras in libero at sapien mattis gravida. Proin id euismod tortor. Donec id lacus vel nibh iaculis consequat in vel lorem. Integer mi velit, tempus et nulla eget, suscipit interdum urna.</p>
            </v-layout>
          </v-container>
        </div>
      </div>

      <!-- Portfolio -->
      <div class="section">
        <div class="slide ses_coverportfolio text-xs-center">
          <v-container>
            <h1 class="ses_headline">Portfolio</h1>
            <h2 class="ses_subheadline">More</h2>
          </v-container>
        </div>
        <div class="slide ses_coverpage text-xs-center">
          <v-container>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus nisi in dolor fermentum consectetur. Proin lobortis, ligula ut vehicula tincidunt, nibh sem ultricies velit, laoreet hendrerit magna augue nec ex. Pellentesque
              cursus consequat porta. Fusce et nisi ornare, euismod urna et, ultrices mauris. Etiam aliquet nisi diam, sed sollicitudin nunc facilisis sit amet. Aliquam erat volutpat. Proin ac volutpat erat. Nullam fermentum pellentesque auctor.
              Etiam ac ex quis dolor molestie blandit. Cras tincidunt tortor a libero congue, eu pretium tellus gravida. Nulla facilisi. Nunc tempor commodo sem, non ultrices tellus aliquet eu. Nam vulputate quam nec est suscipit ornare. Mauris sit
              amet justo felis.</p>
            <p>Nam sed accumsan nulla, eget iaculis risus. Pellentesque maximus diam sit amet vulputate bibendum. Pellentesque justo metus, sollicitudin id laoreet nec, auctor a urna. Nulla risus augue, porta tempus placerat non, rutrum sed erat. Nam
              luctus eros quis nulla dignissim, et molestie massa fermentum. Cras aliquam lectus a dapibus ornare. Etiam viverra luctus iaculis.</p>
            <p>Nulla semper nec elit id ullamcorper. Donec finibus leo eget eros interdum, sed tincidunt lorem sagittis. Mauris a pharetra orci. Mauris arcu tellus, sagittis quis sodales at, auctor in nunc. Sed tristique dapibus magna, nec
              ullamcorper nibh condimentum vel. Phasellus pellentesque interdum velit accumsan ullamcorper. In ullamcorper, diam vitae convallis sodales, ex augue egestas odio, in posuere ligula velit sed turpis.</p>
            <p>Etiam commodo a diam a congue. Sed ullamcorper tortor rhoncus, congue urna a, dapibus mi. Donec in arcu tincidunt, sagittis lectus non, pellentesque ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Proin at nisi vitae urna elementum pretium. Vestibulum a mattis ipsum, scelerisque pharetra nunc. Etiam convallis quis neque ac auctor. Aliquam pulvinar velit efficitur tempus mattis. Phasellus luctus ac augue nec elementum.
              Aliquam mattis quam non aliquet egestas. Suspendisse potenti. Sed eu dui ut tortor volutpat placerat mattis vel ligula.</p>
            <p>Donec sollicitudin dolor sapien, sit amet viverra lectus laoreet ac. In auctor sodales sem sit amet sagittis. Nullam quis metus diam. Nam vitae pretium ante. Aliquam interdum justo sed vehicula malesuada. Morbi justo lacus, vulputate
              nec dignissim sit amet, posuere nec arcu. Suspendisse potenti. Mauris pellentesque elementum dapibus. Integer ut nisl volutpat ante blandit vestibulum et ac sem. Etiam elementum posuere urna, at euismod massa dapibus interdum. Phasellus
              tincidunt eget urna ut bibendum. Cras in libero at sapien mattis gravida. Proin id euismod tortor. Donec id lacus vel nibh iaculis consequat in vel lorem. Integer mi velit, tempus et nulla eget, suscipit interdum urna.</p>
          </v-container>
        </div>
      </div>

      <!-- Resource -->
      <div class="section">
        <div class="slide ses_coverresource text-xs-center">
          <v-container>
            <h1 class="ses_headline">Resource</h1>
            <h2 class="ses_subheadline">More</h2>
          </v-container>
        </div>
        <div class="slide ses_coverpage text-xs-center">
          <v-container>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus nisi in dolor fermentum consectetur. Proin lobortis, ligula ut vehicula tincidunt, nibh sem ultricies velit, laoreet hendrerit magna augue nec ex. Pellentesque
              cursus consequat porta. Fusce et nisi ornare, euismod urna et, ultrices mauris. Etiam aliquet nisi diam, sed sollicitudin nunc facilisis sit amet. Aliquam erat volutpat. Proin ac volutpat erat. Nullam fermentum pellentesque auctor.
              Etiam ac ex quis dolor molestie blandit. Cras tincidunt tortor a libero congue, eu pretium tellus gravida. Nulla facilisi. Nunc tempor commodo sem, non ultrices tellus aliquet eu. Nam vulputate quam nec est suscipit ornare. Mauris sit
              amet justo felis.</p>
            <p>Nam sed accumsan nulla, eget iaculis risus. Pellentesque maximus diam sit amet vulputate bibendum. Pellentesque justo metus, sollicitudin id laoreet nec, auctor a urna. Nulla risus augue, porta tempus placerat non, rutrum sed erat. Nam
              luctus eros quis nulla dignissim, et molestie massa fermentum. Cras aliquam lectus a dapibus ornare. Etiam viverra luctus iaculis.</p>
            <p>Nulla semper nec elit id ullamcorper. Donec finibus leo eget eros interdum, sed tincidunt lorem sagittis. Mauris a pharetra orci. Mauris arcu tellus, sagittis quis sodales at, auctor in nunc. Sed tristique dapibus magna, nec
              ullamcorper nibh condimentum vel. Phasellus pellentesque interdum velit accumsan ullamcorper. In ullamcorper, diam vitae convallis sodales, ex augue egestas odio, in posuere ligula velit sed turpis.</p>
            <p>Etiam commodo a diam a congue. Sed ullamcorper tortor rhoncus, congue urna a, dapibus mi. Donec in arcu tincidunt, sagittis lectus non, pellentesque ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Proin at nisi vitae urna elementum pretium. Vestibulum a mattis ipsum, scelerisque pharetra nunc. Etiam convallis quis neque ac auctor. Aliquam pulvinar velit efficitur tempus mattis. Phasellus luctus ac augue nec elementum.
              Aliquam mattis quam non aliquet egestas. Suspendisse potenti. Sed eu dui ut tortor volutpat placerat mattis vel ligula.</p>
            <p>Donec sollicitudin dolor sapien, sit amet viverra lectus laoreet ac. In auctor sodales sem sit amet sagittis. Nullam quis metus diam. Nam vitae pretium ante. Aliquam interdum justo sed vehicula malesuada. Morbi justo lacus, vulputate
              nec dignissim sit amet, posuere nec arcu. Suspendisse potenti. Mauris pellentesque elementum dapibus. Integer ut nisl volutpat ante blandit vestibulum et ac sem. Etiam elementum posuere urna, at euismod massa dapibus interdum. Phasellus
              tincidunt eget urna ut bibendum. Cras in libero at sapien mattis gravida. Proin id euismod tortor. Donec id lacus vel nibh iaculis consequat in vel lorem. Integer mi velit, tempus et nulla eget, suscipit interdum urna.</p>
          </v-container>
        </div>
      </div>

      <!-- Case Study -->
      <div class="section">
        <div class="slide ses_covercasestudy text-xs-center">
          <v-container>
            <h1 class="ses_headline">Case Study</h1>
            <h2 class="ses_subheadline">More</h2>
          </v-container>
        </div>
        <div class="slide ses_coverpage text-xs-center">
          <v-container>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus nisi in dolor fermentum consectetur. Proin lobortis, ligula ut vehicula tincidunt, nibh sem ultricies velit, laoreet hendrerit magna augue nec ex. Pellentesque
              cursus consequat porta. Fusce et nisi ornare, euismod urna et, ultrices mauris. Etiam aliquet nisi diam, sed sollicitudin nunc facilisis sit amet. Aliquam erat volutpat. Proin ac volutpat erat. Nullam fermentum pellentesque auctor.
              Etiam ac ex quis dolor molestie blandit. Cras tincidunt tortor a libero congue, eu pretium tellus gravida. Nulla facilisi. Nunc tempor commodo sem, non ultrices tellus aliquet eu. Nam vulputate quam nec est suscipit ornare. Mauris sit
              amet justo felis.</p>
            <p>Nam sed accumsan nulla, eget iaculis risus. Pellentesque maximus diam sit amet vulputate bibendum. Pellentesque justo metus, sollicitudin id laoreet nec, auctor a urna. Nulla risus augue, porta tempus placerat non, rutrum sed erat. Nam
              luctus eros quis nulla dignissim, et molestie massa fermentum. Cras aliquam lectus a dapibus ornare. Etiam viverra luctus iaculis.</p>
            <p>Nulla semper nec elit id ullamcorper. Donec finibus leo eget eros interdum, sed tincidunt lorem sagittis. Mauris a pharetra orci. Mauris arcu tellus, sagittis quis sodales at, auctor in nunc. Sed tristique dapibus magna, nec
              ullamcorper nibh condimentum vel. Phasellus pellentesque interdum velit accumsan ullamcorper. In ullamcorper, diam vitae convallis sodales, ex augue egestas odio, in posuere ligula velit sed turpis.</p>
            <p>Etiam commodo a diam a congue. Sed ullamcorper tortor rhoncus, congue urna a, dapibus mi. Donec in arcu tincidunt, sagittis lectus non, pellentesque ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Proin at nisi vitae urna elementum pretium. Vestibulum a mattis ipsum, scelerisque pharetra nunc. Etiam convallis quis neque ac auctor. Aliquam pulvinar velit efficitur tempus mattis. Phasellus luctus ac augue nec elementum.
              Aliquam mattis quam non aliquet egestas. Suspendisse potenti. Sed eu dui ut tortor volutpat placerat mattis vel ligula.</p>
            <p>Donec sollicitudin dolor sapien, sit amet viverra lectus laoreet ac. In auctor sodales sem sit amet sagittis. Nullam quis metus diam. Nam vitae pretium ante. Aliquam interdum justo sed vehicula malesuada. Morbi justo lacus, vulputate
              nec dignissim sit amet, posuere nec arcu. Suspendisse potenti. Mauris pellentesque elementum dapibus. Integer ut nisl volutpat ante blandit vestibulum et ac sem. Etiam elementum posuere urna, at euismod massa dapibus interdum. Phasellus
              tincidunt eget urna ut bibendum. Cras in libero at sapien mattis gravida. Proin id euismod tortor. Donec id lacus vel nibh iaculis consequat in vel lorem. Integer mi velit, tempus et nulla eget, suscipit interdum urna.</p>
          </v-container>
        </div>
      </div>

      <!-- Blog -->
      <div class="section">
        <div class="slide ses_coverblog text-xs-center">
          <v-container>
            <h1 class="ses_headline">Blog</h1>
            <h2 class="ses_subheadline">More</h2>
          </v-container>
        </div>
        <div class="slide ses_coverpage text-xs-center">
          <v-container>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus nisi in dolor fermentum consectetur. Proin lobortis, ligula ut vehicula tincidunt, nibh sem ultricies velit, laoreet hendrerit magna augue nec ex. Pellentesque
              cursus consequat porta. Fusce et nisi ornare, euismod urna et, ultrices mauris. Etiam aliquet nisi diam, sed sollicitudin nunc facilisis sit amet. Aliquam erat volutpat. Proin ac volutpat erat. Nullam fermentum pellentesque auctor.
              Etiam ac ex quis dolor molestie blandit. Cras tincidunt tortor a libero congue, eu pretium tellus gravida. Nulla facilisi. Nunc tempor commodo sem, non ultrices tellus aliquet eu. Nam vulputate quam nec est suscipit ornare. Mauris sit
              amet justo felis.</p>
            <p>Nam sed accumsan nulla, eget iaculis risus. Pellentesque maximus diam sit amet vulputate bibendum. Pellentesque justo metus, sollicitudin id laoreet nec, auctor a urna. Nulla risus augue, porta tempus placerat non, rutrum sed erat. Nam
              luctus eros quis nulla dignissim, et molestie massa fermentum. Cras aliquam lectus a dapibus ornare. Etiam viverra luctus iaculis.</p>
            <p>Nulla semper nec elit id ullamcorper. Donec finibus leo eget eros interdum, sed tincidunt lorem sagittis. Mauris a pharetra orci. Mauris arcu tellus, sagittis quis sodales at, auctor in nunc. Sed tristique dapibus magna, nec
              ullamcorper nibh condimentum vel. Phasellus pellentesque interdum velit accumsan ullamcorper. In ullamcorper, diam vitae convallis sodales, ex augue egestas odio, in posuere ligula velit sed turpis.</p>
            <p>Etiam commodo a diam a congue. Sed ullamcorper tortor rhoncus, congue urna a, dapibus mi. Donec in arcu tincidunt, sagittis lectus non, pellentesque ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Proin at nisi vitae urna elementum pretium. Vestibulum a mattis ipsum, scelerisque pharetra nunc. Etiam convallis quis neque ac auctor. Aliquam pulvinar velit efficitur tempus mattis. Phasellus luctus ac augue nec elementum.
              Aliquam mattis quam non aliquet egestas. Suspendisse potenti. Sed eu dui ut tortor volutpat placerat mattis vel ligula.</p>
            <p>Donec sollicitudin dolor sapien, sit amet viverra lectus laoreet ac. In auctor sodales sem sit amet sagittis. Nullam quis metus diam. Nam vitae pretium ante. Aliquam interdum justo sed vehicula malesuada. Morbi justo lacus, vulputate
              nec dignissim sit amet, posuere nec arcu. Suspendisse potenti. Mauris pellentesque elementum dapibus. Integer ut nisl volutpat ante blandit vestibulum et ac sem. Etiam elementum posuere urna, at euismod massa dapibus interdum. Phasellus
              tincidunt eget urna ut bibendum. Cras in libero at sapien mattis gravida. Proin id euismod tortor. Donec id lacus vel nibh iaculis consequat in vel lorem. Integer mi velit, tempus et nulla eget, suscipit interdum urna.</p>
          </v-container>
        </div>
      </div>

      <!-- Career -->
      <div class="section">
        <div class="slide ses_covercareer text-xs-center">
          <v-container>
            <h1 class="ses_headline">Career</h1>
            <h2 class="ses_subheadline">More</h2>
          </v-container>
        </div>
        <div class="slide ses_coverpage text-xs-center">
          <v-container>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus nisi in dolor fermentum consectetur. Proin lobortis, ligula ut vehicula tincidunt, nibh sem ultricies velit, laoreet hendrerit magna augue nec ex. Pellentesque
              cursus consequat porta. Fusce et nisi ornare, euismod urna et, ultrices mauris. Etiam aliquet nisi diam, sed sollicitudin nunc facilisis sit amet. Aliquam erat volutpat. Proin ac volutpat erat. Nullam fermentum pellentesque auctor.
              Etiam ac ex quis dolor molestie blandit. Cras tincidunt tortor a libero congue, eu pretium tellus gravida. Nulla facilisi. Nunc tempor commodo sem, non ultrices tellus aliquet eu. Nam vulputate quam nec est suscipit ornare. Mauris sit
              amet justo felis.</p>
            <p>Nam sed accumsan nulla, eget iaculis risus. Pellentesque maximus diam sit amet vulputate bibendum. Pellentesque justo metus, sollicitudin id laoreet nec, auctor a urna. Nulla risus augue, porta tempus placerat non, rutrum sed erat. Nam
              luctus eros quis nulla dignissim, et molestie massa fermentum. Cras aliquam lectus a dapibus ornare. Etiam viverra luctus iaculis.</p>
            <p>Nulla semper nec elit id ullamcorper. Donec finibus leo eget eros interdum, sed tincidunt lorem sagittis. Mauris a pharetra orci. Mauris arcu tellus, sagittis quis sodales at, auctor in nunc. Sed tristique dapibus magna, nec
              ullamcorper nibh condimentum vel. Phasellus pellentesque interdum velit accumsan ullamcorper. In ullamcorper, diam vitae convallis sodales, ex augue egestas odio, in posuere ligula velit sed turpis.</p>
            <p>Etiam commodo a diam a congue. Sed ullamcorper tortor rhoncus, congue urna a, dapibus mi. Donec in arcu tincidunt, sagittis lectus non, pellentesque ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Proin at nisi vitae urna elementum pretium. Vestibulum a mattis ipsum, scelerisque pharetra nunc. Etiam convallis quis neque ac auctor. Aliquam pulvinar velit efficitur tempus mattis. Phasellus luctus ac augue nec elementum.
              Aliquam mattis quam non aliquet egestas. Suspendisse potenti. Sed eu dui ut tortor volutpat placerat mattis vel ligula.</p>
            <p>Donec sollicitudin dolor sapien, sit amet viverra lectus laoreet ac. In auctor sodales sem sit amet sagittis. Nullam quis metus diam. Nam vitae pretium ante. Aliquam interdum justo sed vehicula malesuada. Morbi justo lacus, vulputate
              nec dignissim sit amet, posuere nec arcu. Suspendisse potenti. Mauris pellentesque elementum dapibus. Integer ut nisl volutpat ante blandit vestibulum et ac sem. Etiam elementum posuere urna, at euismod massa dapibus interdum. Phasellus
              tincidunt eget urna ut bibendum. Cras in libero at sapien mattis gravida. Proin id euismod tortor. Donec id lacus vel nibh iaculis consequat in vel lorem. Integer mi velit, tempus et nulla eget, suscipit interdum urna.</p>
          </v-container>
        </div>
      </div>

    </full-page>
  </div>
</no-ssr>
</template>
<script>
import Particles from '~/components/Particles.vue'
export default {
  layout: 'front',
  components: {
    Particles
  },
  data() {
    return {
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        scrollBar: false,
        normalScrollElements: '.ses_scrollable'
      }
    }
  },
  methods: {
    afterLoad() {}
  }
}
</script>
<style>
.ses_splash.ses_coverhome {
  background-image: url('/img/home.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}

.ses_splash::after {
  background-image: linear-gradient(to top, transparent 0%, black 170%);
  height: 500px;
  margin-top: 0px;
  content: '';
  position: absolute;
  display: block;
  width: 100%;
}

.ses_splash .ses_headline {
  font-size: 45px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  padding-top: 0px;
  padding-bottom: 10px;
  color: #eeeeee;
  text-shadow: 2px 2px 2px #444;
  z-index: 99;
}

.ses_splash .ses_subheadline {
  font-weight: 400;
  font-size: 18px;
  color: #eee;
  text-align: center;
}

.ses_coverabout,
.ses_coverservices,
.ses_coverportfolio,
.ses_coverresource,
.ses_covercasestudy,
.ses_coverblog,
.ses_covercareer {
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  color: #f0f0f0;
}

.ses_coverabout {
  background-image: url('/img/about.jpg');
}

.ses_coverservices {
  background-image: url('/img/services.jpg');
}

.ses_coverportfolio {
  background-image: url('/img/portfolio.jpg');
}

.ses_coverresource {
  background-image: url('/img/resource.jpg');
}

.ses_covercasestudy {
  background-image: url('/img/casestudy.jpg');
}

.ses_coverblog {
  background-image: url('/img/blog.jpg');
}

.ses_covercareer {
  background-image: url('/img/career.jpg');
}

.ses_coverpage {
  background-color: #e5e5e5;
  background-image: url('/img/poly2.png');
  background-position: center center;
  background-repeat: repeat;
}

#ses_more {
  color: #eeeeee;
}

.ses_splash #ses_more {
  position: absolute;
  top: 85%;
  margin: 0 auto 0;
  width: 100%;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}


.fp-controlArrow.fp-prev,
.fp-controlArrow.fp-next {
  display: none;
}


#ses_particles {
  z-index: 1;
  position: absolute;
  width: 100%;
  height: auto;
  display: block;
}

.ses_link {
  text-decoration: none;
  color: #333;
}
</style>
