<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 >Directives Exercise:</h1>
                <button v-customOn:click="Clicked" class='btn btn-primary'>Click Me</button>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

            </div>
            <br>
            <div style="width: 100px; height: 100px; backgroundColor: lightgreen"
            v-customOn:mouseenter="mouseEnter"
            v-customOn:mouseleave="mouseLeave">


            </div>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <p> {{text | toUppercase }}</p>
              <hr>
              <input v-model="filterText">
              <ul>
                <li v-for="fruit in filteredFruits"> {{ fruit | toUppercase}}</li>
              </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          text: 'Hello There',
          fruits: ['Apple','Banana', 'Mango', 'Melon'],
          filterText: ''
        }
      },
      directives: {
        customOn: {
          bind(el, binding, vnode) {
            // el.onclick = function {
            //   binding.value();
            // }
            const type = binding.arg;
            const fn = binding.value
            el.addEventListener(type, fn)
          }
        }
      },
      computed: {
        filteredFruits() {
          return this.fruits.filter((element) => {
            return element.match(this.filterText);
          });
        }
      },
      methods: {
        Clicked() {
          alert('clicked');
        },
        mouseEnter() {
          console.log('Mouse entered!');
        },
        mouseLeave() {
          console.log('Mouse left!');
        }
      },
      filters: {
        toUppercase(value) {
          return value.toUpperCase();
        }
      }
    }
</script>

<style>
</style>
