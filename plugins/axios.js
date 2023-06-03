export default ({ $axios, env }) => {
  $axios.onRequest((config) => {
    config.headers.common.Authorization = env.API_TOKEN
  })
}
