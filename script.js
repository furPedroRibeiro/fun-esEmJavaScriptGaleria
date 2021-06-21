            alert("Seja bem vindo, para melhor experiência, digite f11 no seu teclado;)");
            function oi(){
                alert("Olá");
            }
            
            function oiEscrito(){
                document.getElementById('h1').innerHTML="Olá"
            }
            function escrever(){
                var texto=prompt("Digite seu texto:");
                document.getElementById('h1').innerHTML=texto;           
            }
            function corTexto(){
                var cor=prompt("Digite a cor(em inglês):");
                document.body.style.color = cor;           
            }
            function corFundo(){
                var cor=prompt("Digite a cor(em inglês):");
                document.body.style.backgroundColor = cor;           
            }
            function somar(){
                var a = parseInt(prompt("Digite o primeiro valor:"));
                var b = parseInt(prompt("Digite o segundo valor:"));
                alert(a+"+"+b+"="+(a+b));           
            }
            function trocarFoto(novafoto){
                document.getElementById('grande').src = novafoto.src;
            }
            function multiplicar(){
                var a = parseInt(prompt("Digite o primeiro valor:"));
                var b = parseInt(prompt("Digite o segundo valor:"));
                alert(a+ "x" +b+ "=" +(a*b));
            }
            function subtrair(){
                var a = parseInt(prompt("Digite o primeiro valor:"));
                var b = parseInt(prompt("Digite o segundo valor:"));
                alert(a+ "-" +b+ "=" +(a-b));
            }
            function dividir(){
                var a = parseInt(prompt("Digite o primeiro valor:"));
                var b = parseInt(prompt("Digite o segundo valor:"));
                alert(a+ "/" +b+ "=" +(a/b));
            }
            function trocarFOto(fotonova){
                document.getElementById('maior').src = fotonova.src;
            }