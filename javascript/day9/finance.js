// IIFE 
(function (loan){
    this.loan = loan;
    console.log (this.loan);
})(20000)