import { UserModel } from '../models/user.model';



export class UsersFakeDb {

    // tslint:disable-next-line: variable-name
    public static users_data: UserModel[] = [
        {
            rut: '14.159.666-7',
            names: 'Felipe Eduardo',
            lastnames: 'Hernández Hernández',
            email: 'felibass@gmail.com',
            password: '123123',
            role: 'ADMIN_ROLE',
            active: true,
            img: '../assets/images/users/3.jpg',
            _id: 'user_prueba_id_from_mongo',
            menu: [
                {
                    titulo: 'Principal',
                    icono: 'fa fa-home',
                    submenu: [
                        {
                            titulo: 'Home',
                            url: '/home',
                            role: [
                                {
                                    _id: '6yhe7tgjd753ggksadf0002',
                                    rol_name: 'USER_ROLE'
                                }
                            ]
                        },
                        {
                            titulo: 'Soporte',
                            url: '/support',
                            role: [
                                {
                                    _id: '6yhe7tgjd753ggksadf0001',
                                    rol_name: 'USER_ROLE'
                                }
                            ]
                        }
                    ]
                },
                {
                    titulo: 'Mantención',
                    icono: 'fa fa-cog',
                    submenu: [
                        {
                            titulo: 'Mantenedor Usuarios',
                            url: '/usersadmin',
                            role: [
                                {
                                    _id: '6yhe7tgjd753ggksadf0003',
                                    rol_name: 'ADMIN_ROLE'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            rut: '15.351.919-7',
            names: 'Karen Patricia',
            lastnames: 'Iglesias Rodriguez',
            email: 'k.iglesias.r23@gmail.com',
            password: '123123',
            role: 'ORDER_ROLE',
            active: true,
            img: '../assets/images/users/4.jpg',
            _id: 'user_prueba_id_from_mongo002',
            menu: [
                {
                    titulo: 'Principal',
                    icono: 'fa fa-home',
                    submenu: [
                        {
                            titulo: 'Home',
                            url: '/home',
                            role: [
                                {
                                    _id: '123fdsjkhasdlhfadjsfh',
                                    rol_name: 'USER_ROLE'
                                }
                            ]
                        },
                        {
                            titulo: 'Soporte',
                            url: '/support',
                            role: [
                                {
                                    _id: '323edfaklhlfbvciofhasdf',
                                    rol_name: 'USER_ROLE'
                                }
                            ]
                        }
                    ]
                },
                {
                    titulo: 'Ordenes',
                    icono: 'fa fa-cog',
                    submenu: [
                        {
                            titulo: 'Crear Orden',
                            url: '/orden/crear',
                            role: [
                                {
                                    _id: '_sadklfjhkjadshfahsdjf',
                                    rol_name: 'ORDER_ROLE'
                                }
                            ]
                        },
                        {
                            titulo: 'Ver Orden',
                            url: '/orden/ver',
                            role: [
                                {
                                    _id: 'dsafadsfasdfasdfasfd',
                                    rol_name: 'ORD_ROLE'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
    ];
}
