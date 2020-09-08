
function CareerUser (grade,degree, games){
    this.degree = degree;
    this.games = games;
    FinanceUser.call(this, 100000 )
    this.detailOfCareer = function(){
        console.log(this.degree + ' ' + this.games);
    }
}