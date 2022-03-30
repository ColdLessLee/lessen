export class OrderDTO {
  trance: {
    id: string
    name: string
  }
  order_list: {
    user?: string
    id: string
  }
  contract: {
    user: string
    id: string
    image: any
  }
}
