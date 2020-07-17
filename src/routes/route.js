
const router = [
    {
        title:"员工管理",
        icon:'index',
        key:'/index'
    },
    {
        title:'产品管理',
        icon:"laptop",
        key:'/index/pros',
        child:[
            {key:'/index/pros/list',title:'产品列表',icon:''},
            {key:'/index/pros/items',title:'项目列表',icon:''},
            
        ]
    },
    {
        title:'订单管理',
        icon:"laptop",
        key:'/index/order',
        child:[
            {key:'/index/orders/order',title:'订单管理',icon:''},
            {key:'/index/orders/insertorder',title:'生成订单',icon:''},
            {key:'/index/orders/ordersearch',title:'订单查询',icon:''},
            
        ]
    },
]
export default router;