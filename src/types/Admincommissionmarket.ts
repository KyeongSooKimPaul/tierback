import { objectType } from '@nexus/schema'

export const Admincommissionmarket = objectType({
  name: 'Admincommissionmarket',
  definition(t) {
    t.model.id()
    t.model.country()
    t.model.market()
    t.model.fee()
  
  },
})
