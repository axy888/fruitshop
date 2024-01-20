// preview




let carts= document.querySelectorAll('.add-cart');

let products =[
    {
        id:0,
        name: "cam",
        tag: "Fruit",
        cost: 30000,
        image: "picture/cam.jpg",
        inCart: 0
    },
    {
        id:1,
        name: "chuối",
        tag: "Fruit",
        cost: 20000,
        image: "picture/chuối.jpg",
        inCart: 0
    },
    {
        id:2,
        name: "dưa hấu",
        tag: "Fruit",
        cost: 40000,
        image: "picture/dưa hấu.jpg",
        inCart: 0
    },
    {
        id:3,
        name: "táo",
        tag: "Fruit",
        cost: 40000,
        image: "picture/táo.jpg",
        inCart: 0
    },
    {
        id:4,
        name: "xoài",
        tag: "Fruit",
        cost: 50000,
        image: "picture/xoài.jpg",
        inCart: 0
    },
    {
        id:5,
        name: "xoài",
        tag: "Fruit",
        cost: 50000,
        image: "picture/xoài.jpg",
        inCart: 0
    },
    {
        id:6,
        name: "xoài",
        tag: "Fruit",
        cost: 50000,
        image: "picture/xoài.jpg",
        inCart: 0
    },
    {
        id:7,
        name: "xoài",
        tag: "Fruit",
        cost: 50000,
        image: "picture/xoài.jpg",
        inCart: 0
    },
    {
        id:8,
        name: "xoài",
        tag: "Fruit",
        cost: 50000,
        image: "picture/xoài.jpg",
        inCart: 0
    },
    {
        id:9,
        name: "xoài",
        tag: "Fruit",
        cost: 50000,
        image: "picture/xoài.jpg",
        inCart: 0
    },
    {
        id:10,
        name: "xoài",
        tag: "Fruit",
        cost: 50000,
        image: "picture/xoài.jpg",
        inCart: 0
    },
    {
        id:11,
        name: "xoài",
        tag: "Fruit",
        cost: 50000,
        image: "picture/xoài.jpg",
        inCart: 0
    },
    {
        id:12,
        name: "xoài",
        tag: "Fruit",
        cost: 50000,
        image: "picture/xoài.jpg",
        inCart: 0
    },
    {
        id:13,
        name: "xoài",
        tag: "Fruit",
        cost: 50000,
        image: "picture/xoài.jpg",
        inCart: 0
    },
    {
        id:14,
        name: "xoài",
        tag: "Fruit",
        cost: 50000,
        image: "picture/xoài.jpg",
        inCart: 0
    },
    {
        id:15,
        name: "xoài",
        tag: "Fruit",
        cost: 50000,
        image: "picture/xoài.jpg",
        inCart: 0
    },
    {
        id:16,
        name: "xoài",
        tag: "Fruit",
        cost: 50000,
        image: "picture/xoài.jpg",
        inCart: 0
    },
    {
        id:17,
        name: "xoài",
        tag: "Fruit",
        cost: 50000,
        image: "picture/xoài.jpg",
        inCart: 0
    },
    {
        id:18,
        name: "xoài",
        tag: "Fruit",
        cost: 50000,
        image: "picture/xoài.jpg",
        inCart: 0
    },
    {
        id:19,
        name: "xoài",
        tag: "Fruit",
        cost: 50000,
        image: "picture/xoài.jpg",
        inCart: 0
    },
    {
        id:20,
        name: "xoài",
        tag: "Fruit",
        cost: 50000,
        image: "picture/xoài.jpg",
        inCart: 0
    },
    {
        id:21,
        name: "xoài",
        tag: "Fruit",
        cost: 50000,
        image: "picture/xoài.jpg",
        inCart: 0
    },
]

for(let i=0; i < carts.length; i++)//nhấp tăng số lượng trong giỏ
{
    carts[i].addEventListener('click', () => {
        
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
    
}

function onLoadCartNumbers()//để khi F5 không bị mất số lượng trong giỏ
{
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers)
    {
       
        document.querySelector('.cart span').textContent =productNumbers;
    }
}

function cartNumbers(products)
{
    
    let productNumbers = localStorage.getItem('cartNumbers');// số lượng sản phẩm trong giỏ
    
    productNumbers = parseInt(productNumbers);//chuyển string sang int
    
    if(productNumbers)
    {
        localStorage.setItem('cartNumbers',productNumbers +1);
        document.querySelector('.cart span').textContent=productNumbers+1;
    }
    else// hiện không có hàng trong giỏ
    {
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent=1;
    }
    
    setItem(products);
}

function setItem(products)//tăng số lượng sản phẩm trong giỏ
{
    let cartItem= localStorage.getItem('productInCart');
    cartItem=JSON.parse(cartItem);
   
    if(cartItem!=null)
    {
        if(cartItem[products.name] == undefined ) 
        {
            cartItem =
            {
                ...cartItem,[products.name]:products
            }
        }
        cartItem[products.name].inCart+=1;
    }
    else
    {
        products.inCart=1;
        cartItem =
        {
            [products.name]: products
        }
    }
    
   
    localStorage.setItem("productInCart",JSON.stringify(cartItem));
}

function totalCost(products)
{
    let cartCost= localStorage.getItem('totalCost');
   

    if(cartCost!=null)
    {
        cartCost=parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + products.cost);
    }
    else
    {
        localStorage.setItem("totalCost",products.cost);
    }
}



function displayCart()
{
     onCart();
     
    let cartItem= localStorage.getItem("productInCart");
    cartItem=JSON.parse(cartItem);
    
    let productContainer= document.querySelector(".gio");//vấn đề
   
    let cartCost= localStorage.getItem('totalCost');
    
    if(cartItem && productContainer)
    {
       
        productContainer.innerHTML = '';
       
        Object.values(cartItem).map(item => {
           
            productContainer.innerHTML += `
           
                <div class="pp">
                    <p onclick="del(${item.id})"><i class="fa fa-times-circle"></i></p>
                   
                    <img class="product-image" src="${item.image}">
                    <span>${item.name}</span>
                </div>
                    <div class="price">${item.cost}đ</div>
                    
                            <div class="quantity">
                            <i class="fa fa-arrow-circle-left"></i>
                            <span>${item.inCart}</span>
                            <i class="fa fa-arrow-circle-right"></i>
                            </div>
                            <div class="total">
                                ${item.inCart * item.cost}đ
                            </div>
                       
                        
            `
            
        });
        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
            Total
            <h4 class="basketTotal">
            ${cartCost}đ
            <div class="new-col">
                <span onclick="end()" class="add-cart"> BUY
                    </span>
                    </div>
            <div class="col">
                <span onclick="end2()" class="add-cart"> REMOVE ALL 
                </span>
                
            </div>
        </div>
        `
       
    }
    
}

function del(id)
{
    let cartItem= localStorage.getItem("productInCart");
    cartItem=JSON.parse(cartItem);
    cartItem=Object.values(cartItem).splice(id,1);
   
    console.log(cartItem)
    
   
}




function end()
{
    alert('Purchase complete!!!');
    localStorage.clear();
    let productContainer= document.querySelector(".gio");
    productContainer.innerHTML = '';
    document.querySelector('.cart span').textContent=0;
    offCart();
    
}
function end2()
{
    alert('Remove successful!!!');
    localStorage.clear();
    let productContainer= document.querySelector(".gio");
    productContainer.innerHTML = '';
    document.querySelector('.cart span').textContent=0;
    offCart();
    
}

onLoadCartNumbers();

displayCart();
offCart();

function log(){
    const log = document.querySelector(".khung")
    log.style.display = "block";
}

function out(){
    const out = document.querySelector(".khung")
    out.style.display = "none";
}

function onCart()
{
    const empty =document.querySelector(".empty2")
    empty.style.display="none";
}

function offCart()
{
    const empty2 =document.querySelector(".empty2")
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers==0 || productNumbers==null)
    empty2.style.display="block";
}

