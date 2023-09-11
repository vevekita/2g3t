escrever = (msg) => alert(msg);
soma = (a,b) => a + b; 

sub = (a,b) => a - b; 

div = (a,b) => a / b; 

mult = (a,b) => a * b; 

raiz = a => Math.sqrt(a);

eq2grau = (a,b,c) => {
    if(a < 0) return "Não é uma equação do 2° grau";
    let delta = sub(mult(b,b),mult(4,mult(a,c)));
    if(delta < 0) return "Não possui raiz real.";
    if(delta == 0) return "x1 = x2 = " + div(-b,mult(2,a));
    return "x1 " + div(soma(-b,raiz(delta)),mult(2,a)) +
           "x2 " + div(sub(-b,raiz(delta)),mult(2,a));


}

escreva(eq2grau(1,3,-8));