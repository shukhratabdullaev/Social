import React from "react";
import usersPhoto from "../../assets/images/users-img.jpg";
import styles from "./users.module.css";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";


export class UsersC extends React.Component<UsersPropsType, any> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        });

    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)


        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>

                {pages.map((p, i) => {
                    return <span key={i}  className={this.props.currentPage === p ? styles.selectedPage : ''}
                    onClick={(e) => { this.onPageChanged(p) }}>{p}</span>
                })}


                <span>1</span>
                <span className={styles.selectedPage}>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small !== null ? u.photos.small : usersPhoto} className={styles.userPhoto}
                         alt="avatar"/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
}