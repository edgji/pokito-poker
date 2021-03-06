import GameRoom from '@/components/GameRoom'
import GamePlay from '@/components/GamePlay'
import GameEdit from '@/components/GameEdit'
import UserLogin from '@/components/UserLogin'

export default [
  {
    name: 'game',
    path: '/game/:gameId([-_0-9A-Za-z]{20})',
    component: GameRoom,
    children: [
      {
        name: 'game.play',
        path: 'play',
        component: GamePlay
      },
      {
        name: 'game.edit',
        path: 'edit',
        component: GameEdit
      },
    ],
    props: route => ({
      gameId: route.params.gameId,
      gameRef: route.params.gameRef || false
    })
  },
  {
    name: 'login',
    path: '/login',
    component: UserLogin
  },
  // {
  //   path: '*',
  //   redirect: '/'
  // },
]
