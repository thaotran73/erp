const Home = {
    text: 'Home',
    link: '/home',
    icon: 'icon-home'
};
const WHMainMaterial = {
    text: 'Main Material Warehouse',
    link: '/mainmaterial',
    icon: 'icon-home',
};
const WHAuxiliaryMaterial = {
    text: 'Auxiliary Material Warehouse',
    link: '/auxiliarymaterial',
    icon: 'icon-home',
}
const WHFinishedProduct = {
    text: 'Finished Product Warehouse',
    link: '/wh_finished_product',
    icon: 'icon-home',
    submenu: [
        {
            text: 'Master Category',
            link: '/wh_finished_product/master_category',
            icon: 'icon-home',
            submenu: [
                {
                    text: 'Inventory List',
                      link: '/wh_finished_product/master_category/inventory_list',
                    icon: 'icon-home',
                },
                {
                    text: 'Product Code Catalog',
                        link: '/wh_finished_product/master_category/product_code_catalog',
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

