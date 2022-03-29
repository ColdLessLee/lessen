import { Injectable } from '@nestjs/common'
import { Logger } from '@nestjs/common'
import { OrderDTO } from './order_dto/order.dto'

// const oreq = {
//   trance:'test'
// }
type OrderState = Record<string, string | number>[]
type OrderList = Record<string, string | number | Record<string, string>[]>[]
//order state

function createOrderStateResponse(): OrderState {
  return Array.from({ length: 10 }, (_, index) =>
    Object({
      timestamp: `${
        new Date().getTime() +
        Math.floor(Math.random() * 86400000) * Math.floor(Math.random() * 7 + 1)
      }`,
      city: 'Guangzhou',
      country: 'China',
      status: Math.floor(Math.random() * 5),
      info: `这是第${index}条描述`,
    }),
  )
}
//order list
const commoditryStateList: string[] = ['1', '2', '3', '4', '5', '6', '7']
function createOrderListResponse(
  u: string,
  _id: string,
  leng: number,
): OrderList {
  return Array.from({ length: leng }, () =>
    Object({
      check_state: '正常',
      commoditry_state: commoditryStateList[Math.floor(Math.random() * 7)],
      address: 'China-Guangzhou',
      user: u,
      info: [
        {
          id: 'wukong' + _id,
          model: `${Math.floor(Math.random() * 500) + 1}件`,
          image: `https://img2.baidu.com/it/u=1876855337,384305698&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500`,
        },
        {
          id: 'xiaomai' + _id,
          model: `${Math.floor(Math.random() * 500) + 1}件`,
          image: `https://img1.baidu.com/it/u=2039635158,277939928&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500`,
        },
        {
          id: 'col' + _id,
          model: `${Math.floor(Math.random() * 500) + 1}件`,
          image: `https://img1.baidu.com/it/u=3990639720,4009987721&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313`,
        },
      ],
      goods_id: `${new Date().getTime() + Math.floor(Math.random() * 640)}`,
    }),
  )
}
@Injectable()
export class OrderService {
  getOrderState(req: OrderDTO['trance']): Record<string, unknown> {
    Logger.log(req)
    return {
      id: req.id,
      name: req.name,
      trance_info: createOrderStateResponse(),
    }
  }
  getOrderList(req: OrderDTO['order_list']) {
    console.log(req)
    return createOrderListResponse(req.user, req.id, 20)
  }
  searchOrder(req: OrderDTO['order_list']) {
    console.log(req)
    return Array.from({ length: 1 }, () =>
      Object({
        check_state: '正常',
        commoditry_state: commoditryStateList[Math.floor(Math.random() * 7)],
        address: 'China-Guangzhou',
        user: req.user,
        info: [
          {
            id: 'wukong',
            model: `${Math.floor(Math.random() * 500) + 1}件`,
            image: `https://img2.baidu.com/it/u=1876855337,384305698&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500`,
          },
          {
            id: 'xiaomai',
            model: `${Math.floor(Math.random() * 500) + 1}件`,
            image: `https://img1.baidu.com/it/u=2039635158,277939928&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500`,
          },
          {
            id: 'col',
            model: `${Math.floor(Math.random() * 500) + 1}件`,
            image: `https://img1.baidu.com/it/u=3990639720,4009987721&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313`,
          },
        ],
        goods_id: req.id,
      }),
    )
  }
}
