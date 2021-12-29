import React from 'react';
import style from "./usersStyles.module.css"
import User from "./User/User";
import Preloader from "../../../common/Preloader";



const Users = props => {
    const setPages = (startPage, totalCount) => {
        const isLessOne = startPage <= 0;
        const isLastPages = startPage+1 >= totalCount-1
        let pages = []
        isLessOne?pages = [1, 2]:pages = [startPage, startPage+1, startPage+2]
        if(isLastPages){
            pages = [totalCount-2,totalCount-1, totalCount]
        }else{
            pages.push('...')
            for(let pageNumber = totalCount-1; pageNumber <= props.state.totalCount; pageNumber++){
                pages.push(pageNumber)
            }
        }
        return pages
    }

    const pages = setPages(props.state.currentPage-1, props.state.totalCount);

    const createPage = (page) => {
        const pageNumber = <span className={
            `${style.page}
                ${props.state.currentPage === page?
                style.selected:
                style.unselected}`
        } onClick={() => {
            debugger
            props.dispatch.onPage(page)}}>{page}</span>
        const hiddenPages = <span className={style.page}>{page}</span>
        const _page = /\d/.exec(page)? pageNumber: hiddenPages
        return _page
    }
    return (
        <>
            <div className={style.usersPage}>
                <div className={style.pagination}>
                    {
                        pages.map(page => {
                            return createPage(page)
                        })
                    }
                </div>
                { props.state.users.map(user => {
                    return <User user = {user} isFetching = {props.state.isFetching} followUser  = {props.dispatch.followUserActionCreator} unfollowUser = {props.dispatch.unfollowUserActionCreator}/>
                })}
            </div>
        </>
        )

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