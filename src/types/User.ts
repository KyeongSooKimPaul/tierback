import { objectType } from '@nexus/schema'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.deposit()
    t.model.point()
    t.model.phonenumber()
    t.model.tweets({ pagination: false })
    t.model.Profile()
    t.model.likedTweet()
    t.model.comments()
    t.model.Following()
    t.model.UserProfile()
    t.model.ExchangeRate()
    t.model.Deliveryfee()
    t.model.Sellingprice()
    t.model.Subid()
    t.model.Connectinfo()
    t.model.Maxiplan()
    t.model.createdAt()
    t.model.Adminbasicplan()
    t.model.Adminbasicmall()
    t.model.Adminoptionfee()
    t.model.Admincollectmarket()
    t.model.Admincollectnation()
    t.model.Admincollectcategory()
    t.model.Admincommissionmarket()
    t.model.Admincommissionfee()
    t.model.Admincommissiontransfer()
    t.model.Adminsellerfiltering()
    t.model.Stockhandling()
    t.model.Checkpoint()
    t.model.Changepoint()
   
    t.model.Ordermanageitems()
    t.model.Deliverymangeitems()
    t.model.Filtering()

    t.model.Productupdate()
    t.model.Addmenual()

    t.model.Termsanduse()
    t.model.Refundpolicy()
    t.model.Privacypolicy()
    t.model.Paidproductlist()
  },
})
