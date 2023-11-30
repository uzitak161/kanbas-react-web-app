import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Account() {
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();

    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const save = async () => {
        await client.updateUser(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };

    useEffect(() => {
        fetchAccount();
    }, []);

    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div className="list-group">
                    <input className="list-group-item" value={account.password}
                        onChange={(e) => setAccount({
                            ...account,
                            password: e.target.value
                        })} />
                    <input className="list-group-item" value={account.firstName}
                        onChange={(e) => setAccount({
                            ...account,
                            firstName: e.target.value
                        })} />
                    <input className="list-group-item" value={account.lastName}
                        onChange={(e) => setAccount({
                            ...account,
                            lastName: e.target.value
                        })} />
                    <input type="date" className="list-group-item" value={account.dob}
                        onChange={(e) => setAccount({
                            ...account,
                            dob: e.target.value
                        })} />
                    <input className="list-group-item" value={account.email}
                        onChange={(e) => setAccount({
                            ...account,
                            email: e.target.value
                        })} />
                    <select className="list-group-item" value={account.role ? account.role : "User"} onChange={(e) => setAccount({
                        ...account,
                        role: e.target.value
                    })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button className="btn btn-primary" onClick={save}>
                        Save
                    </button>
                    <Link to="/project/admin/users" className="btn btn-warning w-100">
                        Users
                    </Link>
                    <button className="btn btn-danger" onClick={signout}>
                        Signout
                    </button>
                </div>
            )}
        </div>
    );
}
export default Account;