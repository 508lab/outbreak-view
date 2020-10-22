import Vue from 'vue'
import moment from 'moment'

Vue.filter('dateFormat', (str, partten = "YYYY-MM-DD") => {
    return moment(str).format(partten);
})
