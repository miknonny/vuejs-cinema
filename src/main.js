import Vue from 'vue';
import './style.scss';
import genres from './util/genres';

new Vue({
  el: '#app',
  components: {
    'movie-list': {
      template: `<div id="movie-list">
                  <div v-for="movie in movies" class="movie">{{ movie.title }}</div>
                </div>`,
      data() {
        return {
          movies: [
            { title: 'pulp fiction' },
            { title: 'Home Alone' },
            { title: 'Austin Powers'}
          ]
        };
      }
    },
    'movie-filter': {
      
      template: `<div id="movie-filter">
                  <h2>Filter results</h2>
                  <check-filter v-for="genre in genres" v-bind:title="genre"></check-filter>
                </div>`,
      data() {
        return {
          genres
        }
      },
      components: {
        'check-filter': {
          data() {
            return {
              checked: false
            }
          },
          props: [ 'title' ],
          template: `<div v-bind:class="{ 'check-filter': true, active: checked } " v-on:click="checked = !checked">
                      <span class="checkbox"></span>
                      <span class="check-filter-title">{{ title }}</span>
                    </div>`
        }
      }
    }
  }
});