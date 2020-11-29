import axios from "axios";

export default function notify () {
    this.dispatch('setLoading', true)
    axios
        .get('https://tocode.ru/static/c/vue-pro/notifyApi.php')
        .then(response => {
            let res = response.data.notify,
                messages = [],
                messagesMain = [];

            //filter
            for (let i = 0; i < res.length; i++) {
                if (res[i].main) messagesMain.push(res[i])
                else messages.push(res[i])
            }

            this.dispatch('setMessage', messages)
            this.dispatch('setMessageMain', messagesMain)
        })
        .catch(() => {
            this.dispatch('setError', 'Network Error')
        })
        .finally( () => (this.dispatch('setLoading', false)))


}
