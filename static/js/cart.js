let updateBtns = document.getElementsByClassName('update-cart')

for (i = 0; i< updateBtns.length; i++){
    updateBtns[i].addEventListener('click',function(){
        let productId = this.dataset.product
        let action = this.dataset.action
        console.log('productId:', productId,'Action:',action)

        console.log('USER:',user)
        if(user === 'AnonymousUser'){
            console.log('Not logged in')
        } else{
            updateUserOrder(productId, action)
            // console.log('User is logged in, sending data....')
        }
    })
}
function updateUserOrder(productId, action){
    console.log('User is authenticated, sending data...')
        var url = '/update_item/'
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({'productId':productId, 'action':action})
        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log('data:',data)
        });
}