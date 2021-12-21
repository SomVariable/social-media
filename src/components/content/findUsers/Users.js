import React from 'react';
import style from "./usersStyles.module.css"
import User from "./User/User";
import * as axios from "axios"
import servData from "../../../servData/servData"

class Users extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props)
        axios.get(`https://gorest.co.in/public/v1/users?page=${this.props.currentPage}`).then(response => {
            console.log('responce ',response)
            const updatedData = response.data.data.map(u => {
                const randomIntForGeneration = Math.floor(Math.random()*10)
                const follow = randomIntForGeneration > 5
                const city = servData.cityes.slice(randomIntForGeneration, randomIntForGeneration+1).join('')
                return {
                    ...u,
                    follow: follow,
                    city: city
                }
            })
            this.props.setUsersActionCreator(updatedData)
            this.props.setTotalCountActionCreator(response.data.meta.pagination.total)
        })
    }

    render(){
        const setPages = (startPage, totalCount) => {
            debugger
            const isLessOne = startPage <= 0;
            const isLastPages = startPage+1 >= totalCount-1
            let pages = []
            isLessOne?pages = [1, 2]:pages = [startPage, startPage+1, startPage+2]
            if(isLastPages){
                pages = [totalCount-2,totalCount-1, totalCount]
            }else{
                pages.push('...')
                for(let pageNumber = totalCount-1; pageNumber <= this.props.totalCount; pageNumber++){
                    pages.push(pageNumber)
                }
            }
            return pages
        }

        const pages = setPages(this.props.currentPage-1, this.props.totalCount);

        debugger

        const createPage = (page) => {
            const pageNumber = <span className={
                `${style.page}
                ${this.props.currentPage === page?
                    style.selected:
                    style.unselected}`
            } onClick={() => this.props.setSelectedActionCreator(page)}>{page}</span>
            const hiddenPages = <span className={style.page}>{page}</span>
            const _page = /\d/.exec(page)? pageNumber: hiddenPages
            return _page
        }
        return (
            <div className={style.usersPage}>
                <div className={style.pagination}>
                    {
                        pages.map(page => {
                            return createPage(page)
                        })
                    }
                </div>
                {this.props.users.map(user => {
                    return <User user = {user} followUser = {this.props.followUserActionCreator} unfollowUser = {this.props.unfollowUserActionCreator}/>
                })}
            </div>
        );
    }
}


// const Users = props => {
//     if(props.users.length === 0){
//         axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
//             const updatedData = response.data.map(u => {
//                 const follow = Math.floor(Math.random()*10) > 5? true: false
//                 return {
//                     ...u,
//                     follow: follow
//                 }
//             })
//             props.setUsersActionCreator(updatedData)
//         })
//     }
//
//     return (
//         <div className={styles.usersPage}>
//             {props.users.map(user => {
//                 return <User user = {user} followUser = {props.followUserActionCreator} unfollowUser = {props.unfollowUserActionCreator}/>//
//             })}
//         </div>
//     );
// };

export default Users;