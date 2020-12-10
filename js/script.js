/* Esercizio:
- creare una lista di cose da fare e mostrarla in pagina con Vue;
- aggiungere un campo di input e un pulsante per aggiungere nuove cose da fare alla lista;
- cancellare un item dalla lista, al click sulla relativa icona 'X'.
Bonus:
- Oltre al click sul pulsante, consentire l'inserimento del nuovo item anche premendo il tasto Invio della tastiera, dopo aver scritto il testo nel campo di input.
Consiglio del giorno: per alcuni task, potrebbe essere necessario fare delle ricerche e capire come lavorano alcune funzioni o direttive leggendo le documentazioni ufficiali ed analizzando i relativi esempi. */

var app = new Vue({

  el: "#root",
  data: {
    list: [
      "Segliarsi alle 7:00",
      "Fare la spesa",
      "Fare un giro in bici",
      "Leggere 10 pagine del libro"
    ]
  },
  methods: {
    addItem: function() {
      let newItemVal = this.$refs.writeItem.value;
      if (newItemVal !== "") {
        this.list.push(newItemVal);
      }
    },
    deletItem: function(index) {
      this.list.splice(index, 1);
    }

  }


});
