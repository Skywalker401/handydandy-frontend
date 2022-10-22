import styles from '../styles/Home.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import useApi from '../hooks/useApi';


export default function Home() {
  const { user } = useUser();
  const { data, isLoading } = useApi('https://handy-dandy.azurewebsites.net//api/v1/handydandy/public')

  return (
    <>
      {user ?
        <>
          <a href="/api/auth/logout">Logout</a>
          <p>{user.name}</p>
        </>
        : <a href="/api/auth/login">Login</a>
      }
      {data ?
        (<div className={styles.container}>
          <p>{data.message}</p>
        </div>)
        : <p>No data</p>
      }
    </>
  )
}
