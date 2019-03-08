/*
 *  Majiang.Audio
 */

export default {
  _audio: {
    dapai: new Audio('audio/dahai11.wav'),
    chi: new Audio('audio/chii.wav'),
    peng: new Audio('audio/pon.wav'),
    gang: new Audio('audio/kan.wav'),
    lizhi: new Audio('audio/richi.wav'),
    rong: new Audio('audio/ron.wav'),
    zimo: new Audio('audio/tsumo.wav'),
  },
  _volume: 5,

  volume: function(level) {
    if (level == null) return this._volume
    for (var name in this._audio) {
      this._audio[name].volume = level / 5
    }
    this._volume = level
  },
  play: function(name, i) {
    this._audio[name].play()
  },
}
