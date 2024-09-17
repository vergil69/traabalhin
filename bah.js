let inventario = [
    { nome: "bife de chorizo", preco: 85.00, emEstoque: true },
    { nome: "risoto de funghi", preco: 75.00, emEstoque: false },
    { nome: "sushi variado", preco: 90.00, emEstoque: true },
    { nome: "feijoada completa", preco: 80.00, emEstoque: false },
    { nome: "pizza margherita", preco: 45.00, emEstoque: false },
    { nome: "espaguete à carbonara", preco: 60.00, emEstoque: true },
    { nome: "moqueca de camarão", preco: 95.00, emEstoque: true },
    { nome: "hamburguer gourmet", preco: 55.00, emEstoque: false },
    { nome: "salada caesar", preco: 40.00, emEstoque: true },
    { nome: "lasanha de carne", preco: 70.00, emEstoque: true },
    { nome: "ceviche de peixe branco", preco: 65.00, emEstoque: true },
    { nome: "tacos de carnitas", preco: 50.00, emEstoque: false },
    { nome: "frango com curry", preco: 60.00, emEstoque: false },
    { nome: "tiramisu", preco: 35.00, emEstoque: true },
    { nome: "brownie de chocolate", preco: 30.00, emEstoque: true }
  ];
  

  inventario.push({ nome: "arroz doce", preco: 15.00, emEstoque: true });
  

  inventario[0].preco = 120.00;

  inventario[2].emEstoque = false;

  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].emEstoque) {
      console.log(inventario[i].nome + ' está em estoque.');
    }
  }
  

  let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
  console.log(produtosEmEstoque);
  