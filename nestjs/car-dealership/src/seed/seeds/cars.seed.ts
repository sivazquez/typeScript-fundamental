import {Car} from '../../cars/interfaces/car.interface'
import {v4 as uuid} from 'uuid'

export const CARSSEED:Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla'
  },
  {
    id: uuid(),
    brand: 'Nissan',
    model: 'Sentra'
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic'
  },
  {
    id: uuid(),
    brand: 'Mazda',
    model: 'Mazda 2'
  }
]