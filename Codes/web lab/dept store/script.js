var app = angular.module("store",[]);
app.controller("mainCtrl",function($scope){
    $scope.products = [
        {
            group:["shirts","pants","dresses","jackets","Clothing"],
            price:2000
        },
        {
            group:["sneakers","sandals","boots","handbags","wallets"],
            price:800
        },
        {
            group:["Lipstick",
                "Facial cleanser",
                "Moisturizer",
                'Mascara',
                'Perfume'
                ],
            price:200
        },
        {
            group:['Television',
                'Smartphone',
                'Headphones',
                'Laptop',
               ' Gaming console'],
            price:20000
        }
    ];
    $scope.selectedList = [];
    $scope.getSelectedValue = function(x){
        console.log(x);
        $scope.selectedList.push(x);
    }
    var sum = 0; 
    $scope.submit =async function(){
         for(var i=0;i<$scope.selectedList.length;i++){
            sum+=await $scope.selectedList[i];
        }
        await alert(`Total amount computer based on the selected items(inclusive of GST) is ${sum}`);
        location.reload();
    }
})


function scroll(){
    console.log("clicked");
    var destination = document.getElementById("table");
    destination.scrollIntoView({behavior:"smooth"});
}