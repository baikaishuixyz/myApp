import Picker from '../picker.vue';
import Panel from '../panel/time-select.vue';

export default {
  mixins: [Picker],

  name: 'ElTimeSelect',

  beforeCreate() {
    this.type = 'time-select';
    this.panel = Panel;
  }
};
