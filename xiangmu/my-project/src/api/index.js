import {Random} from 'mockjs'

let queryAdvertise = {
  code: 0,
  data: [{ 'actionUrl': 'https://market.m.taopiaopiao.com/markets/TaoBaoMovie/summer-september?spm=dianying.tb.1.1&sqm=dianying.tb.1.1&cityCode=310100', 'advertiseContainer': 'INDEX_BANNER', 'advertiseType': '1', 'extActions': [], 'gmtModified': '1504365905000', 'hasBannerTag': 'false', 'id': '8981', 'priority': '15', 'smallPicUrl': 'tfs/TB1u9oZa3MPMeJjy1XcXXXpppXa-1280-520.jpg', 'smallPicUrl2': 'tfs/TB1u9oZa3MPMeJjy1XcXXXpppXa-1280-520.jpg', 'title': '手淘-暑期大盘9月' }, { 'actionTitle': '1', 'actionUrl': 'https://market.m.taopiaopiao.com/markets/TaoBaoMovie/spiderman?__webview_options__=fullscreen%3dYES&s=tb&spm=dianying.tb.1.1&cityCode=310100', 'advertiseContainer': 'INDEX_BANNER', 'advertiseType': '1', 'bigPicUrl': 'tfs/TB1lWwGbMoQMeJjy1XaXXcSsFXa-1280-520.jpg', 'extActions': [], 'gmtModified': '1504627673000', 'hasBannerTag': 'false', 'id': '8922', 'priority': '14', 'smallPicUrl': 'tfs/TB1lWwGbMoQMeJjy1XaXXcSsFXa-1280-520.jpg', 'smallPicUrl2': 'tfs/TB1lWwGbMoQMeJjy1XaXXcSsFXa-1280-520.jpg', 'title': '三平台集合-蜘蛛侠：英雄归来' }, { 'actionTitle': '1', 'actionUrl': 'https://market.m.taopiaopiao.com/markets/TaoBaoMovie/wolf-warriors?__webview_options__=fullscreen%3dYES&cityCode=310100', 'advertiseContainer': 'INDEX_BANNER', 'advertiseType': '1', 'bigPicUrl': 'tfs/TB17BcsawoQMeJjy1XaXXcSsFXa-1280-520.jpg', 'extActions': [], 'gmtModified': '1504741411000', 'hasBannerTag': 'false', 'id': '7691', 'priority': '13', 'smallPicUrl': 'tfs/TB17BcsawoQMeJjy1XaXXcSsFXa-1280-520.jpg', 'smallPicUrl2': 'tfs/TB17BcsawoQMeJjy1XaXXcSsFXa-1280-520.jpg', 'title': '三平台集合-战狼2' }, { 'actionUrl': 'https://h5.m.taopiaopiao.com/app/dianying/pages/alfheim/content.html?id=13571&s=tb&spm=dianying.tb_13571.1.1&cityCode=310100', 'advertiseContainer': 'INDEX_BANNER', 'advertiseType': '1', 'extActions': [], 'gmtModified': '1504690039000', 'hasBannerTag': 'false', 'id': '9072', 'priority': '12', 'smallPicUrl': 'tfs/TB1aD3zb.gQMeJjy0FiXXXhqXXa-1280-520.png', 'smallPicUrl2': 'tfs/TB1aD3zb.gQMeJjy0FiXXXhqXXa-1280-520.png', 'title': '手淘-《敦刻尔克》V淘评分' }, { 'actionTitle': '1', 'actionUrl': 'https://market.m.taobao.com/markets/TaoBaoMovie/bpfyh?s=tb&spm=dianying.tb.1.1&cityCode=310100', 'advertiseContainer': 'INDEX_BANNER', 'advertiseType': '1', 'bigPicUrl': 'tfs/TB118acQFXXXXcKXpXXXXXXXXXX-1280-520.jpg', 'extActions': [], 'gmtModified': '1504741485000', 'hasBannerTag': 'true', 'id': '4582', 'priority': '9', 'smallPicUrl': 'tfs/TB118acQFXXXXcKXpXXXXXXXXXX-1280-520.jpg', 'smallPicUrl2': 'tfs/TB118acQFXXXXcKXpXXXXXXXXXX-1280-520.jpg', 'title': '三平台集合-浦发银行信用卡10元立减活动' }]
}

let getShowsByCityCode = {
  code: 0,
  data: []
}
let moviemainList = {
  code:0,
  data:[]
}
for (let i = 0; i < 100; i++) {
  let type = Random.integer(1, 2)

  if (type === 1) {
    getShowsByCityCode.data.push({
      name: Random.csentence(3, 10),
      star: Random.string('★', 3, 5),
      director: Random.cname(),
      image: Random.dataImage('113x160'),
      leadingRole: [Random.cname(), Random.cname(), Random.cname()],
      remark: Random.float(0, 9, 1, 1),
      type: type
    })
  } else {
    getShowsByCityCode.data.push({
      name: Random.csentence(3, 10),
      director: Random.cname(),
      image: Random.dataImage('113x160'),
      leadingRole: [Random.cname(), Random.cname(), Random.cname()],
      remarkCount: Random.natural(5),
      data: Random.date('yyyy-MM-dd'),
      type: type
    })
  }
}


for (let i = 0; i < 100; i++) {
  moviemainList.data.push({
    name:Random.csentence(),
    price:'$'+Random.float(1,100,2,2),
    address:(Random.county(true)+Random.integer(1,2)+'号'),
    yewu:[Random.cname(),Random.cname()]
  })
}

export {
  queryAdvertise,
  getShowsByCityCode,
  moviemainList
}

