$ ->
  $2w.controller('quickdemo', (scope) ->
    scope.dollar = ->
      return scope.name * 1.0661
    )
