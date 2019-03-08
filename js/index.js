import { VERSION } from './majiang'
import { Game } from './game'
// import './paipu'
import AudioObj from './audio'
import { PaipuEditor } from './file'

var game, paipu, editor

$(function() {
  $('.version').text('ver. ' + VERSION)
  $('#title .loading').text('Loading...')

  var id = setInterval(function() {
    $('#title .loading').text($('#title .loading').text() + '.')
  }, 1000)

  function start() {
    $('body')
      .removeClass('editor')
      .addClass('game')
    $('#editor').hide()
    $('#game').show()
    game = new Game()
    game._callback = end
    game.kaiju()
  }

  function end() {
    $('#game').hide()
    $('body')
      .removeClass('game')
      .addClass('editor')
    $('#editor').show()
    while (editor._model.length() >= 10) {
      editor._model.del_paipu(0)
    }
    editor.start(game._paipu)
  }

  editor = new PaipuEditor('Majiang.game')
  $('#editor .next').on('click', start)

  $(window).load(function() {
    AudioObj.volume(1)
    clearInterval(id)
    setTimeout(function() {
      $('#title').hide()
      if (editor._model.length() > 0) {
        $('body')
          .removeClass('game')
          .addClass('editor')
        editor.start()
      } else {
        start()
      }
    }, 2000)
  })
})
