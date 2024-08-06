import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Logo from '../../assets/logo.webp';
import Xbacon from '../../assets/x-bacon.webp';
import Batata from '../../assets/batata.webp';
import Bolinha from '../../assets/bolinha-de-queijo.jpeg';
import Frango from '../../assets/frango.webp';
import RefriLata from '../../assets/latas.webp';
import RefriGarrafa from '../../assets/garrafas.webp';
import Suco from '../../assets/laranja.webp';
import Picanha from '../../assets/picanha.webp';
import Previsao from '../../assets/previsaoDoTempo.webp';
import Caseirao from '../../assets/caseirao.webp';
import Carrinho from '../../assets/car-market.webp';
import './styles.css'; // Certifique-se de que o caminho está correto

const Menu = () => {
  const [cart, setCart] = useState([]);
  const history = useHistory();

  // Carregar o carrinho do localStorage quando o componente é montado
  useEffect(() => {
    const storedCart = localStorage.getItem('carrinho');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const voltarHome = () => {
    history.push('/');
  };

  const adicionarAoCarrinho = (nome, preco) => {
    setCart(prevCart => {
      const item = prevCart.find(produto => produto.nome === nome);
      let novoCart;
      if (item) {
        novoCart = prevCart.map(produto =>
          produto.nome === nome ? { ...produto, quantidade: produto.quantidade + 1 } : produto
        );
      } else {
        novoCart = [...prevCart, { nome, preco, quantidade: 1 }];
      }
      // Salvar o carrinho atualizado no localStorage
      localStorage.setItem('carrinho', JSON.stringify(novoCart));
      history.push('/carrinho');
      return novoCart;
    });
  };

  useEffect(() => {
    // Atualizar o localStorage sempre que o carrinho mudar
    localStorage.setItem('carrinho', JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo-box">
            <img src={Logo} alt="Logo" className="logo" />
            <h1>Ciro Lanches</h1>
          </div>
          <nav>
            <ul>
              <li><a href="#Home" onClick={voltarHome}>Início</a></li>
              <li><a href="/carrinho">Carrinho</a></li>
            </ul>
            <div className="carrinho-box">
              <a href="/carrinho">
                <img src={Carrinho} alt="Carrinho" className="carrinho-buy" />
                <div id="cart-count">{cart.reduce((total, item) => total + item.quantidade, 0)}</div>
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="container">
        <section id="menu">
          {[
            { img: Picanha, nome: "Burger de Picanha", descricao: "Pão, carne de picanha moída 130g, alface americana, picles, sour cream, bacon. Acompanha batata rústica", preco: 31.00 },
            { img: Xbacon, nome: "X-Bacon", descricao: "Pão, carne caseira 130g, bacon, queijo mussarela, alface, tomate", preco: 24.00 },
            { img: Frango, nome: "X-Frango", descricao: "Pão, frango 160g, bacon, queijo mussarela, alface, tomate, milho e batata palha", preco: 22.00 },
            { img: Previsao, nome: "Previsão do Tempo", descricao: "Pão, carne caseira 130g, queijo mussarela, bacon, alface, tomate, milho. Acompanha batata rústica", preco: 25.00 },
            { img: Caseirao, nome: "Caseirão", descricao: "Pão, duas carnes caseira 130g, queijo mussarela, bacon, alface, tomate, catupiry, cebola roxa no shoyu, maionese verde da casa.", preco: 38.00 },
            { img: Batata, nome: "Batatas com cheddar e bacon", descricao: "Batatas deliciosas e crocantes com cheddar e bacon, porção de 200g", preco: 20.00 },
            { img: Bolinha, nome: "Mini Bolinhas de queijo", descricao: "Bolinhas de queijo, porção com 20 unidades", preco: 19.90 },
            { img: RefriLata, nome: "Refrigerante - Lata", descricao: "Coca-Cola, Guaraná Antártica, Fanta Uva, Fanta Laranja, Sprite, Coca-Cola Zero", preco: 7.00 },
            { img: RefriGarrafa, nome: "Refrigerante - 2 Litros", descricao: "Coca-Cola, Guaraná Antártica, Fanta Uva, Fanta Laranja, Sprite", preco: 14.00 },
            { img: Suco, nome: "Suco de Laranja", descricao: "Suco de Laranja de 500ml", preco: 10.00 },
          ].map((produto, index) => (
            <div key={index} className="produto">
              <img src={produto.img} alt={produto.nome} />
              <div className="produto-info">
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <p className="preco">R$ {produto.preco.toFixed(2)}</p>
                <button
                  className="btn-adicionar"
                  onClick={() => adicionarAoCarrinho(produto.nome, produto.preco)}
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Menu;



// // import React from "react";
// import React, { useState } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import {Carrinhoo} from '../Carrinho/index'

// import { CSS } from "../Menu/styles.css";

// import Logo from '../../assets/logo.webp'
// import Xbacon from '../../assets/x-bacon.webp'
// import Batata from '../../assets/batata.webp'
// import Bolinha from '../../assets/bolinha-de-queijo.jpeg'
// import Frango from '../../assets/frango.webp'
// import RefriLata from '../../assets/latas.webp'
// import RefriGarrafa from '../../assets/garrafas.webp'
// import Suco from '../../assets/laranja.webp'
// import Picanha from '../../assets/picanha.webp'
// import Previsao from '../../assets/previsaoDoTempo.webp'
// import Caseirao from '../../assets/caseirao.webp'
// import Carrinho from '../../assets/car-market.webp'


// /*Batata, bolinha, frango, RefriLata, RefriGarrafa, Suco*/




// const Menu = () => {
//     const [cart, setCart] = useState([]);
//     const history = useHistory()

//     function VoltarHome() {
//         history.push('/')

//     }

    
//     return (

//         <body className="body">


//             <header className="header">
//                 <div class="container">
//                     <div class="logo-box">
//                         <img src={Logo} alt="" class="logo" />
//                         <h1>Ciro Lanches</h1>
//                     </div>
//                     <nav>
//                         <ul>
//                             <li><a href="#Home" onClick={VoltarHome}>Início</a></li>
//                             <li><a href="carrinho.html">Carrinho</a></li>
//                         </ul>

//                         <div class="carrinho-box">
//                             <a href="carrinho.html">
//                                 <img src={Carrinho} alt="" class="carrinho-buy" />
//                                 <div id="cart-count">{cart.length}</div>
//                             </a>
//                         </div>
//                     </nav>

//                 </div>
//             </header>

//             <main class="container">

//                 <section id="menu">

//                     <div class="produto">
//                         <img src={Picanha} alt="Burger de Picanha" />
//                         <div class="produto-info">
//                             <h3>Burger de Picanha</h3>
//                             <p>Pão, carne de picanha moída 130g, alface americana, picles, sour cream, bacon. Acompanha batata rústica </p>
//                             <p class="preco">R$ 31,00</p>
//                             <button class="btn-adicionar" data-nome="Burger de Picanha" data-preco="31.00">Adicionar ao Carrinho</button>
//                         </div>
//                     </div>

//                     <div class="produto">
//                         <img src={Xbacon} />
//                         <div class="produto-info">
//                             <h3>X-Bacon</h3>
//                             <p>Pão, carne caseira 130g, bacon, queijo mussarela, alface, tomate</p>
//                             <p class="preco">R$ 24,00</p>
//                             <button class="btn-adicionar" data-nome="X-Frango" data-preco="24.00">Adicionar ao Carrinho</button>
//                         </div>
//                     </div>
//                     <div class="produto">
//                         <img src={Frango} />
//                         <div class="produto-info">
//                             <h3>X-Frango</h3>
//                             <p>Pão, frango 160g, bacon, queijo mussarela, alface, tomate, milho e batata palha</p>
//                             <p class="preco">R$ 22,00</p>
//                             <button class="btn-adicionar" data-nome="X-Frango" data-preco="22.00">Adicionar ao Carrinho</button>
//                         </div>
//                     </div>

//                     <div class="produto">
//                         <img src={Previsao} alt="Previsão do Tempo" />
//                         <div class="produto-info">
//                             <h3>Previsão do Tempo</h3>
//                             <p>Pão, carne caseira 130g, queijo mussarela, bacon, alface,
//                                 tomate, milho. Acompanha batata rústica</p>
//                             <p class="preco">R$ 25,00</p>
//                             <button class="btn-adicionar" data-nome="Previsão do Tempo" data-preco="25.00">Adicionar ao Carrinho</button>
//                         </div>
//                     </div>

//                     <div class="produto">
//                         <img src={Caseirao} alt="Caseirão" />
//                         <div class="produto-info">
//                             <h3>Caseirão</h3>
//                             <p>Pão, duas carnes caseira 130g, queijo mussarela, bacon, alface, tomate, catupiry, cebola roxa no shoyu, maionese verde da casa.</p>
//                             <p class="preco">R$ 38,00</p>
//                             <button class="btn-adicionar" data-nome="Caseirão" data-preco="38.00">Adicionar ao
//                                 Carrinho</button>
//                         </div>
//                     </div>

//                     <div class="produto">
//                         <img src={Batata} alt="Batata-frita" />
//                         <div class="produto-info">
//                             <h3>Batatas com cheddar e bacon</h3>
//                             <p>Batatas deliciosas e crocantes com cheddar e bacon, porção de 200g</p>
//                             <p class="preco">R$ 20,00</p>
//                             <button class="btn-adicionar" data-nome="Batata frita com cheddar e bacon 200g"
//                                 data-preco="20.00">Adicionar ao Carrinho</button>
//                         </div>
//                     </div>

//                     <div class="produto">
//                         <img src={Bolinha} alt="Mini Bolinhas de Queijo" />
//                         <div class="produto-info">
//                             <h3>Mini Bolinhas de queijo</h3>
//                             <p>Bolinhas de queijo, porção com 20 unidades</p>
//                             <p class="preco">R$ 19,90</p>
//                             <button class="btn-adicionar" data-nome="Mini Bolinhas de Queijo, 20 unidades"
//                                 data-preco="19.90">Adicionar ao Carrinho</button>
//                         </div>
//                     </div>


//                     <div class="produto">
//                         <img src={RefriLata} alt="Refrigerante Lata" />
//                         <div class="produto-info">
//                             <h3>Refrigerante - Lata</h3>
//                             <p>Coca-Cola, Guaraná Antártica, Fanta Uva, Fanta Laranja, Sprite, Coca-Cola Zero</p>
//                             <p class="preco">R$ 7,00</p>
//                             <button class="btn-adicionar" data-nome="Refri em Lata" data-preco="07.00">Adicionar ao
//                                 Carrinho</button>
//                         </div>
//                     </div>

//                     <div class="produto">
//                         <img src={RefriGarrafa} alt="Refrigerante Garrafa" />
//                         <div class="produto-info">
//                             <h3>Refrigerante - 2 Litros</h3>
//                             <p>Coca-Cola, Guaraná Antártica, Fanta Uva, Fanta Laranja, Sprite</p>
//                             <p class="preco">R$ 14,00</p>
//                             <button class="btn-adicionar" data-nome="Refrigerante de 2L" data-preco="14.00">Adicionar ao
//                                 Carrinho</button>
//                         </div>
//                     </div>

//                     <div class="produto">
//                         <img src={Suco} alt="Suco de Laranja" />
//                         <div class="produto-info">
//                             <h3>Suco de Laranja</h3>
//                             <p>Suco de Laranja de 500ml</p>
//                             <p class="preco">R$ 10,00</p>
//                             <button class="btn-adicionar" data-nome="Suco de Laranja" data-preco="10.00">Adicionar ao
//                                 Carrinho</button>
//                         </div>
//                     </div>


//                 </section>
//             </main>

//         </body>


//     )

// }

// export default Menu