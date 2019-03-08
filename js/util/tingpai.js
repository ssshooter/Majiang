import { utilXiangting } from './xiangting'

export const utilTingpai = function(shoupai, xiangting) {
  var pai = []

  if (shoupai._zimo) return pai

  xiangting = xiangting || utilXiangting

  var n_xiangting = xiangting(shoupai)
  for (var s of ['m', 'p', 's', 'z']) {
    var bingpai = shoupai._bingpai[s]
    for (var n = 1; n < bingpai.length; n++) {
      if (bingpai[n] >= 4) continue
      bingpai[n]++
      if (xiangting(shoupai) < n_xiangting) pai.push(s + n)
      bingpai[n]--
    }
  }

  return pai
}
