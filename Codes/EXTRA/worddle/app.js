// app.js
angular.module('wordleGame', [])
  .controller('GameController', GameController)
  .filter('wordleMask', wordleMaskFilter);

function GameController() {
  var vm = this;
  var words = ['apple', 'banana', 'cherry', 'donkey', 'eleven', 'falcon', 'grapes', 'humble', 'injury', 'jacket', 'kettle', 'lemon'];

  vm.word = getRandomWord();
  vm.guess = '';
  vm.triesLeft = 12;
  vm.attempts = [];

  vm.checkGuess = function () {
    if (vm.guess.length !== 6) {
      alert('Please enter a 6-letter word.');
      return;
    }

    if (vm.attempts.includes(vm.guess)) {
      alert('You already guessed that word.');
      return;
    }

    vm.attempts.push(vm.guess);

    if (vm.guess === vm.word) {
      alert('Congratulations! You guessed the word correctly!');
      vm.guess = '';
      return;
    }

    vm.triesLeft--;

    if (vm.triesLeft === 0) {
      alert('Game Over! The word was "' + vm.word + '".');
      vm.guess = '';
      return;
    }

    vm.guess = '';
  };

  vm.isGameOver = function () {
    return vm.triesLeft === 0;
  };

  vm.isGameWon = function () {
    return vm.guess === vm.word;
  };

  function getRandomWord() {
    var index = Math.floor(Math.random() * words.length);
    return words[index];
  }
}

function wordleMaskFilter() {
  return function (input) {
    var mask = '';
    for (var i = 0; i < input.length; i++) {
      mask += '*';
    }
    return mask;
  };
}
