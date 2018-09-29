
const headingMain = {
    text: 'Main Navigation',
    heading: true
};
const Home = {
    text: 'Home',
    link: '/home',
    icon: 'icon-home'
};
const WHMainMaterial = {
    text: 'Main Material Warehouse',
    link: '/WHMainMaterial',
    icon: 'icon-home',
};
const WHAuxiliaryMaterial = {
    text: 'Auxiliary Material Warehouse',
    link: '/WHAuxiliaryMaterial',
    icon: 'icon-home',
}
const WHFinishedProduct = {
    text: 'Finished Product Warehouse',
    link: '/WHFinishedProduct',
    icon: 'icon-home',
    submenu: [
        {
            text: 'Master Category',
            link: '/WHFinishedProduct/MasterCategory',
            icon: 'icon-home',
         	submenu: [
         		{
		            text: 'Inventory List',
        		    link: '/WHFinishedProduct/MasterCategory/InventoryList',
                    icon: 'icon-home',
         		},
         		{
		            text: 'Product Code Catalog',
        		    link: '/WHFinishedProduct/MasterCategory/ProductCodeCatalog',
                    icon: 'icon-home',
         		}
         	],
        },
        {
            text: 'Interaction',
            link: '/elements/interaction'
        },
        {
            text: 'Notification',
            link: '/elements/notification'
        },
        {
            text: 'SweetAlert',
            link: '/elements/sweetalert'
        },
        {
            text: 'Spinners',
            link: '/elements/spinners'
        },
        {
            text: 'Dropdown',
            link: '/elements/dropdown'
        },
        {
            text: 'Nav Tree',
            link: '/elements/navtree'
        },
        {
            text: 'Sortable',
            link: '/elements/sortable'
        },
        {
            text: 'Grid',
            link: '/elements/grid'
        },
        {
            text: 'Grid Masonry',
            link: '/elements/gridmasonry'
        },
        {
            text: 'Typography',
            link: '/elements/typography'
        },
        {
            text: 'Font Icons',
            link: '/elements/iconsfont'
        },
        {
            text: 'Weahter Icons',
            link: '/elements/iconsweather'
        },
        {
            text: 'Colors',
            link: '/elements/colors'
        },
        {
            text: 'Infinite Scroll',
            link: '/elements/infinitescroll'
        }
    ]
};
const WHMechanialMaterial = {
    text: 'Mechanial Material Warehouse',
    link: '/WHMechanialMaterial',
    icon: 'icon-home',
};
export const menu = [
    Home,
    WHMainMaterial,
    WHAuxiliaryMaterial,
    WHFinishedProduct,
    WHMechanialMaterial
];
