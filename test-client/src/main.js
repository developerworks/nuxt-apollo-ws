import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-client';
import { SubscriptionClient } from 'subscriptions-transport-ws';

const GRAPHQL_ENDPOINT = 'ws://localhost:3000/graphql';

const client = new SubscriptionClient(GRAPHQL_ENDPOINT, {
    reconnect: true,
});

const apolloClient = new ApolloClient({
    networkInterface: client,
});

Vue.use(VueApollo, {
    apolloClient,
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

// Your app is now subscription-ready!
import App from './App.vue'

new Vue({
    el: '#app',
    apolloProvider,
    render: h => h(App)
})