import React, { useEffect, useState } from "react";
import { usersApi } from "./api/UserApi";


export const UserPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const resp = await usersApi.get('https://reqres.in/api/users');
        setUsers(resp.data.data);

    }

    //Esto no es HTML es JSX
    return (
        <div className="mt-5">
            <h1>Listado de Usuarios</h1>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.first_name} {user.last_name}</td>
                                <td>
                                    <img
                                        src={user.avatar}
                                        className="img-thumbail"
                                        style={{
                                            width: 80
                                        }}
                                        alt="" />
                                </td>

                            </tr>

                        )
                        )
                    }


                </tbody>
            </table>
        </div>
    )


}