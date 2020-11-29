export default function notifyLazy () {
    this.dispatch('setLoading', true)
    setTimeout(() => {
        this.dispatch('getNotify')
    }, 1800)
}

