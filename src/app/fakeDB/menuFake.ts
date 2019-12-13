


export class MenuFakeDb {

    // tslint:disable-next-line: variable-name
    public static menu_data = [
        {
            titulo: 'Principal',
            icono: 'fa fa-home',
            submenu: [
                {
                    titulo: 'Home',
                    url: '/home',
                    role: [
                        {
                            _id: '',
                            rol_name: ''
                        }
                    ]
                },
                {
                    titulo: 'Soporte',
                    url: '/support',
                    role: [
                        {
                            _id: '',
                            rol_name: ''
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
                            _id: '',
                            rol_name: ''
                        }
                    ]
                }
            ]
        }
    ];
}
