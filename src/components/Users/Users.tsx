import {UsersPropsType} from './UsersContainer';
import styles from './users.module.css'
import axios from "axios";
import usersPhoto from '../../assets/images/users-img.jpg';


export const Users = (props: UsersPropsType) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            });
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small !== null ? u.photos.small : usersPhoto} className={styles.userPhoto}
                         alt="avatar"/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>Follow</button>
                    }

                </div>
            </span>
                    <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
                </div>
            )}
    </div>
}