$(document).ready(async function() {
      carousel("Application Developer at BMO.", "#feature-text")
    });

    async function typeSentence(sentence, eleRef, delay = 200) {
      const letters = sentence.split("");
      let i = 0;
      while(i < letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[i]);
        i++
      }
      return;
    }

    async function carousel(carouselList, eleRef) {
        var i = 0;
        while(i<1) {
          await typeSentence(carouselList, eleRef);
          i++;
        }
    }

    function waitForMs(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
