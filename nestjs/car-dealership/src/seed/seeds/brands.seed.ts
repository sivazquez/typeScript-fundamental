import {Brand} from '../../brands/interfaces/brand.interface'
import {v4 as uuid} from 'uuid'

export const BRANDSSEED:Brand[] = [
    {
        id: uuid(),
        brand: 'Toyota'
    },
    {
        id: uuid(),
        brand: 'Nissan'
    },
    {
        id: uuid(),
        brand: 'Honda'
    },
    {
        id: uuid(),
        brand: 'Mazda'
    }
]