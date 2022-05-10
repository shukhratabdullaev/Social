import React from 'react';
import styles from './Paginator.module.css';

export type PaginatorPropsType = {
  pageSize: number
  totalUsersCount: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
}


export const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged,  ...props }: PaginatorPropsType) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize)


  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }


  return <div>
    <div>
      {pages.map((page) => {
        debugger
        return <span key={page} className={currentPage === page ? styles.selectedPage : ''}
          onClick={() => {
            onPageChanged(page)
          }}>{page}</span>
      })}


      <span>1</span>
      <span className={styles.selectedPage}>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
    </div>

  </div>
}