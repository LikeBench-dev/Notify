import loadMore from '../assets/js/loadMore.js'
import getNotify from '../assets/js/Notify'
import getNotifyLazy from '../assets/js/NotifyLazy'

export default {
    state: {
        messages: [],
        messagesMain: []
    },
    mutations: {
        setMessage (state, payload) {
            state.messages = payload
        },
        setMessageMain (state, payload) {
            state.messagesMain = payload
        },
        loadMessages(state, payload) {
            state.messagesMain = [...state.messagesMain, ...payload]
        }
    },
    actions: {
        setMessage ({commit}, payload) {
            commit('setMessage', payload)
        },
        setMessageMain ({commit}, payload) {
            commit('setMessageMain', payload)
        },
        loadMessages ({commit, getters}) {
            let res = getters.getMessageFilter
            commit('loadMessages', loadMore(res, 3))
        },
        getNotify() {
            getNotify.call(this);
        },
        getNotifyLazy() {
            getNotifyLazy.call(this);
        }
    },
    getters: {
        getMessageFilter (state) {
            return state.messages.filter(mes => {
                return mes.main === false
            })
        },
        getMessageMain (state) {
            return state.messagesMain
        }
    },
}
