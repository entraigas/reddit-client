import RedditService from '~/service/reddit'

export default function({ app, $axios }) {
  app.provide = () => ({
    $reddit: new RedditService($axios)
  })
}
