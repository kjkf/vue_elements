<template>
  <div id="app">
    <h1>Form Elements</h1>
    <div class="wrapper">
      <div class="row">
        <h3 class="cols title">Input with mask (v-mask)</h3>
        <div class="cols elem-wrapper">
          <input :style="styleObject" type="text" v-mask="'AAAAA'" v-model="myInputModel">
          <input type="text" v-mask="myMask" v-model="myInputModel2">
        </div>
        <div class="cols big">
          <span class="important"><a href="https://www.npmjs.com/package/v-mask">v-mask</a></span>
          <table>
            <thead>
              <tr>
                <th>Value</th>
                <th>Format</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#</td>
                <td>Number (0-9)</td>
              </tr>
              <tr>
                <td>A</td>
                <td>Letter in any case (a-z,A-Z)</td>
              </tr>
              <tr>
                <td>N</td>
                <td>Number or letter</td>
              </tr>
              <tr>
                <td>X</td>
                <td>Any symbol</td>
              </tr>
              <tr>
                <td>?</td>
                <td>Optional (next character)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <h3 class="cols title">datapicker</h3>
        <div class="cols elem-wrapper">
          <date-picker
            v-model="date1"
            :first-day-of-week="1"
            lang="ru"
            format="DD.MM.YYYY">
          </date-picker>

          <date-picker
            v-model="time1"
            lang="ru"
            type="time"
            format="HH:mm"
            placeholder="Выберите время">
          </date-picker>
        </div>
        <div class="cols big">
          <span class="important"><a href="https://www.npmjs.com/package/vue2-datepicker">vue2-datepicker</a></span>
          <br>
          <span class="spanData"></span> <!--  {{date1.toLocaleFormat('%d-%b-%Y')}} -->
        </div>
      </div>

      <div class="row">
        <h3 class="cols title">vSelect</h3>
        <div class="cols elem-wrapper">
          <v-select v-model="selected" :options="['JS','Vue.js','React']"></v-select>
        </div>
        <div class="cols big">
          <span class="important"><a href="https://www.npmjs.com/package/vue-select">vSelect</a></span>
        </div>
      </div>
      <div class="row"><button type="button" @click="changeCss">change css</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      myInputModel: '',
      myInputModel2: '',
      myMask: '+#?#?#?(###?)##?#?_####',

      date1: '',
      time1: '',

      selected: '',

      isActive: false
    }
  },
  computed: {
    styleObject: function () {
      if (this.isActive) {
        return {
          background: 'darkblue',
          color: '#fff'
        }
      } else {
        return {}
      }
    }
  },
  mounted () {
    let link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', 'vue-select.css')
    document.head.appendChild(link)
  },
  methods: {
    changeCss: function () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style>
.spanData {
  background: green;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 200vh;
}
.row {
  display: flex;
  width: 95%;
  align-items: center;
  border: 1px solid darkblue;
  margin-top: 2px;
  padding: 2px;
}
.row:nth-child(odd) {
  background: lightgreen
}
.row:nth-child(even) {
  background: lightblue
}
.cols {
  flex:1;
}
.cols.big {
  font-size: 12px;
}
.important {
  font-size: 14px;
  font-weight: bolder;
}
.elem-wrapper>* {
  width: 90%;
  margin-bottom: 2px;
}
/* не видит стили из плагина */
.v-select{position:relative;font-family:inherit}.v-select,.v-select *{box-sizing:border-box}@-webkit-keyframes vSelectSpinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes vSelectSpinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs__fade-enter-active,.vs__fade-leave-active{transition:opacity .15s cubic-bezier(1,.5,.8,1)}.vs__fade-enter,.vs__fade-leave-to{opacity:0}.vs--disabled .vs__clear,.vs--disabled .vs__dropdown-toggle,.vs--disabled .vs__open-indicator,.vs--disabled .vs__search,.vs--disabled .vs__selected{cursor:not-allowed;background-color:#f8f8f8}.v-select[dir=rtl] .vs__actions{padding:0 3px 0 6px}.v-select[dir=rtl] .vs__clear{margin-left:6px;margin-right:0}.v-select[dir=rtl] .vs__deselect{margin-left:0;margin-right:2px}.v-select[dir=rtl] .vs__dropdown-menu{text-align:right}.vs__dropdown-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:flex;padding:0 0 4px;background:none;border:1px solid rgba(60,60,60,.26);border-radius:4px;white-space:normal}.vs__selected-options{display:flex;flex-basis:100%;flex-grow:1;flex-wrap:wrap;padding:0 2px;position:relative}.vs__actions{display:flex;align-items:center;padding:4px 6px 0 3px}.vs--searchable .vs__dropdown-toggle{cursor:text}.vs--unsearchable .vs__dropdown-toggle{cursor:pointer}.vs--open .vs__dropdown-toggle{border-bottom-color:transparent;border-bottom-left-radius:0;border-bottom-right-radius:0}.vs__open-indicator{fill:rgba(60,60,60,.5);-webkit-transform:scale(1);transform:scale(1);transition:-webkit-transform .15s cubic-bezier(1,-.115,.975,.855);transition:transform .15s cubic-bezier(1,-.115,.975,.855);transition:transform .15s cubic-bezier(1,-.115,.975,.855),-webkit-transform .15s cubic-bezier(1,-.115,.975,.855);transition-timing-function:cubic-bezier(1,-.115,.975,.855)}.vs--open .vs__open-indicator{-webkit-transform:rotate(180deg) scale(1);transform:rotate(180deg) scale(1)}.vs--loading .vs__open-indicator{opacity:0}.vs__clear{fill:rgba(60,60,60,.5);padding:0;border:0;background-color:transparent;cursor:pointer;margin-right:8px}.vs__dropdown-menu{display:block;position:absolute;top:calc(100% - 1px);left:0;z-index:1000;padding:5px 0;margin:0;width:100%;max-height:350px;min-width:160px;overflow-y:auto;box-shadow:0 3px 6px 0 rgba(0,0,0,.15);border:1px solid rgba(60,60,60,.26);border-top-style:none;border-radius:0 0 4px 4px;text-align:left;list-style:none;background:#fff}.vs__no-options{text-align:center}.vs__dropdown-option{line-height:1.42857143;display:block;padding:3px 20px;clear:both;color:#333;white-space:nowrap}.vs__dropdown-option:hover{cursor:pointer}.vs__dropdown-option--highlight{background:#5897fb;color:#fff}.vs__selected{display:flex;align-items:center;background-color:#f0f0f0;border:1px solid rgba(60,60,60,.26);border-radius:4px;color:#333;line-height:1.4;margin:4px 2px 0;padding:0 .25em}.vs__deselect{display:inline-flex;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin-left:4px;padding:0;border:0;cursor:pointer;background:none;fill:rgba(60,60,60,.5);text-shadow:0 1px 0 #fff}.vs--single .vs__selected{background-color:transparent;border-color:transparent}.vs--single.vs--open .vs__selected{position:absolute;opacity:.4}.vs--single.vs--searching .vs__selected{display:none}.vs__search::-ms-clear,.vs__search::-webkit-search-cancel-button,.vs__search::-webkit-search-decoration,.vs__search::-webkit-search-results-button,.vs__search::-webkit-search-results-decoration{display:none}.vs__search,.vs__search:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;line-height:1.4;font-size:1em;border:1px solid transparent;border-left:none;outline:none;margin:4px 0 0;padding:0 7px;background:none;box-shadow:none;width:0;max-width:100%;flex-grow:1}.vs__search::-webkit-input-placeholder{color:inherit}.vs__search:-ms-input-placeholder{color:inherit}.vs__search::-ms-input-placeholder{color:inherit}.vs__search::placeholder{color:inherit}.vs--unsearchable .vs__search{opacity:1}.vs--unsearchable .vs__search:hover{cursor:pointer}.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search{opacity:.2}.vs__spinner{align-self:center;opacity:0;font-size:5px;text-indent:-9999em;overflow:hidden;border:.9em solid hsla(0,0%,39.2%,.1);border-left-color:rgba(60,60,60,.45);-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:vSelectSpinner 1.1s linear infinite;animation:vSelectSpinner 1.1s linear infinite;transition:opacity .1s}.vs__spinner,.vs__spinner:after{border-radius:50%;width:5em;height:5em}.vs--loading .vs__spinner{opacity:1}
</style>
